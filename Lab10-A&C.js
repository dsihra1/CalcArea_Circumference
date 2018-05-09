//Devon Sihra
function btnCalculate_onclick()
{
	var DiameterTextbox = document.getElementById("txtDiameter");
	var Circumferencetextbox = document.getElementById("txtCircumference");
	var AreaTextbox = document.getElementById("txtArea");
	var diameter = DiameterTextbox.value;
	
	
	
	var circumference = Math.PI * diameter;     //3.14 times diameter of the circumference
	circumference = circumference.toFixed(2);
	Circumferencetextbox.value = circumference;  // output value
	
	
	
	var Area = (Math.PI * Math.pow(diameter,2))/4 //area formula
	Area = Area.toFixed(2);
	AreaTextbox.value = Area;   //output values
}