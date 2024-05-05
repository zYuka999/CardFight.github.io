function div_img() {
  var d_ = document.getElementById('img_');
  var n_ = document.getElementById('nub');
  var no = document.getElementById('nubo');
  var s = document.getElementById('eb');

  d_.style.border = '0';
  n_.style.transform = "translate(0 , -1.2px)";
  no.style.transform = "translate(0 , -1.2px)";
  s.style.transform = "translate(0 , -1.2px)";
  //
  var fileName = prompt('Please Enter File Name')
  html2canvas(d_, { scale: 6.665 ,backgroundColor: null}).then(function(canvas) {
    var image = new Image();
    image.src = canvas.toDataURL();

    var link = document.createElement('a');
    link.href = image.src;
    link.download = `${fileName}.png`;
    link.click();

    d_.style.border = '';
    n_.style.transform = 'translate(0, 0.5px)';
    no.style.transform = 'translate(0, 0.5px)';
    s.style.transform = '';
    
  });
}

document.getElementById('exp').addEventListener('click', div_img);

function div_img1() {
  var d_ = document.getElementById('img_');
  var n_ = document.getElementById('nub');
  var no = document.getElementById('nubo');
  var s = document.getElementById('eb');

  d_.style.border = '0';
  n_.style.transform = "translate(0 , 0px)";
  no.style.transform = "translate(0 , 0px)";
  //
  var fileName = prompt('Please Enter File Name')

  html2canvas(d_, { scale: 6.665 ,backgroundColor: null}).then(function(canvas) {
    var image = new Image();
    image.src = canvas.toDataURL();

    var link = document.createElement('a');
    link.href = image.src;
    link.download =  `${fileName}.png`;
    link.click();

    d_.style.border = '';
    n_.style.transform = 'translate(0, 0.5px)';
    no.style.transform = 'translate(0, 0.5px)';
    
  });
}

document.getElementById('exp1').addEventListener('click', div_img1);

function div_img2() {
  var d_ = document.getElementById('img_');
  var n_ = document.getElementById('nub');
  var no = document.getElementById('nubo');
  var s = document.getElementById('eb');

  d_.style.border = '0';
  n_.style.transform = "translate(0 , 0px)";
  no.style.transform = "translate(0 , 0px)";
  //
  var fileName = prompt('Please Enter File Name')

  htmlToImage.toPng(d_).then(function (dataUrl) {
    download(dataUrl, 'my-node.png');
  });


  d_.style.border = '';
  n_.style.transform = 'translate(0, 0.5px)';
  no.style.transform = 'translate(0, 0.5px)';

}

document.getElementById('exp2').addEventListener('click', div_img2);




const hbutton = document.getElementById('how');
const cbutton = document.getElementById('close');
const overlay = document.getElementById('overlay');
const modal = document.getElementById('modal');

hbutton.addEventListener('click', () => openModal())
cbutton.addEventListener('click', () => closeModal())

function openModal(){
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(){
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})
