function receivesAFunction(callback){
    callback()
}

function sayBye(){
    return `say bye`;
}


function returnsANamedFunction(){
    return sayBye;
}


function returnsAnAnonymousFunction(){
    return function(){
        return "hello everyone";
    }
}