//click event on the button 

// const button = document.querySelector('button');
// button.addEventListener( 'click', () =>{
//     console.log("You clicked me!");
// });

//removing an element on clicking or strike it through
const items = document.querySelectorAll('li');
// console.log(items);

//M-1


// items.forEach( item => {
//     item.addEventListener('click', event => {
//         // console.log(event.target.innerText);
//         // event.target.style.textDecoration ='line-through';
        
//         event.target.remove();
//         console.log('LI Tag Clicked');
//         event.stopPropagation();
        
//     });
// });

//USING FOR EACH FOR EACH LI TAGS AND ADDING LISTENERS COULD BE A COSTLY OPERATION AND MIGHT AFFECT THE PERFORMANCE AND ALSO THE NEW LI
//TAGS THAT ARE INSERTED, THE EVENT LISTENERS ARE NOT ATTATCHED TO THOSE SO WE GO FOR M-2

//M-2

//We won't attatch the event listeners to the li tags, instead we will attatch the event listeners to the ul tag so that when the event bubbling takes place and it works for all the li tags even for those that are newly added


const ul = document.querySelector('ul');
ul.addEventListener('click', event => {
    if(event.target.tagName === 'LI'){
        event.target.remove();
    }
});










//add a new todo

// const ul =document.querySelector('ul');
// ul.addEventListener('click', () => {
//     console.log('UL Tag Clicked');
// }); // EVENT BUBBLING - When the listener for the li tag is called the listener for it's parent
// is also called and so clicking on the li tag results in printing 'UL Tag clicked' on the console.

const button = document.querySelector('button');
button.addEventListener('click', () => {

    // ul.innerHTML+='<li>Something new!</li>';
    const li = document.createElement('li');
    li.textContent ='Something new to do!';
    ul.append(li);
});


// MORE DOM EVENTS

const copy = document.querySelector('.copy-me');
copy.addEventListener('copy', () => {
    console.log("Oyye! Don't Copy me !");
});

const box = document.querySelector('.box');
box.addEventListener('mousemove', event =>{
    // console.log(event.offsetX, event.offsetY);
    box.textContent=`X-offset ${event.offsetX},     Y-offset ${event.offsetY}`;
});

//scroll -- Wheel event -- pageX and pageY

//forEach method is used to fire a callback function for each element.