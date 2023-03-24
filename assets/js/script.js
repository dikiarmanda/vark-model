let input = document.querySelectorAll('input[type=checkbox]')
let soal = document.querySelectorAll('.soal')
let visual = 0, auditoring = 0, read = 0, kinesthetic = 0
let indexSoal = 1, indexInput = 0, batas = 4
let result = document.querySelectorAll('.result')

function next() {
    if (indexSoal == 15) {
        soal[0].classList.add('d-none')
        result[0].classList.remove('d-none')
        result[1].innerHTML= `<h1>Visual = ${visual}</h1>
                            <h1>Auditoring = ${auditoring}</h1>
                            <h1>Read-Write = ${read}</h1>
                            <h1>Kinesthetic = ${kinesthetic}</h1>`
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
    console.log(visual);
    console.log(auditoring);
    console.log(read);
    console.log(kinesthetic);
}