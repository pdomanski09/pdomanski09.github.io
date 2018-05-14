'use strict';

var input =
	document.querySelector("input");
	input.addEventListener("change", updateValue);
	input.addEventListener("mousemove",	updateValue);

function updateValue() {
	//console.log(this.value);
	var percent = document.querySelector("span");
	percent.textContent = this.value;
	//console.log(percent.textContent)
	document.documentElement.style.setProperty("--light", this.value / 100)
	document.documentElement.style.setProperty("--glow", this.value / 4 + "px")
}
