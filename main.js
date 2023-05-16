
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1


//função callback
function actionTryClick(event) {
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")

    if (Number(inputNumber.value) == randomNumber) {
        screen1.classList.add("hide")
        screen2.classList.remove("hide")

        document.querySelector(".screen2 h2").innerHTML = `Você acertou em ${xAttempts} tentativas`


    }

    xAttempts++

}

//Eventos

const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")


btnTry.addEventListener('click', actionTryClick)
btnReset.addEventListener('click', function () {
    screen1.classList.remove("hide")
    screen2.classList.add("hide")

})