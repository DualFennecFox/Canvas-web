const blob = document.getElementById("blob");
const buttons = document.getElementsByTagName("button")
const articles = document.getElementsByTagName("article")
const clok = document.getElementById("clok")
const subTitle = document.getElementsByClassName("subtitle-card")
const smallStar = document.getElementById("small-stars")
const mediumStar = document.getElementById("medium-stars")
const bigStar = document.getElementById("big-stars")
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let target = ""

function drawText(text, x, y, color, size) {
	ctx.font = `${size} "Poppins"`;
	ctx.fillStyle = color;
	ctx.fillText(text, x, y);
}

function drawArc(x, y, radius, start, end, clockwise)
{
	ctx.beginPath();
	ctx.arc(x, y, radius, start, end, clockwise);
}

function drawCircle(x, y, radius, start, end, clockwise, color, type, thickness) {
	switch (type) {
		case 'fill':
			ctx.fillStyle = color;
			drawArc(x, y, radius, start, end, clockwise)
			ctx.fill();
			break;
		case 'stroke':
			ctx.strokeStyle = color;
			ctx.lineWidth = thickness;
			drawArc(x, y, radius, start, end, clockwise)
			ctx.stroke();
			break
	}
}
const canvas = document.getElementById('Clock');
const ctx = canvas.getContext('2d');

const threePIByTwo = (3 * Math.PI) / 2;

console.log(threePIByTwo);

let amOrPm = 'AM';

const canvasBg = '#1C1C28';

const hourActiveColor = '#39D98A',
	minuteActiveColor = '#3E7BFA',
	secondActiveColor = '#FDAC42';

const hourInactiveColor = '#3C4043',
	minuteInactiveColor = '#2E3134',
	secondInactiveColor = '#282A2D';

const timerBg = '#282A2D';

function init()
{
	canvas.width = document.documentElement.clientWidth - 35;
	canvas.height = document.documentElement.clientHeight - 45;

	window.requestAnimationFrame(draw);	
}

function draw()
{
	const centerX = canvas.width / 2,
		centerY = canvas.height / 2;

	const date = new Date();

	let hr = date.getHours();
	let min = date.getMinutes();
	let sec = date.getSeconds();
	let ms = date.getMilliseconds();

	if(hr > 12)
	{
		amOrPm = 'PM';
		hr -= 12;
	}

	let radH = 0.000008333 * ( ( hr * 60 * 60 * 1000 ) + ( min * 60 * 1000 ) + ( sec * 1000 ) + ms );
	let radM = 0.0001 * ( ( min * 60 * 1000 ) + ( sec * 1000 ) + ms );
	let radS = 0.006 * ( ( sec * 1000 ) + ms );



	drawCircle(centerX, centerY, 110, 0, 360 , false, hourInactiveColor, 'stroke', 90);
	drawCircle(centerX, centerY, 110, threePIByTwo, rad(radH) + threePIByTwo, false, hourActiveColor, 'stroke', 90);

	drawCircle(centerX, centerY, 180, 0, 360, false, minuteInactiveColor, 'stroke', 50);
	drawCircle(centerX, centerY, 180, threePIByTwo, rad(radM) + threePIByTwo, false, minuteActiveColor, 'stroke', 50);

	drawCircle(centerX, centerY, 220, 0, 360, false, secondInactiveColor, 'stroke', 30);
	drawCircle(centerX, centerY, 220, threePIByTwo, rad(radS) + threePIByTwo, false, secondActiveColor, 'stroke', 30);

	drawCircle(centerX, centerY, 90, 0, 360, false, timerBg, 'fill', '50');
	drawText(`${hr.toString().padStart(2, "0")}:${min.toString().padStart(2, "0")} ${amOrPm}`, canvas.width / 2 - 60, canvas.height / 2 + 15, '#ffffff', '28px');

	window.requestAnimationFrame(draw);
}

init();

function rad(deg){
	return  (Math.PI / 180) * deg;
}

const multipleBoxShadow = (num) =>{
    let stars = `${Math.floor(Math.random() * (2000 - 0 + 1)) + 0}px ${Math.floor(Math.random() * (2000 - 0 + 1)) + 0}px #FFF`
  for (i = 2; i < num; i++) {
    stars += `, ${Math.floor(Math.random() * (2000 - 0 + 1)) + 0}px ${Math.floor(Math.random() * (2000 - 0 + 1)) + 0}px #FFF`
  }

  return stars
}

