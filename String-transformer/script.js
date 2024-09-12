

const inputBox = document.querySelector(".inputBox");

const loweCaseOutput = document.querySelector("#lowercase span");
const upperCaseOutput = document.querySelector("#uppercase span");
const camelCaseOutput = document.querySelector("#camelcase span");
const pascalCaseOutput = document.querySelector("#pascalcase span");
const snakeCaseOutput = document.querySelector("#snakecase span");
const kebabCaseOutput = document.querySelector("#kebabcase span");
const trimCaseOutput = document.querySelector("#trim span");

/** Camel Case */
function capitaliza(str) {
  const firstChar = str[0].toUpperCase();
  return firstChar + str.slice(1, str.length);
}

function toCamelCase(string) {
  const lowerCaseString = string.toLowerCase();
  const splitIt = lowerCaseString.split(" ");
  const finalArray = splitIt.map((word, i) => {
    if (i === 0) return word;
    return capitaliza(word);
  });
  return finalArray.join("");
}
/** Pascal Case */
function pascal(str) {
  const lowerCaseString = str.toLowerCase();
  const words = lowerCaseString.split(" ");
  const pascaArr = words.map((word, i) => {
    return capitaliza(word);
  });
  return pascaArr.join("");
}
/** Snake Case */
function snake(str) {
  const words = str.split(" ");
  const snakeArr = words.map((word, i) => {
    return word;
  });
  return snakeArr.join("_");
}
/** Kebab Case */
function kebab(str) {
  const words = str.split(" ");
  const snakeArr = words.map((word, i) => {
    return word;
  });
  return snakeArr.join("-");
}
/**trim */
function trim(str){
  return str.replaceAll(' ', '');
}

function updateScreen() {
  loweCaseOutput.innerText = inputBox.value.trim().toLowerCase();
  upperCaseOutput.innerText = inputBox.value.trim().toUpperCase();
  camelCaseOutput.innerText = toCamelCase(inputBox.value.trim());
  pascalCaseOutput.innerText = pascal(inputBox.value.trim());
  snakeCaseOutput.innerText = snake(inputBox.value.trim());
  kebabCaseOutput.innerText = kebab(inputBox.value.trim());
  trimCaseOutput.innerText =  trim(inputBox.value.trim());
}

inputBox.addEventListener("input", ()=>{
  if(inputBox.value){
    updateScreen();
  }
});
