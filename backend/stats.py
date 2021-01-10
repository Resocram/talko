from google.cloud import speech
import io
import wave, numpy, struct, matplotlib.pyplot as plt
import syllables
from fuzzywuzzy import fuzz

def getStats(file, directory):
    mysp=__import__("my-voice-analysis")
    p=path # Audio File Name
    c=directory # Path to the Audio File Directory
    return mysp.mysptotal(p,c)

def getAccuracy(userInput,transcribed):
    return fuzz.ratio(userInput,transcribed)

def getTranscription(gcs_uri):

    client = speech.SpeechClient()

    audio = speech.RecognitionAudio(uri=gcs_uri)
    config = speech.RecognitionConfig(
        language_code="en-US",
    )

    operation = client.long_running_recognize(config=config, audio=audio)

    print("Waiting for operation to complete...")
    response = operation.result(timeout=90)
    words = ""
    for result in response.results:
        # The first alternative is the most likely one for this portion.
        words = words + result.alternatives[0].transcript
    print(words)
    return words

# getTranscription("gs://talko/Obama's jobs speech in 2 minutes.wav")
# test = """Hello! My name is Andrea sasir, I am studying marketing at the University of Texas at Dallas.
#         I am a member of American Marketing Association and Alpha Kappa PSI both of which are dedicated to 
#         shaping future Business Leaders. I hope to incorporate my business knowledge into consumer trend analysis
#         and strengthening relationships among consumers as well as other companies. I am savvy, social, and 
#         principles, and have exquisite interpersonal communciation skills. I know that I can be an asset in any
#         company and or situation and I hope that you will consider me for an internship or job
#         opportunities! Thank you so much!"""
# getAccuracy(test,getTranscription("../audio-files/a.wav"))
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
    dataPoints = 10

    # Convert to an array of frames
    frameArray = numpy.fromstring(frameArray, numpy.int16)

    # Average non-mono channels into a mono channel
    frameArray = numpy.mean(frameArray.reshape(-1,channels),axis=1)

    # Remove extra frames when averaging
    additionalFrames = (len(frameArray) % (dataPoints))

    frameArray = frameArray[:-additionalFrames]
    frameArray = numpy.mean(frameArray.reshape(-1,int(len(frameArray)/dataPoints)),axis=1)

    # Normalize values between 0 and 1 
    normalize = (frameArray - numpy.min(frameArray)) / (numpy.max(frameArray) - numpy.min(frameArray))

    # plt.plot(normalize)
    # plt.show()

    return normalize

def getWordPerMin(text):
    # TODO
    print (syllables.estimate(text))
