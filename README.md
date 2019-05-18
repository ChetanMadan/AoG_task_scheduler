# Demo Actions on Google project for python client library aog 
Demo actions on google project using python client library aog.

## How to

- in DialogFlow -> Create a new Agent (Create or link a existing gcp proejct)
- From settings -> import and export Tab -> Restore From Zip and upload Python-Demo.zip
- run main.py locally using ngrok and copy the https adrress to the webhook under fullfillment in dialogflow.

## Instructions for ngrok
- Download and install ngrok from [here](https://ngrok.com/download).
- Run main.py ```python3 main.py```
- Open a new terminal and run ngrok ```ngrok http 5000```
- use the https adress for webhook. 

inside folder: python_task_scheduler 
```git push heroku master``` 
URL: [Deployment URL](http://task-scheduler1.herokuapp.com) 
Changes to be done in main.py 
