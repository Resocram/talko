# <div align="center">Talko</div>


<div align="center">Public speaking fears got you down? Introducing Talko. Your virtual public speaking coach.</div>

<div align="center"><img src ="https://raw.githubusercontent.com/Resocram/talko/119af34334bee18c9471fd75edc8dc320658aeb4/talko-client/src/assets/talko-logo.svg" style="vertical-align:middle"></div>

<div align="center">
<h4>Talko is a web solution that provides instant feedback on your public speaking skills and habits. Just head to our website at talko.tech, input your speech transcript, and start talking! Talko will analyze your energy levels, enunciation, pace, pause frequency, and more to provide you with detailed and constructive feedback.</h4>
</div>




# Table of Content:

- [Awards Won](#awards-won)
- [Technology Stack](#techonology-stack)
- [Key Features](#key-features)
- [Developers](#developers)




# Awards Won

## <div align="center" style="font-size: 30px">🏆Honorable Mention and Popular Vote Winner at nwHacks 2021🏆</div>
### <div align="center" style="font-size: 15px">Western Canada's Largest Hackathon with ~ 800 participants </div>
<div align="center"><img src ="" style="vertical-align:middle"></div>
<div align="center">https://devpost.com/software/talko-ep67vu</div>




# Technology Stack

For the backend, we built a centralized RESTful Flask API to fetch all backend data from one endpoint. We used Google Cloud Storage to store files greater than 30 seconds as we found that locally saved audio files could only retain about 20-30 seconds of audio. We also used Google Cloud App Engine to deploy our Flask API as well as Google Cloud Speech To Text to transcribe the audio. Various python libraries were used for the analysis of voice data, and the resulting response returns within 5-10 seconds. The web application user interface was built using React, HTML and CSS and focused on displaying analyses in a clear and concise manner. We had two members of the team in charge of designing and developing the front end and two working on the back end functionality.




# Key Features

By analyzing speaking data from many successful public speakers from a variety industries and backgrounds, we have established relatively robust standards for optimal speed, energy levels and pausing frequency during a speech. Taking into consideration the overall tone of the speech, as selected by the user, we are able to tailor our analyses to the user's needs. This simple and easy to use web application will offer users insight into their overall accuracy, enunciation, WPM, pause frequency, energy levels throughout the speech, error frequency per interval and summarize some helpful tips to improve their performance the next time around.




 # Developers
 - [Claire Song](https://github.com/cxsong1)
 - [Shade Wong](https://github.com/shade-12)
 - [Marco Ser](https://github.com/Resocram)
 - [Joshua Park](https://github.com/JoshuaParkSJ)
