 document.getElementById("myImage").setAttribute("height", "560");
 document.getElementById("myImage").setAttribute("width", "560");

function path() {

 let randomNumber = Math.floor(Math.random() *18);

    return   randomNumber === 0? "images/magic8ball_1.png"
          :  randomNumber === 1? "images/magic8ball_2.png"
          :  randomNumber === 2? "images/magic8ball_3.png"
          :  randomNumber === 3? "images/magic8ball_4.png"
          :  randomNumber === 4? "images/magic8ball_5.png"
          :  randomNumber === 5? "images/magic8ball_6.png"
          :  randomNumber === 6? "images/magic8ball_8.png"
          :  randomNumber === 7? "images/magic8ball_9.png"
          :  randomNumber === 8? "images/magic8ball_10.png"
          :  randomNumber === 9? "images/magic8ball_11.png"
          :  randomNumber === 10? "images/magic8ball_12.png"
          :  randomNumber === 11? "images/magic8ball_13.png"
          :  randomNumber === 12? "images/magic8ball_14.png"
          :  randomNumber === 13? "images/magic8ball_16.png"
          :  randomNumber === 14? "images/magic8ball_17.png"
          :  randomNumber === 15? "images/magic8ball_18.png"
          :  randomNumber === 16? "images/magic8ball_19.png"
          :  randomNumber === 17? "images/magic8ball_20.png"
          :  randomNumber === 18? "images/magic8ball_extra.png"
          : console.log('Something wrong with path()')

          }
            
 
  function updateImage () {
    const ask = document.getElementById('input').value;
    console.log(ask);

    if (ask==""){
    alert('Enter you question')
    }else{

    document.getElementById("myImage").setAttribute("src",path());
    document.getElementById("footer").style.display='none';

    const newDiv = document.createElement('div');
    newDiv.innerHTML = (ask); 
    document.body.appendChild(newDiv);
   
     }
  }
 