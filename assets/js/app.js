let input = document.querySelectorAll('input[type=checkbox]')
let soal = document.querySelectorAll('.soal')
let visual = 0, auditoring = 0, read = 0, kinesthetic = 0
let indexSoal = 1, indexInput = 0, batas = 4
let result = document.querySelectorAll('.result')

function start() {
    document.getElementById('home').classList.add('d-none')
    document.getElementById('about').classList.add('d-none')
    document.getElementById('contact').classList.add('d-none')
    soal[0].classList.remove('d-none')
}

function next() {
    if (indexSoal == 15) {
        soal[0].classList.add('d-none')
        result[0].classList.remove('d-none')
        result[1].innerHTML= `<tr><td scope="row">Visual</td>
                                    <td>=</td>
                                    <td>${visual}</td></tr>
                                <tr><td scope="row">Auditoring</td>
                                    <td>=</td>
                                    <td>${auditoring}</td></tr>
                                <tr><td scope="row">Read-Write</td>
                                    <td>=</td>
                                    <td>${read}</td></tr>
                                <tr><td scope="row">Kinesthetic</td>
                                    <td>=</td>
                                    <td>${kinesthetic}</td></tr>`
    } else {
        for (indexInput; indexInput < batas; indexInput++) {
            if (input[indexInput].checked) {
                switch (input[indexInput].value) {
                    case 'V':
                        visual++
                        break
                    case 'A':
                        auditoring++
                        break
                    case 'R':
                        read++
                        break
                    case 'K':
                        kinesthetic++
                        break
                    default:
                        break;
                }
            }
        }
        soal[indexSoal].classList.add('d-none')
        indexSoal++
        soal[indexSoal].classList.remove('d-none')
        batas+=4
    }
}

function reset() {
    location.reload()
}

const darkModeToggle = document.querySelector('#dark-mode-toggle')
const htmlTag = document.querySelector('html')

function setDarkMode() {
    htmlTag.setAttribute('data-bs-theme', 'dark')
}

function setLightMode() {
    htmlTag.setAttribute('data-bs-theme', 'light')
}

darkModeToggle.addEventListener('click', () => {
    const isDarkMode = htmlTag.getAttribute('data-bs-theme') === 'dark'
    if (isDarkMode) {
        setLightMode()
    } else {
        setDarkMode()
    }
});
