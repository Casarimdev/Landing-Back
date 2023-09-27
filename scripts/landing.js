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



// VIDEOS
// VTURB-ESP
let videoESP = document.getElementById("vid_6503757f909f89000a905de3")
let thumbESP = document.getElementById("thumb_6503757f909f89000a905de3")
let backdropESP = document.getElementById("backdrop_6503757f909f89000a905de3")
videoESP.style.display = 'none'
// thumbESP.style.display = 'none'
// backdropESP.style.display = 'none'


let videoUS = document.getElementById("video-US")
let videoPT = document.getElementById("video-PT")

videoPT.style.display = 'none'
videoUS.style.display = 'none'

// TEXTS

    // Container 1 
let Select = document.getElementById("Select")
let oMetodo = document.getElementById("Elmet")
let Juvenil = document.getElementById("Juvenil")
let Minutos = document.getElementById("minutes")
let br1 = document.getElementById("brh1")
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
    // thumbESP.style.display = 'block'
    // backdropESP.style.display = 'block'
    videoESP.style.display = 'block'
    videoESP.innerHTML= '<div id= "vid_6503757f909f89000a905de3" style="position:relative;width:900px;padding: 0.25% 0 0;height:auto;"><img id="thumb_6503757f909f89000a905de3" src="https://images.converteai.net/9714ed72-2eda-418b-bb68-df9ab62de4e3/players/6503757f909f89000a905de3/thumbnail.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;display:block;" alt="img-adv"> <div id="backdrop_6503757f909f89000a905de3" style="position:absolute;top:0;width:100%;height:100%;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);"> </div></div> <script type="text/javascript" id="scr_6503757f909f89000a905de3">var s = document.createElement("script"); s.src = "https://scripts.converteai.net/9714ed72-2eda-418b-bb68-df9ab62de4e3/players/6503757f909f89000a905de3/player.js", s.async = !0, document.head.appendChild(s);</script>'


    videoUS.style.display = 'none'
    videoPT.style.display = 'none'
    // Primeiro Container
    Select.innerHTML = 'elige tu idioma: '
    H1Texto.innerHTML = '<span style="color: #ff0000;">El Método</span> que te devolverá tu espalda <br> <span style="color: #ff0000;">juvenil</span> EN <span style="color: #ff0000;">4 minutos</span>'
    Clique.innerHTML = 'HACA CLIC AQUI PARA COMPRAR'
    SaibaMais.innerHTML = '¿ES PARA VOS? APRENDER MEJOR'

    // Segundo Container
    ParaQuem.innerHTML = '¿PARA QUIÉN ES ESTE CURSO?'
    ParaTu.innerHTML = '¡ES PARA TI!'
    Quiero.innerHTML = '¡YO QUIERO!'

    // Textos Container 2
    TextoVenda1.innerHTML = 'Descubre cómo aliviar el dolor de espalda y recuperar tu calidad de vida.'
    TextoVenda2.innerHTML = 'Para todo aquel que quiera vivir sin dolores de espalda y disfrutar la vida al máximo.'
    TextoVenda3.innerHTML = 'Este curso es para ti, independientemente de tu profesión o estilo de vida, si padeces dolor de espalda.'
    TextoVenda4.innerHTML = 'Sea cual sea tu edad u ocupación, nuestro curso puede ayudarte a superar el dolor lumbar.'
}


// ENGLISH LANGUAGE
function translateEnglish(){
    videoESP.style.display = 'none'
    videoUS.style.display = 'block'
    videoPT.style.display = 'none'
    // Primeiro Container
    Select.innerHTML = 'select your language: '
    H1Texto.innerHTML = '<span style="color: #ff0000;">THE METHOD</span> that will turn your back <br> <span style="color: #ff0000;">YOUTH</span> in <span style="color: #ff0000;">4 MINUTES</span>'
    Clique.innerHTML = 'CLICK HERE TO BUY'
    SaibaMais.innerHTML = 'IT IS FOR YOU? LEARN BETTER'

    // Segundo Container
    ParaQuem.innerHTML = 'WHO IS THIS COURSE FOR?'
    ParaTu.innerHTML = 'IS FOR YOU!'
    Quiero.innerHTML = 'I WANT!'

    // Textos Container 2
    TextoVenda1.innerHTML = 'Discover how to relieve back pain and recover your quality of life.'
    TextoVenda2.innerHTML = 'For anyone who wants to live without back pain and enjoy life to the fullest.'
    TextoVenda3.innerHTML = 'This course is for you, regardless of your profession or lifestyle, if you suffer from back pain.'
    TextoVenda4.innerHTML = 'Whatever your age and occupation, our course can help you overcome lower back pain.'
}

// PORTUGUÊS LANGUAGE

function translatePortuguese(){
    videoESP.style.display = 'none'
    videoUS.style.display = 'none'
    videoPT.style.display = 'block'
    // Primeiro Container
    Select.innerHTML = 'Selecione seu idioma: '
    H1Texto.innerHTML = '<span style="color: #ff0000;">O método</span> que vai te dar de volta suas costas <br> <span style="color: #ff0000;">Novas</span> em <span style="color: #ff0000;">4 MINUTOS</span>'
    Clique.innerHTML = 'CLIQUE AQUI PARA COMPRAR'
    SaibaMais.innerHTML = 'É PARA TI? SAIBA MELHOR'

    // Segundo Container
    ParaQuem.innerHTML = 'A QUEM SE DESTINA ESTE CURSO?'
    ParaTu.innerHTML = 'É PARA TI!'
    Quiero.innerHTML = 'EU QUERO!'

    // Textos Container 2
    TextoVenda1.innerHTML = 'Descubra como aliviar as dores nas costas e recuperar a sua qualidade de vida.'
    TextoVenda2.innerHTML = 'Para quem quer viver sem dores nas costas e aproveitar a vida ao máximo.'
    TextoVenda3.innerHTML = 'Este curso é para você, independentemente da sua profissão ou estilo de vida, se sofre de dores nas costas.'
    TextoVenda4.innerHTML = 'Seja qual for a sua idade e profissão, o nosso curso pode ajudá-lo a superar a dor lombar.'
}