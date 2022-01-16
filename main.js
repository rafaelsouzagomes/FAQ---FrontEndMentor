
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

    const arrow1 = document.getElementById('arrowFirstQuestion');
    const arrow2 = document.getElementById('arrowSecondQuestion');
    const arrow3 = document.getElementById('arrowThirdQuestion');
    const arrow4 = document.getElementById('arrowFourthQuestion');
    const arrow5 = document.getElementById('arrowFifthQuestion');



    if(questionName!=='firstQuestion'){
        question1.classList.add('hidden');
        arrow1.classList.remove('arrow-rotated');

    }
    
    if(questionName!=='secondQuestion'){
        question2.classList.add('hidden');
        arrow2.classList.remove('arrow-rotated');
    }

    if(questionName!=='thirdQuestion'){
        question3.classList.add('hidden');
        arrow3.classList.remove('arrow-rotated');
    }

    if(questionName!=='fourthQuestion'){
        question4.classList.add('hidden');
        arrow4.classList.remove('arrow-rotated');        
    }

    if(questionName!=='fifthQuestion'){
        question5.classList.add('hidden');
        arrow5.classList.remove('arrow-rotated');
    }
}