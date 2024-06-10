const Value1 = 10;
function  execute()  {
    const Value1 = 20;

    function slow() {

        console.log(Value1);
    }
    exec(slow)
}

function exec(func) {
    const Value1 = 25;

    func();    // its a variable and the value pass init is 20 
}
execute();   // it always follow its Lexical scoping 
