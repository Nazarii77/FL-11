const MAX_SIDE_LENGTH = 15;
const ZOOM = 12;

const calcBtn = document.getElementById('calc-btn');
calcBtn.addEventListener('click', calculate);

const checkBox = document.getElementById('instant-calc-checkbox');
checkBox.addEventListener('input', checkBoxClick);

addInputCorrection(MAX_SIDE_LENGTH);

function checkBoxClick() {
	let inputsArr = document.getElementsByClassName('user-input');

	if (checkBox.checked) {
		calcBtn.setAttribute('disabled','');

		for (let i = 0; i < inputsArr.length; i++) {
			inputsArr[i].addEventListener('input', calculate);
		}
	} else {
		calcBtn.removeAttribute('disabled');

		for (let i = 0; i < inputsArr.length; i++) {
			inputsArr[i].removeEventListener('input', calculate);
		}
	}
}

function Quadrangle(sideA, sideB = sideA, angleBtwSides = 90) {
	const a = parseFloat(sideA);
	const b = parseFloat(sideB);
	const angle = parseFloat(angleBtwSides);

	function calcArea() {
		return a * b * Math.sin(angle * Math.PI / 180);
	}

	function calcHeight() {
		return a * Math.sin(angle * Math.PI / 180);
	}

	function calcDiagonal() {
		return Math.sqrt(a * a + b * b - 2 * a * b * Math.cos(angle * Math.PI / 180));
	}

	function draw(imgWrapper) {
		let shapeImg = document.createElement('div');
		shapeImg.setAttribute('class', 'shape-img');
		shapeImg.style.width = ZOOM * b + 'px';
		shapeImg.style.height = ZOOM * calcHeight() + 'px';
		shapeImg.style.transform = `skew(${angle - 90}deg, 0deg)`;

		imgWrapper.innerHTML = '';
		imgWrapper.appendChild(shapeImg);
	}

	return {
		calcArea,
		calcHeight,
		calcDiagonal,
		draw
	}
}

function Ellipse(horizontalRadius, verticalRadius = horizontalRadius) {
	const hR = parseFloat(horizontalRadius);
	const vR = parseFloat(verticalRadius);

	function calcArea() {
		return Math.PI * hR * vR;
	}

	function calcLength() {
		return Math.PI * (hR + vR);
	}

	function draw(imgWrapper) {
		let shapeImg = document.createElement('div');
		shapeImg.setAttribute('class', 'shape-img');
		shapeImg.style.width =ZOOM * hR * 2 + 'px';
		shapeImg.style.height = ZOOM * vR * 2 + 'px';
		shapeImg.style.borderRadius = '50%';

		imgWrapper.innerHTML = '';
		imgWrapper.appendChild(shapeImg);
	}

		return {
		calcArea,
		calcLength,
		draw
	}
}

function Triangle(aSide, bSide = aSide, angleBtwSides = 90) {
	const angleC = parseFloat(angleBtwSides);
	const a = parseFloat(aSide);
	const b = parseFloat(bSide)
	const c = Math.sqrt(a * a + b * b - 2 * a * b * Math.cos(angleC * Math.PI / 180));
	const angleB = Math.asin(b * Math.sin(angleC * Math.PI / 180) / c) * 180 / Math.PI;
	const angleA = Math.asin(a * Math.sin(angleC * Math.PI / 180) / c) * 180 / Math.PI;

	function calcHeight() {
		return 2 * Math.sqrt(p() * ( p() - a ) * ( p() - b ) * ( p() - c) ) / c;

		function p() {
			return (a + b + c) / 2;
		}
	} 

	function calcArea() {
		return calcHeight() * c / 2; 
	}

	function draw(imgWrapper) {
		let shapeImg = document.createElement('div');
		shapeImg.setAttribute('class', 'shape-img triangle');
		shapeImg.style.width = ZOOM * b + 'px';
		shapeImg.style.height = ZOOM * a + 'px';

		let line = document.createElement('hr');
		line.setAttribute('class', 'line');
		line.style.width = ZOOM * c * 2 + 'px';
		line.style.transform = `rotate(${angleA + (a - b) * 0.061}deg)`;

		shapeImg.appendChild(line);

		imgWrapper.innerHTML = '';
		imgWrapper.appendChild(shapeImg);
	}

	return {
		getA: () => a,
		getB: () => b,
		getC: () => c,
		getAngleA: () => angleA,
		getAngleB: () => angleB,
		getAngleC: () => angleC,
		calcHeight,
		calcArea,
		draw
	}
}

