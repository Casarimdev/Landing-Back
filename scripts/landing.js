let Vettor1 = document.getElementById("vetorLock")
let Vettor2 = document.getElementById("vetorUnlucked")
let VettorH = document.getElementById("heart")
let VettorD = document.getElementById("down")
let aSale = document.getElementById("click_Sale")


// FUNCTION 'SLEEP'
    
const sleep = time => new Promise(resolve => {
    setTimeout(resolve, time)
})

// Vettor1.style.display = 'block'
VettorD.style.display = 'none'
aSale.href = ""

sleep(15000).then(() => Vettor1.style.display = 'none')
sleep(15000).then(() => VettorH.style.display = 'none')
sleep(15000).then(() => Vettor2.style.display = 'inline')
sleep(15000).then(() => VettorD.style.display = 'inline')
sleep(15000).then(() => aSale.href = "https://pay.hotmart.com/D86373027M?off=fn5bmfo6&checkoutMode=10&bid=1695232905378")


// TEXTS

    // Container 1 
let oMetodo = document.getElementById("Elmet")
let Juvenil = document.getElementById("Juvenil")
let Minutos = document.getElementById("minutes")
let H1Texto = document.getElementById("H1Text")
let Clique = document.getElementById("Clic")
let SaibaMais = document.getElementById("Saiba")

    // Container 2
let ParaQuem = document.getElementById("ParaQuem")
let ParaTu = document.getElementById("ParaTu")
let Quiero = document.getElementById("Quero")

    // Textos Container 2
let TextoVenda1 = document.getElementById("TextVenda1")
let TextoVenda2 = document.getElementById("TextVenda2")
let TextoVenda3 = document.getElementById("TextVenda3")
let TextoVenda4 = document.getElementById("TextVenda4")

// SPANINH LANGUAGE
function translateSpaninsh(){
    oMetodo.innerHTML = 'El Método'
    Juvenil.innerHTML = 'Juvenil'
    Minutos.innerHTML = '4 minutos'
    H1Texto.innerHTML = 'EL MÉTODO que te devolverá tu espalda Juvenil em 4 minutos.'
}


// ENGLISH LANGUAGE