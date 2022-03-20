function receivesAFunction(callback){
    callback();
};

function returnsANamedFunction(){
    return receivesAFunction;

};

function returnsAnAnonymousFunction(){
    return function() {return `this function is anonymous`;} 
};

function hello(){
    console.log("Hello, World!")
};