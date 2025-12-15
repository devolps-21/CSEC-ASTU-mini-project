const popUp = document.getElementById("contactmePopup");
const fs= document.getElementById("fm");
const closeBtn = document.getElementById("icon");
const submitBtn = document.getElementById("sub");
const textArea = document.getElementById("t");
const nameA = document.getElementById("n");
const emailE = document.getElementById("e");
const form = document.querySelector('form');

popUp.addEventListener('click', () => {
    form.style.visibility = 'visible';
})
closeBtn.addEventListener('click', () => {
    form.style.visibility = 'hidden';
})
submitBtn.addEventListener('click', () => {
    if(nameA.value=="" || emailE.value=="" || textArea.value=="") {
        return alert("Please fill this fields");
    }
})
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    alert(`Thank you ${name}! Your message has been received.`);
    form.style.visibility='hidden';
});
