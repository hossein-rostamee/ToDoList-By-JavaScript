const
    toDo = document.getElementById("todo") ,
    doing = document.getElementById("doing") ,
    done = document.getElementById("done") ,
    action = document.getElementById("get-action")
;


function sendAction(){
    const taskName = action.value;
    if ( ! taskName )
        return alert ( "You must enter something first!" );
    const div = document.createElement('li') ;
    div.innerHTML = `
        ${ taskName } <br />
        <button onclick='ToDo(this);'>Todo</button>
        <button onclick='Doing(this);'>Doing</button>
        <button onclick='Done(this);'>Done</button>
        <button onclick='Remove(this);'>Remove</button>
    `;
    toDo.appendChild(div) ; 
    action.value = "";
}

function ToDo(id) {
    if (id.parentNode.parentNode.id != "todo") {
        let div = id.parentNode.cloneNode ( true);
        toDo.appendChild(div) ;
        Remove(id) ;
    }
}
function Doing(id) {
    if (id.parentNode.parentNode.id != "doing"){
    let div = id.parentNode.cloneNode ( true );
    doing.appendChild(div) ;
    Remove(id) ;
    }
}

function Done(id){
    if ( id.parentNode.parentNode.id != "done"){
    let div = id.parentNode.cloneNode(true) ;
    done.appendChild(div) ;
    Remove(id) ;
    }
}

function Remove(id){
    id.parentNode.parentNode.removeChild(id.parentNode) ;
}

