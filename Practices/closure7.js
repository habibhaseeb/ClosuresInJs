function add(a) {
    const n = 'Sum of two numbers is :';
      return function (b) {
         const sum = a + b;
         console.log(n + sum);
      }
}
var totalSum = add(20)
totalSum(6)  // 26

//---------------------------------------
const Arr = ['web-dev', 'software-eng', 'DSA', 'Data Scientist'];
const Arr1 = Arr.slice(0 , 1);
const res = Arr.filter((value) => Arr1);
console.log(res)
