// when we are submitting the form, we do not attatch the eventListner
//to the submit button but instead to the form because it's the form that 
//we are submitting

// M-1

// const form =document.querySelector('.signup-form');
// const input =document.querySelector('#username');
// form.addEventListener("submit", event => {
//     event.preventDefault();
//     console.log(input.value);
// });


// const form =document.querySelector('.signup-form');
// form.addEventListener("submit", event => {
//     event.preventDefault();
//     console.log(form.username.value); // form.(id/class).value when we have the access to form, we have the access to its input elements
//     //also using form.(id/class)
// });

// const username = "^srishti$"; //this would have matched if we didn't put ^ and $ at the beginning and end respectively 
// const pattern = /^[a-z]{6,}$/;

// const result = pattern.test(username);
// console.log(result);

// if(result){
//     console.log("regex test passed");
// }

// else{
//     console.log("regex test failed!");
// }

// const username2 = "@379srishti0";
// const pattern2 = /[a-z]{6,}/;
// const result2 = username2.search(pattern2);  
// //search returns the index where it matches
// console.log(result2);
// console.log("@123".search(pattern2));

const pattern = /^[a-zA-Z]{6,12}$/;

const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
form.addEventListener('submit', event => {
    event.preventDefault();
    const username = form.username.value;
    
    if(pattern.test(username)){
        feedback.textContent = "The username format is valid!";
    }
    else{
        feedback.textContent = "The username must contain letters and must be 6 to 12 characters long!"
    }

});

form.username.addEventListener("keyup", e => {
    // console.log(form.username.value, event.target.value);
    console.log(e); // we can check if the alt key is pressed as well as if the shift key is pressed and what other key is pressed
    if(pattern.test(e.target.value)){
        form.username.setAttribute('class', 'success');
    }

    else{
        form.username.setAttribute('class', 'failure');
    }
});