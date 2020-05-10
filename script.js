var border = document.getElementById('border');
var heading = document.getElementsByTagName('h1');
var toggle = false;
var ball = document.getElementById('ball');
var padding=0;
border.addEventListener('click',function(){
	if(toggle){
		document.body.style.backgroundColor="white";
		heading[0].style.color="black";
		border.style.backgroundColor="white";
		ball.style.marginLeft="0%";
	}else{
		document.body.style.backgroundColor="black";
		heading[0].style.color="white";
		border.style.backgroundColor="white";
		ball.style.marginLeft="74%";
	}
	toggle= !toggle;
});