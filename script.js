const state = {
      todo : document.getElementById ( "todo"  ) 
    , doing: document.getElementById ( "doing" )
    , done : document.getElementById ( "done"  )
    , Input: document.getElementById ( "Input" )
};
let _id = 0 ;
let task = [
      { id:makeId() , name:"Wash Golam" , state:"todo" }
    , { id:makeId() , name:"Wash Asghar" , state:"doing" }
    , { id:makeId() , name:"Wash Akbar" , state:"done" }
];

const uls = { 
    todo:state.todo ,
    doing:state.doing ,
    done:state.done
};

function makeId() {
    return _id ++ ;
};

function handleSubmit( e ) {
    e.preventDefault() ;
    const task = state.Input.value ;
    state.Input.value = "" ;
    if ( !task ) {
        alert('Enter sth first !') ;
        return;
    }
    addNewTask ( task ) ;
    render() ;
};

function render() {
    uls.todo.innerHTML = "" ;
    uls.doing.innerHTML = "" ;
    uls.done.innerHTML = "" ;
    task.forEach ( function (item) {
        let ul = uls[item.state] ;// ${hello = "ali"} wrong!!
        ul.innerHTML += `${item.name} 
        <br/> 
        <button onclick="changeState( ${item.id} , this.innerHTML );">todo</button>
        <button onclick="changeState( ${item.id} , this.innerHTML );">doing</button>
        <button onclick="changeState( ${item.id} , this.innerHTML );">done</button>
        <button onclick="remove(${item.id});" >remove</button>
        <br/> ` ;
    }) ;
};

function addNewTask ( name ){
    task.push ( { id:makeId() , name:name , state:"todo" }) ;
    render() ; // render() //is this necessary ??
}

function remove( id ) { // pass object
        task = task.filter ( function ( items ) {
            return id != items.id ;
    }) ;
    render() ;
}

let changeState = function ( itemId , currentState ) {
    task.forEach ( function (item) {
        if ( itemId == item.id ) item.state = currentState ;
    }) ;
    render () ;
}
render() ;