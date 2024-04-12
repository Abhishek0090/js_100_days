// Write a function to convert a string to camelCase and snake_case



const toCamelCase = (str)=>{
    str = str
      .split(" ")
      .map((item) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())
      .join(" ");
      return str;
}



console.log(toCamelCase("helLo bRo wHaT"));


const toSnakeCase = (str)=>{

    str = str
      .split(" ")
      .map((item) => item.toLowerCase())
      .join("_");
      return str;

}


console.log(toSnakeCase("bRo nIggA WhAT"));




