//store ingredient images
const ingredientImgs = {
    "bread" : "images/bread.png",
    "cheese" : "images/cheese.png",
    "ham" : "images/ham.png"
}

//store history of ingredients in current sandwich
const ingredientList = []

//add them topppings
function addTopping(topping) {
    ingredientList.push(topping);
    localStorage.setItem('sandwich', JSON.stringify(ingredientList));
    //for every topping in the array: create an image
    let txt = "";
    for (let ingredient in ingredientList) {
        var slices = document.createElement("img");
        slices.setAttribute("class", "sandwich");
        slices.setAttribute("id", topping);
        slices.src = ingredientImgs[topping];
        txt += ingredientList[ingredient] + " ";
    }
    
    var plate = document.getElementById("plate");
    plate.append(slices);
    var history = document.getElementById("history");
    history.innerHTML = txt;
}

//remove the last item from ingredientList
function oops() {
    ingredientList.splice(-1, 1);
    localStorage.setItem('sandwich', JSON.stringify(ingredientList));
    var beGone = document.getElementById("plate");
    beGone.removeChild(beGone.lastElementChild);
    
}

//eat the sandwich to reload the page and start over
function eat() {
    window.location.reload();
}

function showList() {
    console.log(ingredientList);
}