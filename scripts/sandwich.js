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
    for (let ingredient in ingredientList) {
        //for every topping in the array: create an image
        var slices = document.createElement("img");
        slices.setAttribute("class", "sandwich");
        slices.setAttribute("id", "slice" + ingredient++);
        slices.src = ingredientImgs[topping];

        //for every topping add a button to remove the item
        var delButton = document.createElement("button");
        delButton.setAttribute("id", "delButton")
        delButton.textContent = topping + ' <i class="material-icons">delete</i>';
    }
    
    var plate = document.getElementById("plate");
    plate.append(slices);
    var history = document.getElementById("history");
    history.append(delButton);
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