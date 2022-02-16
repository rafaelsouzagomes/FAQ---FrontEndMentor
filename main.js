let allQuestionssLi = document.querySelectorAll('li');

for (let i = 0; i < allQuestionssLi.length; i++) {
    allQuestionssLi[i].addEventListener('click', function () {
         
        let answer =  document.querySelectorAll('p')[i];
        let arrow = document.querySelectorAll('.arrow')[i];
        let question = document.querySelectorAll('.question')[i];

        if (answer.classList.contains('show')) {
            closeAllQuestions();
            arrow.style.transform="rotate(0deg)"
            hideAnswer(answer);
            resetFont(question);
        } else {
            closeAllQuestions();
            arrow.style.transform="rotate(180deg)"
            showAnswer(answer);
            focusFont(question);
        }
    })
}

function closeAllQuestions(){
    for (let i = 0; i < allQuestionssLi.length; i++) {
        document.querySelectorAll('.arrow')[i].style.transform="rotate(0deg)"
        hideAnswer(document.querySelectorAll('p')[i]);
        resetFont(document.querySelectorAll('.question')[i]);
    }
}


function focusFont(qst) {
    qst.classList.add('boldFont');
}

function resetFont(qst) {
    qst.classList.remove('boldFont');
}

function showAnswer(element) {
    element.classList.remove('hidden');
    element.classList.add('show');
}

function hideAnswer(element) {
    element.classList.remove('show');
    element.classList.add('hidden');
}

