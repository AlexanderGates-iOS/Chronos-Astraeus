
/* dont change anything below this line unless you know what you are doing :-) */

var d = new Date();
var hours = d.getHours();
var minutes = d.getMinutes();
var seconds = d.getSeconds();

var acc_x, acc_y;
var deg = 0;
var deg_new = 0;
var deg_set = 0;
var deg_time = 0;
var state = 'default';

//Orbits//
function orbLoad(){
var orbLines=document.getElementById("orbLines");
    var olX=orbLines.getContext("2d");
        olX.beginPath();
        olX.arc(800,800,143,0,2*Math.PI);
        olX.strokeStyle="#FFFFFF";
        olX.lineWidth=2;
        olX.stroke();
    var olA = orbLines.getContext("2d");
        olA.beginPath();
        olA.arc(800, 800, 250, 0, 2 * Math.PI);
        olA.strokeStyle = "#FFFFFF";
        olA.lineWidth = 2;
        olA.stroke();
    var olB = orbLines.getContext("2d");
        olB.beginPath();
        olB.arc(800, 800, 400, 0, 2 * Math.PI);
        olB.strokeStyle = "#FFFFFF";
        olB.lineWidth = 2;
        olB.stroke();
    var olC = orbLines.getContext("2d");
        olC.beginPath();
        olC.arc(800, 800, 420, 0, 2 * Math.PI);
        olC.strokeStyle = "#FFFFFF";
        olC.lineWidth = 2;
        olC.stroke();
    var olD = orbLines.getContext("2d");
        olD.beginPath();
        olD.arc(800, 800, 540, 0, 2 * Math.PI);
        olD.strokeStyle = "#FFFFFF";
        olD.lineWidth = 2;
        olD.stroke();
    var olE = orbLines.getContext("2d");
        olE.beginPath();
        olE.arc(800, 800, 700, 0, 2 * Math.PI);
        olE.strokeStyle = "#FFFFFF";
        olE.lineWidth = 2;
        olE.stroke();
    var olF = orbLines.getContext("2d");
        olF.beginPath();
        olF.arc(800, 800, 790, 0, 2 * Math.PI);
        olF.strokeStyle = "#FFFFFF";
        olF.lineWidth = 2;
        olF.stroke();

var orb1 = document.getElementById("orb1");
    var o1a = orb1.getContext("2d");
        o1a.beginPath();
        o1a.arc(302, 53, 52, 0, 2 * Math.PI);
        o1a.strokeStyle = "#FFFFFF";
        o1a.lineWidth = 0;
        o1a.stroke();
    var o1b = orb1.getContext("2d");
        o1b.beginPath();
        o1b.arc(302, 53, 12, 0, 2 * Math.PI);
        o1b.strokeStyle = "#FFFFFF";
        o1b.lineWidth = 0;
        o1b.stroke();
        o1b.fillStyle = "#FFFFFF";
        o1b.fill();
var orb1MA = document.getElementById("orb1MA");
    var o1MA = orb1MA.getContext("2d");
        o1MA.beginPath();
        o1MA.arc(28, 3, 2, 0, 2 * Math.PI);
        o1MA.strokeStyle = "#FFFFFF";
        o1MA.lineWidth = 2;
        o1MA.stroke();
        o1MA.fillStyle = "#FFFFFF";
        o1MA.fill();
var orb2=document.getElementById("orb2");
    var o2a=orb2.getContext("2d");
        o2a.beginPath();
        o2a.arc(408,9,8,0,2*Math.PI);
        o2a.strokeStyle="#FFFFFF";
        o2a.lineWidth=0;
        o2a.stroke();
        o2a.fillStyle="#FFFFFF";
        o2a.fill();
    var o2b=orb2.getContext("2d");
        o2b.beginPath();
        o2b.arc(808,408,6,0,2*Math.PI);
        o2b.strokeStyle="#FFFFFF";
        o2b.lineWidth=0;
        o2b.stroke();
        o2b.fillStyle="#FFFFFF";
        o2b.fill();
var orb3=document.getElementById("orb3");
    var o3=orb3.getContext("2d");
        o3.beginPath();
        o3.arc(10,430,8,0,2*Math.PI);
        o3.strokeStyle="#FFFFFF";
        o3.lineWidth=0;
        o3.stroke();
        o3.fillStyle="#FFFFFF";
        o3.fill();
var orb4 = document.getElementById("orb4");
    var o4a = orb4.getContext("2d");
        o4a.beginPath();
        o4a.arc(622, 81, 32, 0, 2 * Math.PI);
        o4a.strokeStyle = "#FFFFFF";
        o4a.lineWidth = 0;
        o4a.stroke();
        o4a.fillStyle = "#FFFFFF";
        o4a.fill();
    var o4b = orb4.getContext("2d");
        o4b.beginPath();
        o4b.arc(622, 81, 80, 0, 2 * Math.PI, true);
        o4b.arc(622, 81, 70, 0, 2 * Math.PI, false);
        o4b.moveTo(622,81);
        o4b.arc(622, 81, 64, 0, 2 * Math.PI, true);
        o4b.arc(622, 81, 46, 0, 2 * Math.PI, false);
        o4b.strokeStyle = "rgba(255,255,255,0)";
        o4b.lineWidth = 0;
        o4b.stroke();
        o4b.fillStyle = "rgba(255,255,255,.6)";
        o4b.fill();
var orb4MA = document.getElementById("orb4MA");
    var o4MA = orb4MA.getContext("2d");
        o4MA.beginPath();
        o4MA.arc(78, 11, 2, 0, 2 * Math.PI);
        o4MA.strokeStyle = "#FFFFFF";
        o4MA.lineWidth = 0;
        o4MA.stroke();
        o4MA.fillStyle = "#FFFFFF";
        o4MA.fill();
var orb5 = document.getElementById("orb5");
    var o5a = orb5.getContext("2d");
        o5a.beginPath();
        o5a.arc(81, 780, 80, 0, 2 * Math.PI);
        o5a.strokeStyle = "#FFFFFF";
        o5a.lineWidth = 1;
        o5a.stroke();
    var o5b = orb5.getContext("2d");
        o5b.beginPath();
        o5b.arc(81, 780, 74, 0, 2 * Math.PI);
        o5b.strokeStyle = "#FFFFFF";
        o5b.lineWidth = 1;
        o5b.stroke();
    var o5c = orb5.getContext("2d");
        o5c.beginPath();
        o5c.arc(81, 780, 64, 0, 2 * Math.PI);
        o5c.strokeStyle = "#FFFFFF";
        o5c.lineWidth = 1;
        o5c.stroke();
    var o5d = orb5.getContext("2d");
        o5d.beginPath();
        o5d.arc(81, 780, 56, 0, 2 * Math.PI);
        o5d.strokeStyle = "#FFFFFF";
        o5d.lineWidth = 1;
        o5d.stroke();
    var o5e = orb5.getContext("2d");
        o5e.beginPath();
        o5e.arc(81, 780, 46, 0, 2 * Math.PI);
        o5e.strokeStyle = "#FFFFFF";
        o5e.lineWidth = 2;
        o5e.stroke();
        o5e.fillStyle = "#FFFFFF";
        o5e.fill();
var orb5MA = document.getElementById("orb5MA");
    var o5MA = orb5MA.getContext("2d");
        o5MA.beginPath();
        o5MA.arc(88, 33, 4, 0, 2 * Math.PI);
        o5MA.strokeStyle = "#FFFFFF";
        o5MA.lineWidth = 0;
        o5MA.stroke();
        o5MA.fillStyle = "#FFFFFF";
        o5MA.fill();
var orb5MB = document.getElementById("orb5MB");
    var o5MB = orb5MB.getContext("2d");
        o5MB.beginPath();
        o5MB.arc(25, 88, 6, 0, 2 * Math.PI);
        o5MB.strokeStyle = "#FFFFFF";
        o5MB.lineWidth = 0;
        o5MB.stroke();
        o5MB.fillStyle = "#FFFFFF";
        o5MB.fill();
var orb5MC = document.getElementById("orb5MC");
    var o5MC = orb5MC.getContext("2d");
        o5MC.beginPath();
        o5MC.arc(161, 88, 2, 0, 2 * Math.PI);
        o5MC.strokeStyle = "#FFFFFF";
        o5MC.lineWidth = 0;
        o5MC.stroke();
        o5MC.fillStyle = "#FFFFFF";
        o5MC.fill();
var orb5MD = document.getElementById("orb5MD");
    var o5MD = orb5MD.getContext("2d");
        o5MD.beginPath();
        o5MD.arc(88, 169, 2, 0, 2 * Math.PI);
        o5MD.strokeStyle = "#FFFFFF";
        o5MD.lineWidth = 0;
        o5MD.stroke();
        o5MD.fillStyle = "#FFFFFF";
        o5MD.fill();
var orb6 = document.getElementById("orb6");
    var o6a = orb6.getContext("2d");
        o6a.beginPath();
        o6a.arc(30, 30, 24, 0, 2 * Math.PI);
        o6a.strokeStyle = "#FFFFFF";
        o6a.lineWidth = 0;
        o6a.stroke();
    var o6b = orb6.getContext("2d");
        o6b.beginPath();
        o6b.arc(30, 9, 8, 0, 2 * Math.PI);
        o6b.strokeStyle = "#FFFFFF";
        o6b.lineWidth = 0;
        o6b.stroke();
        o6b.fillStyle = "#FFFFFF";
        o6b.fill();
    var o6c = orb6.getContext("2d");
        o6c.beginPath();
        o6c.arc(30, 51, 8, 0, 2 * Math.PI);
        o6c.strokeStyle = "#FFFFFF";
        o6c.lineWidth = 0;
        o6c.stroke();
        o6c.fillStyle = "#FFFFFF";
        o6c.fill();
}

