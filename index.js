
//mouse functionality
for(let i=0;i<document.querySelectorAll(".drum").length;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click" , function(){
        
    let mouse = this.innerHTML;
    sound(mouse);
    animation(mouse);
    })

}

//keyboard functionality 
document.addEventListener("keydown",function(event){
    let button = event.key;
    sound(button);
    animation(button);
}
)


function sound(buttonPressed){    
    switch(buttonPressed){
        case "w" : 
        let tom1= new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
        
        case "a" : 
        let tom2= new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

        case "s" : 
        let tom3= new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

        case "d" : 
        let tom4= new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

        case "j" : 
        let tom5= new Audio("sounds/snare.mp3");
        tom5.play();
        break;

        case "k" : 
        let tom6= new Audio("sounds/kick-bass.mp3");
        tom6.play();
        break;

        case "l" : 
        let tom7= new Audio("sounds/crash.mp3");
        tom7.play();
        break;
    }
}

function animation(input){
    let active = document.querySelector("."+input);
    active.classList.add("pressed");

    setTimeout(function(){
        active.classList.remove("pressed");
    } , 200 )
}


