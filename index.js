//when user click a button on the page, play sound
//get the num of buttons
var btnNum = document.querySelectorAll("button.drum").length;
//assign event listener to each buttons on the page
for (let i = 0; i < btnNum; i++) {
  document.querySelectorAll("button.drum")[i].addEventListener('click', function() {
    var btnHtml = this.textContent;
    checkKey(btnHtml);
    btnAnimation(btnHtml);
  });
}
//assign event listener to each key on the page
document.addEventListener("keydown", function(e) {
  checkKey(e.key);
  btnAnimation(e.key);
});

//play a specific sound base on the key
function checkKey(key) {
  switch (key)
  {
    case 'w':
      var sound = new Audio("sounds/crash.mp3");
      sound.play();
      break;

    case 'a':
      var sound = new Audio ("sounds/kick-bass.mp3")
      sound.play();
      break;

    case 's':
      var sound = new Audio("sounds/snare.mp3");
      sound.play();
      break;

    case 'd':
      var sound = new Audio("sounds/tom-1.mp3");
      sound.play();
      break;

    case 'j':
      var sound = new Audio("sounds/tom-2.mp3");
      sound.play();
      break;

    case 'k':
      var sound = new Audio("sounds/tom-3.mp3");
      sound.play();
      break;

    case 'l':
      var sound = new Audio("sounds/tom-4.mp3");
      sound.play();
      break;

    default:
    console.log(`The key pressed was ${key} and it was not in range`);
  }
}

function btnAnimation(key) {
  //select the html element bases on the key and add class
  var btn = document.querySelector('.' + key);
  btn.classList.add("pressed");
  setTimeout(function() {
    btn.classList.remove("pressed")
  }, 100)
}




// //when user click a button on page, play sound
//
// //get the num of buttons
// var btnNum = document.querySelectorAll('button.drum').length;
//
// //assign event listener to each buttons
// for (let i = 0; i < btnNum; i++) {
//
//   document.querySelectorAll(".drum")[i].addEventListener("click", function() {
//   var btnHtml = this.textContent;
//   checkKey(btnHtml);
//   btnAnimation(btnHtml);
//   });
// }
//
// //play a specific sound base on clicked btn
// function checkKey(key) {
//   switch (key)
//   {
//     case 'w':
//       var sound = new Audio("sounds/crash.mp3");
//       sound.play();
//       break;
//
//     case 'a':
//       var sound = new Audio("sounds/kick-bass.mp3");
//       sound.play();
//       break;
//
//     case 's':
//       var sound = new Audio("sounds/snare.mp3");
//       sound.play();
//       break;
//
//     case 'd':
//       var sound = new Audio("sounds/tom-1.mp3");
//       sound.play();
//       break;
//
//     case 'j':
//       var sound = new Audio("sounds/tom-2.mp3");
//       sound.play();
//       break;
//
//     case 'k':
//       var sound = new Audio("sounds/tom-3.mp3");
//       sound.play();
//       break;
//
//     case 'l':
//       var sound = new Audio("sounds/tom-4.mp3");
//       sound.play();
//       break;
//
//     default:
//     console.log(`The key pressed was ${key} and it was not in range` );
//   }
// }
//
// //when user press a key , play sound
// document.addEventListener('keydown', function(e) {
//   checkKey(e.key);
//   btnAnimation(e.key);
// });
//
// //when playing sound, animate the button on page
// function btnAnimation(key) {
//   //select element(button) with the same class
//   var btn = document.querySelector('.' + key);
//   //add animation
//   btn.classList.add("pressed");
//   //remove animation
//   setTimeout(function() { btn.classList.remove("pressed") }, 100);
// }
