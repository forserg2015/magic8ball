


function answer() {
    let randomNumber = Math.floor(Math.random() *8);

        return   randomNumber === 0? "images/magic8ball_1.png"
              :  randomNumber === 1? console.log(randomNumber)
              :  randomNumber === 2? console.log(randomNumber)
              :  randomNumber === 3? console.log(randomNumber)
              :  randomNumber === 4? console.log(randomNumber)
              :  randomNumber === 5? console.log(randomNumber)
              :  randomNumber === 6? console.log(randomNumber)
              :  randomNumber === 7? console.log(randomNumber)
              : console.log('Something wrong')

        }
        var myPicture = document.createElement("img");
        myPicture.setAttribute("src", answer());
       
        document.getElementById("myAnswer").appendChild("myPicture");



                  


       
            
           