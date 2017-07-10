//sumar
function suma(...num){
	return num.reduce(function(acum,numero){
		acum += numero
		return acum
	},0)
}
//los arrays tiene un metodo reduce

function doble(...num){
	return num.map(function(numero){
		return numero * 2
	})
}

//arrow function

const arrow_dobles = (...num) => num.map(num => num * 2)

function pares(...numeros){
	numeros.filter(function (num) {
		return num%2== 0

	})
}

const arrow_pares = (...numeros) => numeros.filter(num => num%2 ==0)

suma(2,3,4,5)
doble(2,3,4)
arrow_dobles(3,4,5)