function initiate() {

	if (hours > 12) hours360 = hours - 12;
	else hours360 = hours;

	minutesDeg = 6 * minutes;
	hoursDeg   = 30 * hours360;
	secondsDeg = 6 * (seconds + 2);

	if (hours < 10) hours = '0' + hours;
	if (minutes < 10) minutes = '0' + minutes;

	if (hours > 12) hours = hours - 12;
	else if (hours == 0) hours = 12;


	//circles
	document.getElementById("minutes-c").childNodes[1].style.webkitTransform = 'rotate(' + minutesDeg + 'deg)';
	document.getElementById("hours-c").childNodes[1].style.webkitTransform = 'rotate(' + hoursDeg + 'deg)';
	document.getElementById("seconds-c").childNodes[1].style.webkitTransform = 'rotate(' + secondsDeg + 'deg)';


	//center
	document.getElementById("am_pm").innerHTML = hours + ':' + minutes;
	document.getElementById("day").innerHTML = Day();

	date = d.getDate();
	month = d.getMonth() + 1;
	year = new String(d.getFullYear());

	if (date < 10) date = '0' + date;
	if (month < 10) month = '0' + month;
	year = year.substr(2, 2);

	document.getElementById("date").innerHTML = month + '.' + date + '.' + year;

	setTimeout(no_animation_delay, 2200); // removes animation delay and lowers current clock animations from 2 seconds to 1
}

