// See https://github.com/dialogflow/dialogflow-fulfillment-nodejs
// for Dialogflow fulfillment library docs, samples, and to report issues
'use strict';
 
const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');

var firebase = require('firebase')

const {dialogflow} = require('actions-on-google');
const app = dialogflow({debug : true});
var admin = require('firebase-admin')
 

  // Set the configuration for your app
  // TODO: Replace with your project's config object
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAN9Q_koHAN5kKAVKmjLsGtCSvoK_3R2iI",
    authDomain: "bafyc-aog-task-scheduler.firebaseapp.com",
    databaseURL: "https://bafyc-aog-task-scheduler.firebaseio.com",
    projectId: "bafyc-aog-task-scheduler",
    storageBucket: "bafyc-aog-task-scheduler.appspot.com",
    messagingSenderId: "288282293009"
  };
  firebase.initializeApp(config);

var database = firebase.database();
var ref = firebase.database().ref().child('user_id/');
var userRef=ref.child('market/');
//var dur;

app.intent('suggest_task' , (conv, {dur}) => {
  var snapi="fefe";
  userRef.once("value").then(function(snap){
   var dur=snap.val();
   
   dur=dur+"fe";
  });
   conv.close(`output and ${dur}`);

});



app.intent('add_task',(conv, {duration, task})=>{
  conv.ask(`How important is it for you?`);

app.intent('add_priority',(conv,{priority}) => {

  conv.close(`Okay! I'll remind you to ${task} when you have ${duration.amount} ${duration.unit} free!`);


  var taskRef=ref.child(task).set({
    time : duration,
    priority: priority,
    status : 'pending'
  });
});
});
  exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);

  // Uncomment and edit to make your own intent handler
   // uncomment `intentMap.set('your intent name here', yourFunctionHandler);`
   // below to get this function to be run when a Dialogflow intent is matched
  // function yourFunctionHandler(agent) {
  //   agent.add(`This message is from Dialogflow's Cloud Functions for Firebase editor!`);
  //   agent.add(new Card({
  //       title: `Title: this is a card title`,
  //       imageUrl: 'https://developers.google.com/actions/images/badges/XPM_BADGING_GoogleAssistant_VER.png',
  //       text: `This is the body text of a card.  You can even use line\n  breaks and emoji! 💁`,
  //       buttonText: 'This is a button',
  //       buttonUrl: 'https://assistant.google.com/'
  //     })
  //   );
  //   agent.add(new Suggestion(`Quick Reply`));
  //   agent.add(new Suggestion(`Suggestion`));
  //   agent.setContext({ name: 'weather', lifespan: 2, parameters: { city: 'Rome' }});
  // }

  // // Uncomment and edit to make your own Google Assistant intent handler
  // // uncomment `intentMap.set('your intent name here', googleAssistantHandler);`
  // // below to get this function to be run when a Dialogflow intent is matched
  // function googleAssistantHandler(agent) {
  //   let conv = agent.conv(); // Get Actions on Google library conv instance
  //   conv.ask('Hello from the Actions on Google client library!') // Use Actions on Google library
  //   agent.add(conv); // Add Actions on Google library responses to your agent's response
  // }
  // // See https://github.com/dialogflow/dialogflow-fulfillment-nodejs/tree/master/samples/actions-on-google
  // // for a complete Dialogflow fulfillment library Actions on Google client library v2 integration sample

  // Run the proper function handler based on the matched Dialogflow intent name