function getRuleWithSelector(selector) {
    var numSheets = document.styleSheets.length,
      numRules,
      sheetIndex,
      ruleIndex;

    for (sheetIndex = 0; sheetIndex < numSheets; sheetIndex += 1) {
      numRules = document.styleSheets[sheetIndex].cssRules.length;
      for (ruleIndex = 0; ruleIndex < numRules; ruleIndex += 1) {
        if (document.styleSheets[sheetIndex].cssRules[ruleIndex].selectorText === selector) {
          return document.styleSheets[sheetIndex].cssRules[ruleIndex];
        }
      }
    }
  }
  

window.onload = function() {

    init()

    var canva = document.getElementById('Canvas');
            var width = canva.width;
                var height = canva.height;
            var context = canva.getContext('2d');

            context.translate(width/2, height/2);
            context.scale(width/2.1, height/2.1);
            context.lineWidth = 0.02;
            context.strokeStyle = "white"

            context.beginPath();
            context.moveTo(0,0);
            for(var x = 0; x < 6*Math.PI; x += 0.05)
            context.lineTo(Math.sin(3*x),Math.sin(4*x));
            context.stroke();


            var circle=document.getElementById("Circle");
            var ctx=circle.getContext("2d");
            var cw=circle.width;
            var ch=circle.height;
            
            var cx=cw/2;
            var cy=ch/2;
            var radius=135;
            var minutes=0;
            var minutesIncrement=0.334;
            
            animate();
            
            function animate(time){
                ctx.clearRect(0,0,cw,ch);
                ctx.beginPath();
                ctx.arc(cx,cy,radius,0,Math.PI*2);
                ctx.strokeStyle='indianred';
                ctx.lineWidth=10;
                ctx.lineJoin='round';
                ctx.stroke();
                fillWedge(cx,cy,radius,minutesToAngle(0),minutesToAngle(minutes),'gold');
                ctx.stroke();
                minutes+=minutesIncrement;
                if(minutes>60){minutes=0;}
                requestAnimationFrame(animate);
            }
            
                var cx=circle.width/2;
                var cy=circle.height/2;
                var radius=Math.min(circle.width,circle.height)*.90/2;
                var startMinutes=0; 
                var endMinutes=5;   
                var startAngle=minutesToAngle(0); 
                var endAngle=minutesToAngle(5);  
            

                fillWedge(cx,cy,radius,startAngle,endAngle,'gold');
            
                function fillWedge(cx,cy,radius,startAngle,endAngle,fillcolor){
                    ctx.beginPath();
                    ctx.moveTo(cx,cy);
                    ctx.arc(cx,cy,radius,startAngle,endAngle);
                    ctx.closePath();
                    ctx.fillStyle=fillcolor;
                    ctx.fill();
                }
            
                function minutesToAngle(minutes){
                    var twelveOClock=-Math.PI/2;
                    var fullCircle=Math.PI*2;
                    return(twelveOClock+fullCircle*(minutes/60));
                }

    for(i = 0; i < buttons.length; i++) {
        
        for(let i = 0; i < buttons.length; i++) {
        
            buttons[i].onclick = event => {
    

                buttons[i].children[0].children[0].classList.add('transition');
                if (buttons[i].children[0].children[0].classList.contains("transition")) {
                    event.target.style.cursor = "auto"
                    articles[i].children[1].classList.add('transition');
                    clok.style.opacity = "0%"
                }
            }
            }
    }
            
            let smallStarAfter = getRuleWithSelector('#small-stars::after');
            let mediumStarAfter = getRuleWithSelector('#medium-stars::after');
            let bigStarAfter = getRuleWithSelector('#big-stars::after');

            smallStarAfter.style.boxShadow = multipleBoxShadow(700)
            mediumStarAfter.style.boxShadow = multipleBoxShadow(200)
            bigStarAfter.style.boxShadow = multipleBoxShadow(100)

            smallStar.style.boxShadow = multipleBoxShadow(700)
            mediumStar.style.boxShadow = multipleBoxShadow(200)
            bigStar.style.boxShadow = multipleBoxShadow(100)
            
            
}

window.onmousemove = event => {
    const { clientX, clientY } = event;

    blob.animate({
        left: `${clientX}px`,
        top:`${clientY + window.scrollY}px`
    }, { duration: 3000, fill: "forwards" });
	}

document.getElementById("titulo").onpointerover = event => {
    let iterations = 0;
    const interval = setInterval(() => {
    event.target.innerText = event.target.innerText.split("")
    .map((letter, index) => {
        if(index < iterations) {
            return event.target.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 26)]
        })
        .join("");

    if(iterations > event.target.dataset.value.length) { clearInterval(interval) }

    iterations += 1 / 3;
    }, 40)
}