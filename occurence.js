// Write a program to find occurence in string  of a word



// const findoccurence = (str)=>{
//     let obj = {};

//     for(let item of str){
//         if(obj[item]){
//             obj[item]++
//         }else{
//             obj[item] = 1;
//         }
//     }

//     return obj;
// }

const findoccurence  =(str)=>{

    const results = str.split("").reduce((acc, item) => {
      acc[item] = (acc[item] || 0) + 1;
      return acc;
    }, {});
   
    return results
}


console.log(findoccurence("Abhishek"));


