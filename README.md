[![Python](https://img.shields.io/badge/Language-Python3.x-blue.svg?style=flat-square&logo=Python&logoColor=white)](https://www.python.org/) 
[![Openweathermap](https://img.shields.io/badge/API-Openweathermap-green.svg?style=flat-square)](https://openweathermap.org/) 

## What do I want to achieve?
I started a new project about 2 months ago, trying to identify patterns in the delivery of my mail. For that, I record the time when the postman delivers my mail.
The data includes the postman, vehicle, time, date, weather (temperature, wind, air pressure, etc.). With this data I try to recognize and predict patterns in the delivery, maybe?

![excel](https://user-images.githubusercontent.com/59144947/130101634-6f723c4c-28aa-4b7a-bad4-800eaf69e9b5.png)

Examples:
* If it rains on a Monday, my mail won’t arrive before 12 noon?
* Whenever vehicle XY has been used, the mail never arrives before 2 p.m.
* Postman X always takes the longest.


In the beginning I sat in front of the window, around noon to look for the postman. As soon as he showed up, I wrote down the time, the vehicle and the postman.

This was time consuming and I never knew whether the postman was already there (and I had missed him) or whether he would still come.

### Automate boring stuff
Since this is insanely inefficient, I installed a vibration sensor in my mailbox that automatically sends a notification (to my phone) as soon as the mailbox is opened.

With this solution, I no longer had to stick to my window and could relax and wait for the message on my cell phone.
But there are also various problems here:
* What happens if I don’t get any mail at all?
* How do I track the postman and the vehicle? (I don’t see them anymore)

In order to capture the vehicle and the postman, I ran to the window every time I received a push notification.

That made my life a little easier, but there has to be something better?

### (Further) automate boring stuff
So I bought a CCTV camera* and installed it in front of my door.

Every time I receive a notification, I look into the CCTV camera app to see who is at the door.
Therefore I don’t have to be at home to collect the data. That works pretty good, but I still have no information on days when I don’t get any mail.

### Let’s go!
My plan was to train a model that automatically recognizes the postman’s car. So I can review the footage to see when he crossed my house.
However, in order to be able to recognize the postman’s car, I need training data.

#### My first Model
I used the YOLOv5 framework because it works quickly and easily. For my first model, I took screenshots of the postman’s car. The postman only has two different cars so far. A white van and a yellow electric car.

* Electric car
* White van

I used (approx. 30 different) pictures to train my model on two classes (white van and electric car). I used makesense.ai to label the data.

##### Parameters
* img: 640 
* batchsize: 64 (thats the biggest possible number I could use. I trained all models local on my machine. I tried it on Google Colab multiple times, but most of the time, it crashed and I had to start over)
* epochs: 80 (I later found out, that the Yolo Documentation suggest 300 epochs at first)

#### Model Version 2
This time, I added more data to the model. Because the amount of pictures of the postcar is limited and fairly small. I created a new class with “other cars”. If the model doesn’t know how a postcar looks like, I can teach it how it doesn’t look like. Therefore I took around 500 pictures of “other cars” of my footage and labeled them as “others”. And added a lot of external pictures to have even more data to train.

##### Parameters
* img: 640 (same as above)
* batchsize: 64 (same as above)
* epochs: 300 

I also:
* reduce the epoch Size (150, 80, 50, 20 and 10)
* reduced “other cars” pictures from 500 to 200 to 100 and eventually 0
* removed pictures of external postcars
* removed pictures of postcars that are almost similar or where you barely see the car
to further improve my model.

