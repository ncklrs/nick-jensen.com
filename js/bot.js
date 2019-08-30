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
          content: 'I help business owners create engaging digital experiences that drive revenue. Just text me what you’re primary marketing objective is on FB Messenger'
        }).then(function(){
          botui.message.add({
            delay:1000,
            loading:true,
            content: 'I’ll send you the best options to help you increase sales'
          })
          .then(function(){
            botui.message.add({
              delay:1000,
              loading:true,
              content: 'Tell me which you idea love and I’ll send you more details 👍'
            })
            .then(function(){
              botui.message.add({
                delay:1000,
                loading:true,
                content: 'Think of me as your secret marketing super power 💪🤵'
              })
              .then(function(){
                botui.message.add({
                  delay:500,
                  loading: false,
                  type: 'html',
                  cssClass: 'only-btn',
                  content: '<a href="https://m.me/connectwnick" class="btn btn-primary"><!----> Click here to Start</a>'
                })

              });
            });
          });
        });
      });
