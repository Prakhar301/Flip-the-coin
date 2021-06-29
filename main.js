function flip(){
    document.getElementById("flip").innerHTML="";
    var number=Math.floor(Math.random()*2);
    console.log(number);
    if(number==0){
        image_tag="<img class='img-responsive' src='Heads.jpg'>"
        text_tag="<h3>It is Heads</h3>"
        row=image_tag+text_tag;
        select="It is Heads";
        document.getElementById("flip").innerHTML=row;
    }
    if(number==1){
        image_tag="<img class='img-responsive' src='Tails.png'>"
        text_tag="<h3>It is Tails</h3>"
        row=image_tag+text_tag;
        document.getElementById("flip").innerHTML=row;
        select="It is tails";
    }
    speak();
}
function speak(){
    var synth=window.speechSynthesis;
    var speakData=select;
    var utterThis=new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
}