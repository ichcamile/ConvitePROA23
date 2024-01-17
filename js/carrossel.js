// // CARROSSEL
// const box = document.querySelector(".carousel-items");
// const logos = document.querySelectorAll(".item");

// let cont = 0;

// function carousel(){ 

//   cont++

//   if (cont > logos.length+2){
//     cont=0;
//   }

//   box.style.transform = `translateX(${-cont*350}px)`;

// }

// setInterval(carousel, 2000)

// REMOVEDOR DE CADEADOS 
const imagensPorData = {
  '2023-11-27': '1',
  '2023-11-28': '2',
  '2023-11-29': '3',
  '2023-11-30': '4',
  '2023-11-31': '5',
  '2023-12-01': '6',
  '2023-12-02': '7',
  '2023-12-03': '8',
  '2023-12-04': '9',
  '2023-12-05': '10',
  '2023-12-06': '11',
  '2023-12-07': '12',
  '2023-12-08': '13',
  '2023-12-09': '14',
  '2023-12-10': '15',
  '2023-12-11': '16',
  '2023-12-11': '17',
  '2023-12-11': '18',
  '2023-12-11': '19',
  '2023-12-11': '20',
};
 
function removerCadeados() {
  let dataAtual = new Date();
  let dataFormatada = dataAtual.toISOString().slice(0, 10);
  let i = imagensPorData[`${dataFormatada}`]

  if (imagensPorData.hasOwnProperty(dataFormatada)) {
    let cadeado = document.querySelector(`.cadeado${imagensPorData[`${dataFormatada}`]}`);
    let background = document.querySelector(`.background${imagensPorData[`${dataFormatada}`]}`);
    cadeado.style.display="none";
    background.style.display="none";
  }

  while(i > 0){
    cadeado = document.querySelector(`.cadeado${i}`);
    background = document.querySelector(`.background${i}`);
    cadeado.style.display="none";
    background.style.display="none";
    i--
  }
}

// window.addEventListener("load", removerCadeados())