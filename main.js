function clean () {
    const answer = ['a','b','c','d'];

    for(let i = 0; i < answer.length; i++){
        document.getElementById(answer[i]).checked = false;
    }
}

function updateAnswer (question, a, b, c, d){
    document.getElementById("question").innerHTML = question;
    document.getElementById("a").value = a;
    document.getElementById("a_answer").innerHTML = a;
    document.getElementById("b").value = b;
    document.getElementById("b_answer").innerHTML = b;
    document.getElementById("c").value = c;
    document.getElementById("c_answer").innerHTML = c;
    document.getElementById("d").value = d;
    document.getElementById("d_answer").innerHTML = d;
}

function checkResult (allResult){
    let countGoodAnswer = 0;
    const goodAnswer = ["JavaScript", "Donald Trump", "Hypertext Markup Language", "1995"];
    const filteredArray = allResult.filter(function(ele , pos){
        return allResult.indexOf(ele) == pos;
    }) 

    for(let i = 0; i < goodAnswer.length; i++){
        if (filteredArray[i] === goodAnswer[i])
            countGoodAnswer++;
    }
    document.getElementById("question").innerHTML = "You answered correctly at " + countGoodAnswer + "/4 questions.";
    document.getElementsByClassName("list")[0].style.display = "none";
    document.getElementById("question").style.width = "100%";
    document.getElementById("submit").value = "Reload";

    document.getElementById("submit").addEventListener('click', function(event){
        location.reload();
    });
}

function listenAnswer (step, allResult){
    const answer = ['a','b','c','d'];
    let result = undefined;

    for(let i = 0; i < answer.length; i++){
        document.getElementById(answer[i]).addEventListener('click', function(event){
            result = event.target.value;
        });
    }

    document.getElementById("submit").addEventListener('click', function(event){
        allResult.push(result);
        if (result && step === 0)
            updateAnswer("Who is the President of US ?", "Florin Pop", "Donald Trump", "Ivan Saldano", "Mihai Andrei");
        if (result && step === 1)
            updateAnswer("What does HTML stand for ?", "Hypertext Markup Language", "Cascading Style Sheet", "Jason Object Notation", "Helicopters Terminals Motorboats Lamborginis");
        if (result && step === 2)
            updateAnswer("What year was JavaScript launched ?", "1996", "1995", "1994", "none of the above");
        if (result && step === 3)
            checkResult(allResult);
        clean();
        listenAnswer(step + 1, allResult);
    });
}

listenAnswer(0, []);