let inputForm = document.querySelector('#inputForm');
let numbersList = document.querySelector('#numbersList');
let numberInput = document.querySelector('#numberInput');
let container = document.querySelector('#container');
let msg1 = document.getElementById('message1');



let chance = 0; 
let answer = Math.floor(Math.random() * 100); 

console.log(answer);

function retry(){
    window.location.reload();
    return false;
}

inputForm.addEventListener('submit', function(ev){
    ev.preventDefault();
    let li = document.createElement('li');
    let num = ~~numberInput.value;

    if(chance === 4){
        return container.innerText = `You are out of luck! The right answer was ${answer}`;
    };

    if(num > 0 && num < 101){    
        numberInput.value = "";
        guess.innerText += num + " .. " ;
    };

    if(num === answer){
        console.log(answer)
        container.innerText = "You BEAT me! That was the answer!";
    } else if (num !== answer){
        chance++;
        console.log(chance); 
            if(num < answer){
            container.innerText = "You are getting CLOSE";
            } else if(num > answer){
            container.innerText = "You are Way over";
            };
    }; 
});



