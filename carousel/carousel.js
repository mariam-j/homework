const imgSlide = document.getElementById('img');
const buttRight = document.getElementById('buttRight');
const buttLeft = document.getElementById('buttLeft');

const playButton = document.getElementById('play');


let arrImg = ['./img/img1.jpg', './img/img2.jpg', './img/img3.jpg', './img/img4.jpg', './img/img5.jpg','./img/img6.jpg', './img/img7.jpg', './img/img8.jpg', './img/img9.jpg'];
let index = 0;

function next() {
    
    index ++;

    if (index > arrImg.length-1) {
        index = 0;
    }
    
    imgSlide.setAttribute('src', arrImg[index]);
   
    if (index == arrImg.length-1) {
        index = -1;
    }
}

function previous() {
  

    index--;
    
    if (index < 0) {

        if(index == -2)
        {
            index = arrImg.length-2;
        }
        else
        {
            index = arrImg.length-1;
        }
       
    }
    imgSlide.setAttribute('src', arrImg[index]);
   
}




buttLeft.onclick = previous;
buttRight.onclick = next;


var playing = false;
var slideInterval =  null;

playButton.onclick = StartStop;

function StartStop()
{
    debugger;
    if(playing){ pauseSlideshow(); }
    else{ playSlideshow(); }
}


function pauseSlideshow(){
    
    playing = false;
    playButton.innerHTML = "Play";
    clearInterval(slideInterval);
}

function playSlideshow(){
    
    playButton.innerHTML = "Pause";
    playing = true;
    slideInterval = setInterval(next,2000);
    
}