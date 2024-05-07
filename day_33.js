// Random HEx Color

// const randomHexColor = () => {
//   return `#${Math.random().toString().slice(2, 8).padEnd(6, 0)}`;
// };



const randomHexColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16); // Generate random color between #000000 and #ffffff
    return `#${randomColor.padStart(6, "0")}`; // Ensure color code is six digits long
};
console.log(randomHexColor());

