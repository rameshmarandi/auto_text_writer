 let text = "I am a MERN stack developer . "
 let index = 0;
 function wrtitetext(){
     
     document.body.innerText = text.slice(0, index);
    index++;
    if(index > text.length - 1){
        index = 0;
    }
 }

 setInterval(wrtitetext,300);