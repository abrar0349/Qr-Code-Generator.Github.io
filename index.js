let QrCode = document.getElementById('qr-code');
let QrSize = document.getElementById('sizes');
let generateBtn = document.getElementById('generateBtn');
let downloadBtn = document.getElementById('downloadBtn');


let QrContainer = document.getElementsByClassName('qr-body')[0];

// let size = QrSize.value
// console.log(QrCode,QrSize,generateBtn,downloadBtn)

let size = parseInt(QrSize.value); 

QrSize.addEventListener("change",(e) => {
    size = e.target.value
    isEmptyInput()
})

generateBtn.addEventListener('click', (e) => {
    e.preventDefault()
    isEmptyInput()    
})

function isEmptyInput(){
    if(QrCode.value.length > 0){
        generateQrCode()
    }else{
        alert('Please insert some value in Input Box')
    }
}

function generateQrCode() {
  
    QrContainer.innerHTML = ''; // Clear previous QR code

    new QRCode(QrContainer, { 
        text: QrCode.value,
        width: size,
        height: size,
        colorDark: '#000',
        colorLight: '#fff',
    });
    // console.log(QRCode)
}

downloadBtn.addEventListener('click', (e) => {
 let img = document.querySelector('.qr-body img')
 if(img !== null){
    let imgAtt = img.getAttribute('src')
    downloadBtn.setAttribute('href',imgAtt)
 }else{
    downloadBtn.setAttribute('href',`${document.querySelector('canvas').toDataURL()}`)
 }
})




