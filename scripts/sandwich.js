//ingredient object
const ingredientImgs = {
    "bread" : "images/bread.png",
    "cheese" : "images/cheese.png",
    "ham" : "images/ham.png"
}

//add them topppings
function addTopping(topping) {
    const slices = document.createElement("img");
    slices.setAttribute("class", "sandwich");
    slices.src = ingredientImgs[topping]
    const ingredient = document.getElementById("plate");
    ingredient.append(slices);
}

//remove the last topping
function oops() {
    const oops= document.getElementById("plate");
    oops.removeChild(oops.lastElementChild);
}

//eat the sandwich to reload the page and start over
function eat() {
    window.location.reload();
}