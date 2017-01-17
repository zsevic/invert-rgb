//returns rbg or rgba format
function getStyle(element,cssRule){
	var value="";
	if(document.defaultView && document.defaultView.getComputedStyle){
		value=document.defaultView.getComputedStyle(element,"").getPropertyValue(cssRule);
	}
	else if(element.currentStyle){
		cssRule=cssRule.replace(/\-(\w)/g,function(res,val){
			return val.toUpperCase();
		});
		value=element.currentStyle[cssRule];
	}
	return value;
}

function invertRgb(element,cssRule){
	var color=getStyle(element,cssRule);
	var temp=color.split("(");
	var colors=temp[1].substring(0,temp[1].length-1).split(",");
	for(var i=0;i<3;i++){
		colors[i]=255-parseInt(colors[i]);
	}
	colors=colors.join(",");
	element.style[cssRule]=temp[0]+"("+colors+")";
	console.log(element.style[cssRule]);
}
