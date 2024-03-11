console.log('funguju!');

const skillHtml = prompt("Zadej úroveň dovednosti v HTML od 0 do 100:")
const skillCss = prompt("Zadej úroveň dovednosti v CSS od 0 do 100:")
const skillJavaScript = prompt("Zadej úroveň dovednosti v Javascript od 0 do 100:")

const contHtml = document.querySelector('.skill__progress');
contHtml.textContent = (skillHtml + " / 100")

const contCss = document.querySelector('.skill__progress:nth-child(1)');
contCss.textContent = (skillCss + " / 100")

const contJavaScript = document.querySelector('.skill__progress:nth-child(2)');
contJavaScript.textContent = (skillJavaScript + " / 100")