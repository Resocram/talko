from google.cloud import speech
import io
import wave, struct, matplotlib.pyplot as plt
import syllables
from fuzzywuzzy import fuzz

import parselmouth
from parselmouth.praat import call, run_file
import pandas as pd
import numpy as np

def getStats(m,p):
    sound=p+"/"+m+".wav"
    sourcerun=p+"/myspsolution.praat"
    path=p+"/"
    try:
        objects= run_file(sourcerun, -20, 2, 0.3, "yes",sound,path, 80, 400, 0.01, capture_output=True)
        z1=str( objects[1]) # This will print the info from the textgrid object, and objects[1] is a parselmouth.Data object with a TextGrid inside
        z2=z1.strip().split()
        z3=np.array(z2)
        z4=np.array(z3)[np.newaxis]
        z5=z4.T
        dataset=pd.DataFrame({"number_ of_syllables":z5[0,:],"number_of_pauses":z5[1,:],"rate_of_speech":z5[2,:],"articulation_rate":z5[3,:],"speaking_duration":z5[4,:],
                          "original_duration":z5[5,:],"balance":z5[6,:],"f0_mean":z5[7,:],"f0_std":z5[8,:],"f0_median":z5[9,:],"f0_min":z5[10,:],"f0_max":z5[11,:],
                          "f0_quantile25":z5[12,:],"f0_quan75":z5[13,:]})
        return (dataset)
    except:
        print ("Try again the sound of the audio was not clear")


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

def getAudioValues(file):
    w = wave.open(file,"rb")
    p = w.getparams()

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

    frameArray = frameArray[:-additionalFrames]
    frameArray = np.mean(frameArray.reshape(-1,int(len(frameArray)/(dataPoints*pointsAverage))),axis=1)

    # Only take the maximum point after every pointsAverage
    frameArray = np.max(frameArray.reshape(-1,pointsAverage),axis=1)

    poly = np.polyfit(np.arange(dataPoints),frameArray,50)
    poly_y = np.poly1d(poly)(np.arange(dataPoints))

    # Normalize values between 0 and 1 
    normalize = (poly_y - np.min(poly_y)) / (np.max(poly_y) - np.min(poly_y))

    return normalize

def getWordPerMin(text):
    # TODO
    print (syllables.estimate(text))
