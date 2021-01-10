from flask import Flask, request
import sys
sys.path.insert(0, './stats.py')
from stats import *
import os


app = Flask(__name__)

@app.route('/api', methods=['GET'])
def api():
    audio = request.args.get("audio")
    text = request.args.get("text")
    read_file("talko",audio + ".wav","./audio-files/" + audio + ".wav")



    transcription = getTranscription("gs://talko/a.wav")
    print(transcription)

    stats = getStats(text,audio,"./audio-files")
    print(stats)

    audioValues = getAudioValues("./audio-files/" + audio + ".wav")
    print(audioValues)

    accuracy = getAccuracy(text, transcription)
    audioValuesList = audioValues.tolist()
    os.remove("./audio-files/" + audio + ".wav")
    return {
      'stats': stats,
      'transcription': transcription,
      'audioValues': audioValuesList,
      'accuracy': accuracy,
    }