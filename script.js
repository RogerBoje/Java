function changecolor(){

	var x = document.getElementById("button");
	x.style.backgroundColor = "red";
}

function unfade(element, time){
	var op = 0.1;
	var timer = setInterval(function() {
		if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, time);
}

function spin(element){
	var op = 0;
	var timer = setInterval(function() {
		if (op >= 360){
			clearInterval(timer);
		}
		
		element.style.transform = "rotate(" + op + "deg)";
		
		op += 5;
	}, 5);
}

var x = document.getElementById("inner");
unfade(x,20);

