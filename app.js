'use strict';

$(function() {
    for(let i=1;i<=100;i++) {
	let nappi = $(`<button>Nappi ${i}</button>`);
	$('#napit').append(nappi);
	nappi.click(e => {
	    $('#vastaus').html(i);
	});
	if(i%10 === 0) {
	    $('#napit').append(`<div style="clear: both;"></div>`);
	}
    }
});
