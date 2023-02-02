let displayNumberCounter=document.getElementsByClassName("circles")
let lines=document.getElementsByClassName("lines")
displayNumberCounter[0].classList.add("bginfo");

let counter = 0
let counterLine=-1
let arrCounter = [counter]
let arrCounterLine = []

styleEndPrev()
function next(){
   
    if(counter < 3 && counterLine <2){
        counter += 1
        counterLine += 1

        arrCounter.push(counter)
        arrCounterLine.push(counterLine)
        console.log(arrCounterLine)
        for(let i=0; i < arrCounter.length ;i++){
            console.log(i)
            displayNumberCounter[i].classList.add("bginfo");
    
        }
        for(let i=0; i < arrCounterLine.length ;i++){
            console.log(i)
            lines[i].classList.add("lineActive");
    
        }

        styleEndNext()
        styleEndPrev()

    }
   
    
}


function prov(){
  

      if(counter>=1){
        displayNumberCounter[counter].classList.remove("bginfo");

        counter -= 1
        lines[counterLine].classList.remove("lineActive");
        counterLine -=1

        arrCounter.pop(counter)
        arrCounterLine.pop(counterLine)

        console.log(arrCounterLine)

        styleEndNext()
        styleEndPrev()
 
    }
  

}
styleEndNext()
function styleEndNext(){
    if(arrCounter.length == 4){
        document.getElementById("next").disabled = true;
        document.getElementById("next").style.opacity = ".5";
        }else{
            document.getElementById("next").disabled = false;
            document.getElementById("next").style.opacity = "";
    }
}
   
  
function styleEndPrev(){
 

    if(arrCounter.length == 1){
        document.getElementById("prev").disabled = true;
        document.getElementById("prev").style.opacity = ".5";
        }else{
            document.getElementById("prev").disabled = false;
            document.getElementById("prev").style.opacity = "";
    }
   

}