from google.cloud import speech,storage
import io
import wave, struct, matplotlib.pyplot as plt
import syllables
from fuzzywuzzy import fuzz

import parselmouth
from parselmouth.praat import call, run_file
import pandas as pd
import numpy as np
import cloudstorage as gcs
import os
import subprocess
# params:
# bucket_name is the name of our bucket (talko)
# blob is the name of the file
# destination is where you want to save the file to

def read_file(bucket_name,blob,destination):
    storage_client = storage.Client()
    bucket = storage_client.get_bucket(bucket_name)
    blob = bucket.blob(blob)
    blob.download_to_filename(destination)

def upload_file(bucket_name,blob,destination):
    storage_client = storage.Client()
    bucket = storage_client.bucket(bucket_name)
    blob = bucket.blob(blob)
    blob.upload_from_filename(destination)



# def getBucketAndBlob(url):
#     words = url.split('/')
#     return (words[len(words)-2], words[len(words)-1])

# params:
# text is the passage the user wants to write
# m is the name of the .wav file without the .wav extension
# p is the path of the directory that contains the .wav files
#
# returns:
# dataframe of values analyzed from audio
# number_of_syllables
# number_of_pauses
# rate_of_speech
# articulation_rate
# speaking_duration
# original_duration
# balance
# words_per_min


def getStats(text,m,p):
    sound=p+m+".wav"
    sourcerun="./myspsolution.praat"
    path=p
    objects= run_file(sourcerun, -20, 2, 0.3, "yes",sound,path, 80, 400, 0.01, capture_output=True)
    z1=str( objects[1]) # This will print the info from the textgrid object, and objects[1] is a parselmouth.Data object with a TextGrid inside
    z2=z1.strip().split()
    z3=np.array(z2)
    z4=np.array(z3)[np.newaxis]
    z5=z4.T
    words = len(text.split())
    duration = z5[5,:]
    words_per_min = int(words/float(float(z5[5,:])/60))

    dataset=pd.DataFrame({"number_of_syllables":z5[0,:],"number_of_pauses":z5[1,:],"rate_of_speech":z5[2,:],"articulation_rate":z5[3,:],"speaking_duration":z5[4,:],
                        "original_duration":z5[5,:],"balance":z5[6,:],"words_per_min":words_per_min})
    dataset["number_of_syllables"] = dataset["number_of_syllables"].astype(float)
    dataset["number_of_pauses"] = dataset["number_of_pauses"].astype(float)
    dataset["rate_of_speech"] = dataset["rate_of_speech"].astype(float)
    dataset["articulation_rate"] = dataset["articulation_rate"].astype(float)
    dataset["speaking_duration"] = dataset["speaking_duration"].astype(float)
    dataset["original_duration"] = dataset["original_duration"].astype(float)
    dataset["balance"] = dataset["balance"].astype(float)

    return dataset.to_dict(orient='index')[0]
    # except:
    #     print("Try again")
    #     words = len(text.split())
    #     return {"number_of_syllables": words*3,
    #             "number_of_pauses": int(words/6),
    #             "rate_of_speech": 4,
    #             "articulation_rate": 5,
    #             "speaking_duration": 20,
    #             "original_duration": 22,
    #             "balance": 0.65}

# params:
# userInput is the first text you want to compare
# transcribed is the second text you want to compare it to
#
# returns:
# integer value from 0-100 that represents the percentage of accuracy\

def getAccuracy(userInput,transcribed):
    return fuzz.ratio(userInput,transcribed)

def getTranscription(gcs_uri):

    client = speech.SpeechClient()

    audio = speech.RecognitionAudio(uri=gcs_uri)
    config = speech.RecognitionConfig(
        language_code="en-US",
        audio_channel_count=2
    )

    operation = client.long_running_recognize(config=config, audio=audio)

    print("Waiting for operation to complete...")
    response = operation.result(timeout=90)
    words = ""
    for result in response.results:
        # The first alternative is the most likely one for this portion.
        words = words + result.alternatives[0].transcript
    return words

def getAccuracyTemp(goodorbad):
    if goodorbad == "good":
        return 0.98
    return 0.71

def getStatsTemp(goodorbad):
    if goodorbad == "good":
        return {"number_of_syllables": 250,
                "number_of_pauses": 3,
                "rate_of_speech": 4,
                "articulation_rate": 5,
                "speaking_duration": 20,
                "original_duration": 22,
                "balance": 0.8}
    return {"number_of_syllables": 250,
            "number_of_pauses": 12,
            "rate_of_speech": 3,
            "articulation_rate": 5,
            "speaking_duration": 30,
            "original_duration": 34,
            "balance": 0.5}



# params:
# file is the filename
#
# returns:
# returns an array of 100 data points from 0 to 1 that
# represent the normalized audio level

def getAudioValues(file):
    w = wave.open(file,"rb")
    p = w.getparams()
    print(p)

    # Mono channel or dual channel
    channels = p[0]

    # Framerate of the audio file, usually in 44100Hz
    framerate = p[2]

    # Number of frames in the audio file
    frames = p[3]

    frameArray = w.readframes(frames)

    # How many datapoints we want to show 
    dataPoints = 100

    # Points average
    pointsAverage = 10

    # Convert to an array of frames
    frameArray = np.fromstring(frameArray, np.int16)

    # Average non-mono channels into a mono channel
    frameArray = np.mean(frameArray.reshape(-1,channels),axis=1)

    # Remove extra frames when averaging
    additionalFrames = (len(frameArray) % (dataPoints * pointsAverage))
    if additionalFrames != 0:
        frameArray = frameArray[:-additionalFrames]
    
    frameArray = np.mean(frameArray.reshape(-1,int(len(frameArray)/(dataPoints*pointsAverage))),axis=1)

    # Only take the maximum point after every pointsAverage
    frameArray = np.max(frameArray.reshape(-1,pointsAverage),axis=1)

    poly = np.polyfit(np.arange(dataPoints),frameArray,50)
    poly_y = np.poly1d(poly)(np.arange(dataPoints))

    # Normalize values between 0 and 1 
    normalize = (poly_y - np.min(poly_y)) / (np.max(poly_y) - np.min(poly_y))

    return normalize

def convert_and_split(filename):
    command = ['ffmpeg', '-i', filename + ".webm", filename + ".wav"]
    subprocess.run(command,stdout=subprocess.PIPE,stdin=subprocess.PIPE)