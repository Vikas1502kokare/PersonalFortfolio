let tablinks = document.getElementsByClassName('tab-links')
let tabcontents = document.getElementsByClassName('tab-contents')
let sidemenu = document.getElementById('sidemenu')
// let skill = document.querySelectorAll('#skill')
// let education = document.querySelectorAll('#education')
// let hobbies = document.querySelectorAll('#hobbies')

function opentab(tabname) {
    for (tabli of tablinks) {
        tabli.classList.remove('active-link')
    }
    for (tabconte of tabcontents) {
        tabconte.classList.remove('active-tabs')
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add('active-tabs')
}

function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbw4GGWZJnOdm8_1BMROAFvZnys0oaCdGbzQLCn1fcDRlOr7hOMlthx1IVF833qBHcaF/exec'
const form = document.forms['submit-to-google-sheet']

const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = 'Message Sent Successefully'
            setTimeout(() => {
                msg.innerHTML = ""
            }, 5000);
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})