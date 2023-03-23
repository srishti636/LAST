const correctAnswers = ['A', 'D', 'A', 'B'];
const form = document.querySelector('.quizForm');
form.addEventListener('submit', event => {
    event.preventDefault();
    let score = 0;
    const userAns = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    userAns.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score+=25;
        }

    });

    window.scrollTo(0,0);
    const result = document.querySelector('.result');
    result.classList.remove('d-none');

    let counter = 0;
    let timer = setInterval( () => {
        result.querySelector('span').textContent = `${counter}%`;
        if(counter === score){
            clearInterval(timer);
        }
        else{
            counter++;
        }
    },10);
    
});

