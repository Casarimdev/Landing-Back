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



