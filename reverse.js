// Reverse a String:
// Write a function that reverses a string. For example, if the input is "hello", the output should be "olleh".

const reverse = (str)=>{

    return str.split("").reverse().join("");
}


console.log(reverse("Abhishek"))