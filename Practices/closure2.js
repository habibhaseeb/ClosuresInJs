                // This method checks the value exist or not 

const result = [];

 for(let i = 0; i <= 6; i++) {
    result[i] = () => {
    
        return i;

    }
}

console.log(result[0]()); // This will prints in the console (0)
console.log(result[6]());  // 6
 
