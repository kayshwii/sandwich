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

        //for every topping add a button to remove the item
        var delButton = document.createElement("button");
        var iTag = document.createElement("i");
        iTag.className = "material-icons";
        iTag.innerHTML = "&#xe872;";
        delButton.id = slices.id;
        delButton.textContent = topping + " ";
        delButton.appendChild(iTag);
        delButton.addEventListener("click", function (ingredient) {
            ingredientList.splice(slices.value, 1);
            document.getElementById(slices.id).remove();
            document.getElementById(delButton.id).remove();
        })

    }
    
    var plate = document.getElementById("plate");
    plate.append(slices);
    var history = document.getElementById("history");
    history.append(delButton);
}


//eat the sandwich to reload the page and start over
function eat() {
    window.location.reload();
}

function showList() {
    console.log(ingredientList);
}