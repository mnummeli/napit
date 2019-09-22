'use strict';

for(let i=1;i<=100;i++) {
    let nappi = document.createElement('button');
    let teksti = document.createTextNode(`Nappi ${i}`);
    nappi.append(teksti);
    document.getElementById('napit').append(nappi);
    nappi.onclick = e => {
	document.getElementById('vastaus').innerHTML = i;
    };
    if(i%10 === 0) {
	let clearfix = document.createElement('div');
	clearfix.style.clear = 'both';
	document.getElementById('napit').append(clearfix);
    }
}
