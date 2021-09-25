var counter = document.querySelector('.counter')
var followers = document.querySelector('.followers')

//Value Counter

const Run=()=>{
    let count= 1;
    var val = document.getElementById("max").value;
    console.log(val)
    setInterval(()=>{
        if(count<100){
            count++
            counter.innerText=count
        }
    },val)
    setTimeout(()=>{
        followers.innerText="Done !!!"
    },val) 
}

//Name Change

function myFunction() {
    var x = document.getElementById("myText").value
    document.getElementById("myText").value = "New Name";
    console.log(x)

  } 


//Date 

const date=()=>{
    document.getElementById('date').innerHTML=Date()
}


//Add Element

values = [];
function addRecord() {
  var input = document.getElementById('add').value;
  if(isNaN(input)){
                      alert ('Enter a number')
                  }
  else{                
    values.push(input);
    console.log(values)
    document.getElementById('enterValue').innerHTML=values
  }
}

//Sort 

function sort() {
    values.sort(function(a, b) {
        return a - b
    });
    
document.getElementById("sort").innerHTML = values
console.log(values);
}

//Time devide second

const econd=()=>{
    const d =new Date();
    var x = d.getSeconds();
    m=x%6
    switch(m){
        case 0: document.getElementById('second').innerHTML=" Confront a fear"
                break;
        case 1: document.getElementById('second').innerHTML="Give yourself a reward every day"
                break;
        case 2: document.getElementById('second').innerHTML="Start an exercise program"
                break;
        case 3: document.getElementById('second').innerHTML="Declutter your environment"
                break;
        case 4: document.getElementById('second').innerHTML="Make a bucket list"
                break;
        case 5: document.getElementById('second').innerHTML="Reconnect with an old friend"
                break;
    }
}
