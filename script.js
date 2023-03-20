 console.log("welcome to spotify");
 //initialise variables
let songindex=0;
 let audioElement=new Audio("song/1.mp3");
 let masterplay=document.getElementById('masterplay');
 let myprogressBar=document.getElementById("myprogressbar");
 let gif=document.getElementById("gif");
 let songitems=Array.from(document.getElementsByClassName("songitem"));
 let mastersongname=document.getElementById("mastersongname")
 let timestamp=document.getElementsByClassName("timestamp");
 let songs=[
    {songname:"let me love you", filePath:"song/0.mp3" , coverPath: "cover/cover0.jpg"},
    {songname:"Bt Ho gyi", filePath:"song/1.mp3" , coverPath: "cover/cover1.jpg"},
    {songname:"perfect-Ed sheeran", filePath:"song/2.mp3" , coverPath: "cover/cover2.jpg"},
    {songname:"Friends", filePath:"song/3.mp3" , coverPath: "cover/cover3.jpg"},
    {songname:"kesariya", filePath:"song/4.mp3" , coverPath: "cover/cover4.jpg"},
    {songname:"sunflower", filePath:"song/5.mp3" , coverPath: "cover/cover5.jpg"},
    {songname:"blinding-lights", filePath:"song/6.mp3" , coverPath: "cover/cover6.jpg"},
    {songname:"trap munde", filePath:"song/7.mp3" , coverPath: "cover/cover7.jpg"},
 ]
 songitems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerHTML=songs[i].songname;

 })
 
//handle- play/pause click
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        mastersongname.innerText=songs[songindex].songname;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        mastersongname.innerText=songs[songindex].songname;
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;

    }
})
 //listen to events
 audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    myprogressBar.value=progress;
    if(audioElement.currentTime==audioElement.duration)
    {
        songindex+=1;
        audioElement.src=`./song/${songindex}.mp3`;
    mastersongname.innerText=songs[songindex].songname;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle')
    masterplay.classList.add('fa-pause-circle')
    }
 })
 myprogressBar.addEventListener('change',()=>{
    audioElement.currentTime= myprogressBar.value*audioElement.duration/100;
    console.log(audioElement.currentTime,audioElement.duration)
 })
 const makeallplay = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle')

    })

 }
 Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeallplay();
        mastersongname.innerText=songs[songindex].songname;
        songindex=parseInt(e.target.id);
        e.target.classList.remove("fa-play-circle")
        e.target.classList.add("fa-pause-circle")
        audioElement.src=`song/${songindex}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-play-circle')
        masterplay.classList.add('fa-pause-circle')
    })

 })
 document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=7)
    {
        songindex=0;
    }
    else{
        songindex+=1;
    }
    audioElement.src=`song/${songindex}.mp3`;
    mastersongname.innerText=songs[songindex].songname;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle')
    masterplay.classList.add('fa-pause-circle')
 })
 document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0)
    {
        songindex=7;
    }
    else{
        songindex-=1;
    }
    audioElement.src=`song/${songindex}.mp3`;
    mastersongname.innerText=songs[songindex].songname;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle')
    masterplay.classList.add('fa-pause-circle')
 })