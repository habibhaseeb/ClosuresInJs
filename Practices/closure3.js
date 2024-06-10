                            // Method 1
                            
const result = [];

for (let i = 0; i < 6; i++) {
    result[i] = ( (x) => {

        return function() {

            return x;
        }
    
    })(i);

}
console.log(result[0]());

             //        Method 2 

    // in this method we create an IIFE function that receives outer function props

const result1 = [];

for (let count = 0; count <=5; count++){
        
         // you can also use normal func  ▼ ▼ ▼ ▼ ▼ ▼
                   //              because of best readability
       result[count] = (  function (val) {   

        return function() {

            return val;
        }
      }
    ) (count);  // We call the variable in for loop 
}
console.log(result1[0]());