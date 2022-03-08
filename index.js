// alert("Hello!");
// document.querySelector("button").addEventListener("click",handleclick);
// document.querySelector("button").addEventListener("click",function(){
//   alert("I got clicked");
// });
for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function(event)
  {
    var c=event.target.textContent;
    audioPlay(c);
    animate(c);
    // switch(c)
    // {
    //   case "w":
    //     tom1.play();
    //   break;
    //   case "a":
    //     tom2.play();
    //   break;
    //   case "s":
    //     tom3.play();
    //   break;
    //   case "d":
    //     tom4.play();
    //   break;
    //   case "j":
    //     snare.play();
    //   break;
    //   case "k":
    //     crash.play();
    //   break;
    //   case "l":
    //     kick.play();
    //   break;
    //   default:
    //     console.log(this.innerHTML);
    // }

  });
}

document.addEventListener("keydown",function(event){
  var c = event.key;
  audioPlay(c);
  animate(c);
  // switch(c)
  // {
  //   case "w":
  //     tom1.play();
  //   break;
  //   case "a":
  //     tom2.play();
  //   break;
  //   case "s":
  //     tom3.play();
  //   break;
  //   case "d":
  //     tom4.play();
  //   break;
  //   case "j":
  //     snare.play();
  //   break;
  //   case "k":
  //     crash.play();
  //   break;
  //   case "l":
  //     kick.play();
  //   break;
  //   default:
  //     console.log(this.innerHTML);
  // }
});
function audioPlay(char)
{
  switch(char)
  {
    case "w":
      let tom1= new Audio("sounds/tom-1.mp3");
      tom1.play();
    break;
    case "a":
      let tom2= new Audio("sounds/tom-2.mp3");
      tom2.play();
    break;
    case "s":
      let tom3= new Audio("sounds/tom-3.mp3");
      tom3.play();
    break;
    case "d":
      let tom4= new Audio("sounds/tom-4.mp3");
      tom4.play();
    break;
    case "j":
      let snare= new Audio("sounds/snare.mp3");
      snare.play();
    break;
    case "k":
      let crash= new Audio("sounds/crash.mp3");
      crash.play();
    break;
    case "l":
      let kick= new Audio("sounds/kick-bass.mp3");
      kick.play();
    break;
  }
}
function animate(key)
{
  document.querySelector("."+key).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("."+key).classList.remove("pressed");
  },10)
}
