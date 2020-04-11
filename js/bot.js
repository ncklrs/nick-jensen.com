var d = new Date();
var hour = d.getHours();
var tod = "AM"
if( hour > 12){
  hour = hour-12
  tod = "PM"
}
var min = d.getMinutes();
if( min < 10){
  min = '0'+min
}
document.getElementById("timestamp").innerHTML = "Today at "+hour +":"+ min+ " "+tod;


var botui = new BotUI('my-botui-app');

botui.message.add({
        delay: 500,
        loading: true,
        content: 'Hi, I\'m Nick! 👋 🙂️'
      }).then(function () { // wait till previous message has been shown.

        botui.message.add({
          delay: 2000,
          loading: true,
          content: 'I\’m a designer, coder, music lover and coffee enthusiast residing in Northeast Ohio'
          //content: 'I\'m a conversational marketing junkie 🤖'
          //content: 'I give SaaS businesses a formula and framework for predictable growth'
        }).then(function(){
          botui.message.add({
            delay:2000,
            loading:true,
            //content: 'And put them on a 90-day path to DOUBLING their sales'
            content: 'I help companies create memorable experiences through user centered conversational design.'
            //content: 'I help brands drive renenue through channels like SMS, Messenger and Chat'
          })
          .then(function(){
            botui.message.add({
              delay:1500,
              loading:true,
              //content: 'Think of me as your secret marketing super power 💪🤵'
              content: 'Think of me as your secret conversational super power 💪🤵'

            })
            .then(function(){
              botui.message.add({
                delay:2000,
                loading:true,
                content: 'Are you ready to create memorable experiences with conversation?'
              })
              .then(function(){
                botui.message.add({
                  delay:500,
                  loading:false,
                  content:'Then let\'s chat'
                })
              })
              .then(function(){
                botui.message.add({
                  delay:500,
                  loading: false,
                  type: 'html',
                  cssClass: 'only-btn',
                  content: '<a href="https://m.me/connectwnick" class="btn btn-primary"><!----> Click here to Start A Conversation on Messenger</a>'
                })

              });
            });
          });
        });
      });
