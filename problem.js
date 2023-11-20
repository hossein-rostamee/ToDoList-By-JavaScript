function sendAction(action){
let p = document.createElement('P');
let node = document.createTextNode(action) ;
let li = document.createElement('LI') ;
p.appendChild(node) ;
li.appendChild(p) ;
toDo.appendChild(li) ;
AddButton(li , "done") ;
AddButton(li , "doing") ;
AddButton(li , "remove") ;
}
function AddButton(li , label){
    let button , btn ;
    button = document.createElement('button') ;
    btn = document.createTextNode(label) ;
    button.appendChild(btn) ;
    if(label == "done"){
        let event = document.createEvent
    } 
    else if( label == "doing"){
        button.onclick = "Doing()" ;
    }
    else  if( label =="remove") {
        // button.onclick = "Remove()" ;
        button.setAttribute ( 'click', "Remove ();" );
    }
    li.appendChild(button) ;
    toDo.appendChild(li) ;
}
function Done(){
    alert('i am done') ;
}
function Doing(){
    alert('i am doing') ;
}
function Remove(){
    alert('i am remove') ;
}


// a.setAttribute ( 'click' , function (){alert ('hello');});
