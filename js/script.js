console.log("external JS is working");
$(document).ready(function(){
	console.log("jquery has loaded");
})


$('#para2').hide();
$('.btn-hide').hide();

$('.btn-show').click(function(){
	$('#para2').slideDown(1000);
	$('.btn-hide').show();
	$('.btn-show').hide();
});

$('#nav').click(function(){
	$('.button').toggle();
});

$('.btn-hide').click(function(){
	$('#para2').slideUp();
	$('.btn-hide').hide();
	$('.btn-show').show();
});

function showNav(){
    var menu = document.getElementById("list");
    if(menu.style.display === 'block'){
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}


