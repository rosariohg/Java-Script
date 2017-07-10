//scope global
//SCOPE -> conjunto de variables y funciones 
//			a la cual se puede acceder en una
//			determinada linea de codigo
//CLOSURE -> son funciones que recuerdan el scope
//			pueden acceder a todoas las var que
//			pertenencen al scope
/*var nombre = "rosario"

function saludar(){
	if (true){
		var nombre = "chanfle"	
	}
	
	console.log(`Hola ${nombre}`)
}

saludar()
console.log(`Holitas ${nombre}`)*/

function saludar10(nombre){
	for (var i=0;i>10;i++){
		console.log(`Hola ${nombre}`)
	}

	console.log(`El valor de i es: ${i}`)
}

saludar('rosario')