function no_animation_delay() {
	document.getElementById("main-wrapper").style.webkitTransitionDelay = '0s';
	document.getElementById("main-wrapper").style.webkitTransition = 'all 1s ease-in-out';

	//console.log(document.getElementById("circles").getElementsByTagName("img").style);

	var circles = document.getElementById("circles").getElementsByTagName('img');
	for (var i = 0; i < circles.length; i++) {
		circles[i].style.webkitTransitionDelay = '0s';
		circles[i].style.webkitTransition = 'all 1s ease-in-out';
	}

	document.getElementById("seconds-c").childNodes[1].style.webkitTransition = 'all 0.3s linear';

	setTimeout(update, 500); // starts normal clock updating process
}

function update() {
	d = new Date();
	hours = d.getHours();
	minutes = d.getMinutes();
	seconds = d.getSeconds();

	if (hours > 12) hours360 = hours - 12;
	else hours360 = hours;

	minutesDeg = 6 * minutes;
	hoursDeg   = 30 * hours360;
	secondsDeg = 6 * seconds;

	if (hours < 10) hours = '0' + hours;
	if (minutes < 10) minutes = '0' + minutes;

	if (hours > 12) hours = hours - 12;
	else if (hours == 0) hours = 12;

	//circles
	document.getElementById("minutes-c").childNodes[1].style.webkitTransform = 'rotate(' + minutesDeg + 'deg)';
	document.getElementById("hours-c").childNodes[1].style.webkitTransform = 'rotate(' + hoursDeg + 'deg)';
  document.getElementById("seconds-c").childNodes[1].style.webkitTransform = 'rotate(' + secondsDeg + 'deg)';	

	if (seconds == 0) {
		document.getElementById("seconds-c").childNodes[1].style.webkitTransition = 'all 1s ease-in-out';
	} else if (seconds == 1) {
		document.getElementById("seconds-c").childNodes[1].style.webkitTransition = 'all 0.3s linear';
	}



	//center
	document.getElementById("am_pm").innerHTML = hours + ':' + minutes;
	document.getElementById("day").innerHTML = Day();

	date = d.getDate();
	month = d.getMonth() + 1;
	year = new String(d.getFullYear());

	if (date < 10) date = '0' + date;
	if (month < 10) month = '0' + month;
	year = year.substr(2, 2);

	document.getElementById("date").innerHTML = month + '.' + date + '.' + year;

	//tilt
	document.getElementById("main-wrapper").style.webkitTransform = 'rotate(' + rotate() + 'deg)';
	//tilt


	setTimeout(update, 1000);
}

function Day () {
    day = new Array("SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY");
    return day[d.getDay()];
}


function rotate (accelerationx, accelerationy) {
	deg_time++;
	// all the numbers down below represent the sensitivity used for rotation triggers
	if (acc_y < 3 && acc_x > -7 && acc_x < 7) {
		//normal
		deg_new = 0;
		state = 'normal';
	} else if (acc_x < -6) {
		//left
		deg_new = 90;
		state = 'left';
	} else if (acc_x > 6) {
		//right
		deg_new = -90;
		state = 'right';
	} else if (acc_y > 4) {
		//upside
		deg_new = -180;
		state = 'upside';
	}

	if (deg != deg_new) {
		difference = deg_time - deg_set;

		if (difference >= 2 || deg_set == 0) {
			deg_set = deg_time;
			deg = deg_new;
		} else {
			//animation postponed
		}
	}

	//if decision wasnt made, default or previous deg value will be returned
	//console.log(acc_y + ' ' + acc_x + ' ' + state); // used for debugging
 	return deg;
}
