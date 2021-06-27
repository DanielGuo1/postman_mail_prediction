[![Python](https://img.shields.io/badge/Language-Python3.x-blue.svg?style=flat-square&logo=Python&logoColor=white)](https://www.python.org/) 
[![Openweathermap](https://img.shields.io/badge/API-Openweathermap-green.svg?style=flat-square)](https://openweathermap.org/) 


<h1 align="center">Postman Mail Prediction</h1>
<p align="center">
  <a> 
    <img src="https://github.com/DanielGuo1/postman_mail_prediction/blob/main/images/postman.jpeg" alt="Logo" width="400" height="380" >
  </a>
  <p align="center">
    Predict the time when your mail arrives
  </p>
</p>

## About The Project
Idea: I was curious about whether the mail was delivered to me. Especially if you've been waiting for a specific letter. I knew roughly when the postman would deliver my post and I went to the mailbox about 3-5 times during that timeframe to check whether my letter was there. Since this is insanely inefficient, I installed a [vibration sensor](https://www.aqara.com/us/vibration_sensor.html) in the mailbox that automatically sends me a notification (to my phone) as soon as the mailbox is opened.

This is how the whole project started. From now on, I could keep track of the exact time when the mail was delivered. With this timestamp and some other information (responsible postman that day, vehicle, weather) I wanted to see whether there was a connection:
* e.g. Postman A is always faster than Postman B
* Whats the average time mail is delivered to me
* Vehicle B is slower than Vehilce C
* On rainy days mail is delivered late, etc.)

Problem with that is, that the small vibration sensor can't gather this kind of information. Therefore I started to look out of the window, everytime I got a notification, so that I can see whose delivering post today and which car he/she uses. I got the information about the weather via [openweathermap](https://openweathermap.org/).

Because I wasn't always at home to gather the data, I thought about a better solution. I installed a WiFi Cam at the front of my door and used a object detection to automatically determine the postman and car. Don't worry - filming is allowed on your own property. I will not publish the names, faces or any other information about the postmen.

All the data was stored in a google sheet. If you want to use the script to retrieve the weather data and automatically fill it in your google sheets. Create an API KEY from [openweathermap](https://openweathermap.org/) and use the `temperature_API.gs`.
