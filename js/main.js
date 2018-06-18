// function declaration
function howdy() {
    console.log('Brittany Bellanca says hey there!');
}

howdy();


// function expression
var numba = function ourFunction(string) {
    if (string.length < 7) {
        console.log('What a short little word!');
    }

    else if (string.length > 7) {
        console.log('I’m sorry, but that’s too many to count.');
    }

    else {
        console.log('7, what a perfect choice!');
    }
}

numba('7');

numba('seventy');

numba('university');


// Function with Parameters
function inception(display, favMovie) {
    display(favMovie);
}

function onScreen(aMovie) {
    console.log(aMovie + ' ' + 'is a fantastic movie.');
}

inception(onScreen, 'Pitch Perfect');
