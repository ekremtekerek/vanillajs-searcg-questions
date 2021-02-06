//question and answer
const newQuestion = document.querySelector('.inputQuestion');
const halfContainer = document.getElementById('half');
let questionArr = [];

fetch('http://127.0.0.1:5500/js/question.json').then(res=>{
   return res.json();
}).then(soru=>{
    soru.map(soru=>{
        setQuestion(soru);
        questionArr.push(soru);
    });     
})

function clearContainer() {
    const callQuenstions = document.querySelectorAll('.half .tab');
    callQuenstions.forEach(x => {
    x.parentNode.removeChild(x); 
})};

function setQuestion(soru) {
    const tab =  document.createElement('div');
    tab.className = 'tab';
    tab.innerHTML = `<input id="tab-${soru.uniqueId}" type="checkbox" name="tabs">
    <label for="tab-${soru.uniqueId}">${soru.question}</label>
    <div class="tab-content">
    <p>${soru.answer}</p>
    </div>`;
    halfContainer.appendChild(tab);
}

function searchHandle(e) {
    const params = e.target.value;
    const filteredQuestions = questionArr.filter(questionAns=>questionAns.answer.includes(params) || questionAns.question.includes(params));
    if(filteredQuestions.length > 0) {
        clearContainer();
        filteredQuestions.map(soru=>setQuestion(soru))
    } 
};


newQuestion.addEventListener("keyup", searchHandle);




