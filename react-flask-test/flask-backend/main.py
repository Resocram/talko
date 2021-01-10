from flask import Flask
from google.cloud import speech
import io
import wave, numpy as plt
import syllables
from fuzzywuzzy import fuzz

app = Flask(__name__)

@app.route('/api', methods=['GET'])
def api():
    x = getStats('a.wav', '../../audio-files')
    print(x)
    print('hello hello hello')
    return x
    # return {
    #   stats: getStats('a.wav', '../../audio-files/a.wav'),
    #   accuracy: getAccuracy(),
    #   audioValues: getAudioValues(),
    # }
    
def getStats(file, directory):
    mysp=__import__("my-voice-analysis")
    p=file # Audio File Name
    c=directory # Path to the Audio File Directory
    return mysp.mysptotal(p,c)   

# def getAccuracy(userInput, transcribed):
#     return fuzz.ratio(userInput,transcribed)

# def getAudioValues(file):
#     w = wave.open(file,"rb")
#     p = w.getparams()

#     # Mono channel or dual channel
#     channels = p[0]

#     # Framerate of the audio file, usually in 44100Hz
#     framerate = p[2]

#     # Number of frames in the audio file
#     frames = p[3]

#     frameArray = w.readframes(frames)

#     # How many datapoints we want to show 
#     dataPoints = 10

#     # Convert to an array of frames
#     frameArray = numpy.fromstring(frameArray, numpy.int16)

#     # Average non-mono channels into a mono channel
#     frameArray = numpy.mean(frameArray.reshape(-1,channels),axis=1)

#     # Remove extra frames when averaging
#     additionalFrames = (len(frameArray) % (dataPoints))

#     frameArray = frameArray[:-additionalFrames]
#     frameArray = numpy.mean(frameArray.reshape(-1,int(len(frameArray)/dataPoints)),axis=1)

#     # Normalize values between 0 and 1 
#     normalize = (frameArray - numpy.min(frameArray)) / (numpy.max(frameArray) - numpy.min(frameArray))

#     # plt.plot(normalize)
#     # plt.show()

#     return normalize