function calculate() {
	// Parallelogram
	let parallelogramInputs = document.getElementById('parallelogram').getElementsByClassName('user-input');
	let parallelogramOutputs = document.getElementById('parallelogram').getElementsByClassName('output');

	if ( isAnyEmptyInputs(parallelogramInputs) ) {
		for (let i = 0; i < parallelogramOutputs.length; i++) {
			parallelogramOutputs[i].textContent = '-';
		}
	} else {
		let parallelogram = new Quadrangle(
			parallelogramInputs[0].value,
			parallelogramInputs[1].value,
			parallelogramInputs[2].value
		);

		parallelogramOutputs[0].textContent = Math.round( parallelogram.calcArea() * 1000 ) / 1000;
		parallelogramOutputs[1].textContent = Math.round( parallelogram.calcHeight() * 1000 ) / 1000;
		parallelogram.draw(document.getElementById('parallelogram').firstElementChild);
	}

	// Circle
	let circleInputs = document.getElementById('circle').getElementsByClassName('user-input');
	let circleOutputs = document.getElementById('circle').getElementsByClassName('output');

	if ( isAnyEmptyInputs(circleInputs) ) {
		for (let i = 0; i < circleOutputs.length; i++) {
			circleOutputs[i].textContent = '-';
		}
	} else {
		let circle = new Ellipse(circleInputs[0].value);

		circleOutputs[0].textContent = Math.round( circle.calcArea() * 1000 ) / 1000;
		circleOutputs[1].textContent = Math.round( circle.calcLength() * 1000 ) / 1000;
		circle.draw(document.getElementById('circle').firstElementChild);
	}
	
	//Ellipse
	let ellipseInputs = document.getElementById('ellipse').getElementsByClassName('user-input');
	let ellipseOutputs = document.getElementById('ellipse').getElementsByClassName('output');

	if ( isAnyEmptyInputs(ellipseInputs) ) {
		for (let i = 0; i < ellipseOutputs.length; i++) {
			ellipseOutputs[i].textContent = '-';
		}
	} else {
		let ellipse = new Ellipse(ellipseInputs[0].value, ellipseInputs[1].value);

		ellipseOutputs[0].textContent = Math.round( ellipse.calcArea() * 1000 ) / 1000;
		ellipseOutputs[1].textContent = Math.round( ellipse.calcLength() * 1000 ) / 1000;
		ellipse.draw(document.getElementById('ellipse').firstElementChild);
	}

	//Square
	let squareInputs = document.getElementById('square').getElementsByClassName('user-input');
	let squareOutputs = document.getElementById('square').getElementsByClassName('output');

	if ( isAnyEmptyInputs(squareInputs) ) {
		for (let i = 0; i < squareOutputs.length; i++) {
			squareOutputs[i].textContent = '-';
		}
	} else {
		let square = new Quadrangle(squareInputs[0].value);

		squareOutputs[0].textContent = Math.round( square.calcDiagonal() * 1000 ) / 1000;
		squareOutputs[1].textContent = Math.round( square.calcArea() * 1000 ) / 1000;
		square.draw(document.getElementById('square').firstElementChild);
	}

	//Rectangle
	let rectangleInputs = document.getElementById('rectangle').getElementsByClassName('user-input');
	let rectangleOutputs = document.getElementById('rectangle').getElementsByClassName('output');

	if ( isAnyEmptyInputs(rectangleInputs) ) {
		for (let i = 0; i < rectangleOutputs.length; i++) {
			rectangleOutputs[i].textContent = '-';
		}
	} else {
		let rectangle = new Quadrangle(rectangleInputs[0].value, rectangleInputs[1].value);

		rectangleOutputs[0].textContent = Math.round( rectangle.calcDiagonal() * 1000 ) / 1000;
		rectangleOutputs[1].textContent = Math.round( rectangle.calcArea() * 1000 ) / 1000;
		rectangle.draw(document.getElementById('rectangle').firstElementChild);
	}

	//Triangle 
	let triangleInputs = document.getElementById('triangle').getElementsByClassName('user-input');
	let triangleOutputs = document.getElementById('triangle').getElementsByClassName('output');

	if ( isAnyEmptyInputs(triangleInputs) ) {
		for (let i = 0; i < triangleOutputs.length; i++) {
			triangleOutputs[i].textContent = '-';
		}
	} else {
		let triangle = new Triangle(triangleInputs[0].value, triangleInputs[1].value);

		triangleOutputs[0].textContent = Math.round( triangle.getA() * 1000 ) / 1000;
		triangleOutputs[1].textContent = Math.round( triangle.getB() * 1000 ) / 1000;
		triangleOutputs[2].textContent = Math.round( triangle.getC() * 1000 ) / 1000;
		triangleOutputs[3].textContent = Math.round( triangle.getAngleA() * 1000 ) / 1000 + ' deg';
		triangleOutputs[4].textContent = Math.round( triangle.getAngleB() * 1000 ) / 1000 + ' deg';
		triangleOutputs[5].textContent = Math.round( triangle.getAngleC() * 1000 ) / 1000 + ' deg';
		triangleOutputs[6].textContent = Math.round( triangle.calcArea() * 1000 ) / 1000;
		triangleOutputs[7].textContent = Math.round( triangle.calcHeight() * 1000 ) / 1000;
		triangle.draw(document.getElementById('triangle').firstElementChild);
	}

	function isAnyEmptyInputs(inputsArr) {
		for (let i = 0; i < inputsArr.length; i++) {
			if (inputsArr[i].value === '') {
				return true;
			}
		}

		return false;
	}
}

function addInputCorrection(MAX_SIDE_LENGTH) {
	let lengthInputs = document.getElementsByClassName('length-input');
	for (let i = 0; i < lengthInputs.length; i++) {
		lengthInputs[i].addEventListener('input', lengthInputCorrection);
	}

	let angleInputs = document.getElementsByClassName('angle-input');
	for (let i = 0; i < angleInputs.length; i++) {
		angleInputs[i].addEventListener('input', angleInputCorrection);
	}

	function lengthInputCorrection(event) {
		const value = parseFloat(event.target.value);

		if (value < 1) {
			event.target.value = 1;
		} else if (value > MAX_SIDE_LENGTH) {
			event.target.value = MAX_SIDE_LENGTH;
		}
	}

	function angleInputCorrection(event) {
		const value = parseFloat(event.target.value);

		if (value < 1) {
			event.target.value = 1;
		} else if (value > 179) {
			event.target.value = 179;
		}
	}
}