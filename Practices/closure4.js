
function run(a1) {

    const b1 = a1;  // b1 = 50 

    return function() {
        b1 += 10;  // 50+10 = 60

         return b1;
    }
}
const func = run(50);

func();
console.log(func());  //the value is 70 because the func() call two times 