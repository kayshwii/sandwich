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
    //add the topping to the ingredient list
    ingredientList.push(topping);
    //
    localStorage.setItem('sandwich', JSON.stringify(ingredientList));

    for (let ingredient in ingredientList) {
        //for every topping in the array: create an image
        var slices = document.createElement("img");
        slices.className = "sandwich";
        slices.value = ingredient;
        slices.id = topping + ingredient++;
        slices.src = ingredientImgs[topping];
    }
    var plate = document.getElementById("plate");
    plate.append(slices);
    addToppingHistory(topping);
}

function addToppingHistory(topping) {
    for (let ingredient in ingredientList) {
        //for every topping add a button to remove the item
    var delButton = document.createElement("button");
    var iTag = document.createElement("i");
    delButton.className = "delButton"
    delButton.value = ingredient;
    delButton.id = topping + ingredient++;
    delButton.innerHTML = topping + " &#10060;";
    delButton.appendChild(iTag);
    }
    var history = document.getElementById("history");
    history.append(delButton);
}

document.addEventListener("click", removeTopping);

function removeTopping (click) {
    var button = click.target;
    if (button.className == "delButton") {
        ingredientList.splice(button.value, 1);
        document.getElementById(button.id).remove();
        document.getElementById(button.id).remove();
    }
    //ingredientList.splice(slices.value, 1);
    //document.getElementById(slices.id).remove();
    //document.getElementById(delButton.id).remove();
}

//eat the sandwich to reload the page and start over
function eat() {
    window.location.reload();
}

function showList() {
    console.log(ingredientList);
}