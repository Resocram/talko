from flask import Flask, request
import sys
sys.path.insert(0, './stats.py')
from stats import *
import os
import uuid

app = Flask(__name__)

@app.route('/api', methods=['GET','POST'])
def api():
  if request.method == 'POST':
    a = request.files['audio']
    t = request.files['text']

    directory = "/tmp/"
    fileName =  str(uuid.uuid4())
    wavExt = ".wav"
    webmExt = ".webm"
    a.save(directory+fileName+webmExt)
    convert_and_split(directory+fileName)
    text = t.read().decode("utf-8")
    

    upload_file("talko",fileName + wavExt, directory+fileName+wavExt)
    print("done uploading!")


    transcription = getTranscription("gs://talko/" + fileName + wavExt)
    print(transcription)

    stats = getStats(text,fileName,directory)
    print(stats)

    
    audioValues = getAudioValues(directory+fileName+wavExt)
    print(audioValues)

    accuracy = getAccuracy(text, transcription)
    audioValuesList = audioValues.tolist()
    os.remove(directory + fileName + wavExt)
    os.remove(directory + fileName + webmExt)

    return {
      'stats': stats,
      'transcription': transcription,
      'audioValues': audioValuesList,
      'accuracy': accuracy,
    }, 202, {('Access-Control-Allow-Origin', '*')}
  else:
    userText = """We are uncovering better ways of developing
    software by doing it and helping others do it.
    Through this work we have come to value:

    Individuals and interactions over processes and tools
    Working software over comprehensive documentation
    Customer collaboration over contract negotiation
    Responding to change over following a plan

    That is, while there is value in the items on
    the right, we value the items on the left more."""
    randArray = ["good","bad"]
    randNum = randArray[random.randint(0,1)]
    filePath = "./audio-files/" + randNum + ".wav"
    print("Done uploading")
    transcription = getTranscription("gs://talko/"+ randNum + ".wav")
    print(transcription)
    stats = getStats(userText,randNum,"./audio-files")
    print(stats)
    audioValues = getAudioValues(filePath)
    print(audioValues)
    accuracy = getAccuracy(userText, transcription)
    print(accuracy)
    audioValuesList = audioValues.tolist()

    return {
      'stats': stats,
      'transcription': transcription,
      'audioValues': audioValuesList,
      'accuracy': accuracy,
    }


  