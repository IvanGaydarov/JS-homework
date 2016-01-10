/**
 * Напишете JavaScript функция, която показва случайна снимка при
всяко едно отваряне на страницата.
 */
var images = [],
 index ;

	images[0]= "<img src='images/0zFYQHvn_400x400.png'>"
	images[1]= "<img src='images/1BGzuWqk_400x400.png'>"
	images[2]= "<img src='images/21d589c139525906723ab0255782fc73_400x400.png'>"	
	images[3]= "<img src='images/993_apple-shares.png'>"
	images[4]= "<img src='images/5666e5e909df32657f00004b-400x400-resize-transparent.png'>"
	images[5]= "<img src='images/assistiveware_logo_square-400x400.png'>"
	images[6]= "<img src='images/B_beBfTj_400x400.png'>"
	images[7]= "<img src='images/download.png'>"	
	images[8]= "<img src='images/images.png'>"
	images[9]= "<img src='images/MgfznHIO_400x400.png'>"
	images[10]= "<img src='images/ngc2237_400.png'>"
	images[11]= "<img src='images/npniVCmx_400x400.png'>"
	images[12]= "<img src='images/wifi-zone-logo-vector-400x400.png'>"
	images[13]= "<img src='images/8bc979e73f2e7e9d0f283c4c7262ddd3.png'>"
		
	
	index = Math.floor(Math.random() * images.length);
	document.write(images[index]);
	document.write("<br>")
	/*document.write(index);*/