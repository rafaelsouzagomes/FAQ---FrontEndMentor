
function OpenOrCloseQuestion(questionName, arrowId){

    const question = document.getElementById(questionName);
    const arrow = document.getElementById(arrowId);
    
    if(question.classList.contains('hidden')){
        question.classList.remove('hidden');
        arrow.classList.add('arrow-rotated');
        ocultarTodasPerguntasExceto(questionName);
    }
    else{
        question.classList.add('hidden');
        arrow.classList.remove('arrow-rotated');
    }
}



function ocultarTodasPerguntasExceto(questionName){

    const question1 = document.getElementById('firstQuestion');
    const question2 = document.getElementById('secondQuestion');
    const question3 = document.getElementById('thirdQuestion');
    const question4 = document.getElementById('fourthQuestion');
    const question5 = document.getElementById('fifthQuestion');

    if(questionName!=='firstQuestion'){
        question1.classList.add('hidden');
    }
    
    if(questionName!=='secondQuestion'){
        question2.classList.add('hidden');
    }

    if(questionName!=='thirdQuestion'){
        question3.classList.add('hidden');
    }

    if(questionName!=='fourthQuestion'){
        question4.classList.add('hidden');
    }
    if(questionName!=='fifthQuestion'){
        question5.classList.add('hidden');
    }
}