//p5.GPA.js is a general use library with verious functions that will help with 
//converstions and usefull short cuts

//convert celsius to fahrenheit
function ctf(temp) {
	var out = temp * 1.800 + 32;
	return out;
}

//convert fahrenheit to celsius
function ftc(temp) {
	var out = (temp - 32) / 1.800;
	return out;
}

//convert kelvin to celsius
function ktc(temp) {
	var out = (temp - 273.15);
	return out;
}

//convert kelvin to fehrenheit
function ktf(temp) {
	var out = (temp * (9 / 5)) - 459.67;
	return out;
}

//convert km to miles
function kmtm(km) {
	var out = km * 0.62137;
	return out;
}

//convert miles to km
function mtkm(mile) {
	var out = (mile / 0.62137);
	return out;
}

//simple one color horizontal bargraph
function vbgraph(x, y, h,margin, array) {
	//	print(x); //postion
	//	print(y); //postion
	//	print(h); // height
	//	print(margin); //margin
	//	print(array); //input values as an array

	//create an array with numbers. put that in as last value in the function call
	var i;
	for (i = 0; i < array.length; i++) {
		
		fill(0,40)
		rect(i*margin+x+2,y+5,h,array[i])
		fill(250,39,39);
			rect(i*margin+x,y,h,array[i])
	
		
	}
	//creates text of value on the corisponding bar
	for (i = 0; i < array.length; i++) {
		fill(0);
		w = str(array[i]);
	
		text(w,i*margin+x+(h/2)-5,y+array[i]);
	
	}
}

//simple one color horizontal bargraph
function hbgraph(x, y, h,margin, array) {
	//	print(x); //postion
	//	print(y); //postion
	//	print(h); // height
	//	print(margin); //margin
	//	print(array); //input values as an array

	//create an array with numbers. put that in as last value in the function call
	var i;
	for (i = 0; i < array.length; i++) {
		
		fill(0,40)
		rect(x+5,i*margin+y+4,array[i],h);
		fill(250,39,39);
	
		rect(x,i*margin+y,array[i],h);
	
		
	}
	//creates text of value on the corisponding bar
	for (i = 0; i < array.length; i++) {
		fill(0);
		w = str(array[i]);
		text(w,x,i*margin+y+h-2)
	
	}
}

