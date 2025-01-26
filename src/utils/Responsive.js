import Menu from "../assets/Burger-Menu.svg";//Importing Images
import Cross from "../assets/Cross.svg";//Importing Images
function Responsives(e){//A function to make the webpage responsive
const num1 = e.target;
const num2 = document.getElementById("Responsive_NAV");
console.log(num1);
if(num1.className === "Button1"){
num2.style.display = "block";
num1.className = "Button2";
num1.setAttribute("src",Cross);
}
else{
num1.className = "Button1";
num2.style.display = "none";
num1.setAttribute("src",Menu);
}    
}
export default Responsives;//Default exporting the functions