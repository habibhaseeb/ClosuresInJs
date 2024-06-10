                        //  Method 1
const showBit1 = {
    age: 19,
    test: 'This is test'
}
const New = delete showBit1.test;

console.log(New +`\nSuccesfully delete the property test`);   //  true

// This method also delete the test value 
// but is displays the result in Boolean like [true or false] and not accurate method but 
// in some cases you can also use it.

                        //  Method 2

const showBit2 = {
    age: 19,
    test: `This is test`,
    address: `Samanabad near Bismilla park`,
    isLoggedIn: false,
    skills: ['web-devlopment', 'CorelDraw graphic', 'python']
}

// const {test, ...newTest} = showBit2;

const {skills, ...newSkills} = showBit2
console.log(newSkills);

// console.log(newTest);  // {age: 19}


// In this method you can use Spread operator to retrive the props (Properties) of 
// showBit2 Object and ignored the test value and displays the output in the console.