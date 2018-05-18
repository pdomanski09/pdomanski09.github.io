'use strict'

/* ZMIENNE */

var jeden = document.getElementById("jeden");
var dwa = document.getElementById("dwa");
var trzy = document.getElementById("trzy");
var cztery = document.getElementById("cztery");
var piec = document.getElementById("piec");
var szesc = document.getElementById("szesc");
var siedem = document.getElementById("siedem");
var osiem = document.getElementById("osiem");
var dziewiec = document.getElementById("dziewiec")
var zero = document.getElementById("zero");

var minus = document.getElementById("minus");
var plus = document.getElementById("plus");
var iloczyn = document.getElementById("iloczyn");
var iloraz = document.getElementById("iloraz");

var kropka = document.getElementById("kropka")

var del = document.getElementById("delete");
var wyswietlacz = document.getElementById("wyswietlacz");

var rownaSie = document.getElementById("rownasie");

/* PROGRAMOWANIE PRZYCISKÓW */

jeden.addEventListener('click', function(e){
	e.preventDefault();
	
	var wartoscJeden = jeden.value;
	wyswietlacz.value += wartoscJeden;
});

dwa.addEventListener('click', function(e){
	e.preventDefault();
	
	var wartoscDwa = dwa.value;
	wyswietlacz.value += wartoscDwa;
});
trzy.addEventListener('click', function(e){
	e.preventDefault();
	
	var wartoscTrzy = trzy.value;
	wyswietlacz.value += wartoscTrzy;
});

cztery.addEventListener('click', function(e){
	e.preventDefault();
	
	var wartoscCztery = cztery.value;
	wyswietlacz.value += wartoscCztery;
});
piec.addEventListener('click', function(e){
	e.preventDefault();
	
	var wartoscPiec = piec.value;
	wyswietlacz.value += wartoscPiec;
});

szesc.addEventListener('click', function(e){
	e.preventDefault();
	
	var wartoscSzesc = szesc.value;
	wyswietlacz.value += wartoscSzesc;
});
siedem.addEventListener('click', function(e){
	e.preventDefault();
	
	var wartoscSiedem = siedem.value;
	wyswietlacz.value += wartoscSiedem;
});

osiem.addEventListener('click', function(e){
	e.preventDefault();
	
	var wartoscOsiem = osiem.value;
	wyswietlacz.value += wartoscOsiem;
});
dziewiec.addEventListener('click', function(e){
	e.preventDefault();
	
	var wartoscDziewiec = dziewiec.value;
	wyswietlacz.value += wartoscDziewiec;
});
zero.addEventListener('click', function(e){
	e.preventDefault();
	
	var wartoscZero = zero.value;
	wyswietlacz.value += wartoscZero;
})

del.addEventListener('click', function(e){
	e.preventDefault();

	var wartoscDel = "";
	wyswietlacz.value = wartoscDel;
	
	console.log(wartoscDel);
});


minus.addEventListener('click', function(e){
	e.preventDefault();
	
	var wartoscMinus = minus.value;
	wyswietlacz.value += wartoscMinus;
});

plus.addEventListener('click', function(e){
	e.preventDefault();
	
	var wartoscPlus = plus.value;
	wyswietlacz.value += wartoscPlus;
});

iloczyn.addEventListener('click', function(e){
	e.preventDefault();
	
	var wartoscIloczyn = iloczyn.value;
	wyswietlacz.value += wartoscIloczyn;
});

iloraz.addEventListener('click', function(e){
	e.preventDefault();
	
	var wartoscIloraz = iloraz.value;
	wyswietlacz.value += wartoscIloraz;
});
kropka.addEventListener('click', function(e){
	e.preventDefault();
	
	var wartoscKropki = kropka.value;
	wyswietlacz.value += wartoscKropki;
})

rownaSie.addEventListener('click', function(e){
	e.preventDefault();
	
	var wynik = eval(wyswietlacz.value);
	wyswietlacz.value = wynik;
});









//$("#delete").click(function(e){
//	e.preventDefault;
//	
//	var wartoscDel = $("#delete").val();
//	$("#wyswietlacz").val(wartoscDel);
//	console.log(wartoscDel);
//})
