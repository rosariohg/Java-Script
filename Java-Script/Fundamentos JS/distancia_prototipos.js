//js no existen clases pero si los prototipos
//Prototipo Punto
function Punto(x,y){
	this.x = x 
	this.y = y

}

Punto.prototype.moverEnX = function moverEnX(x){
	this.x += x
}
//a punto se le asigna un metodo moveerEn
Punto.prototype.moverEnY = function moverEnY(y){
	this.y += y
}
Punto.prototype.distancia = function distancia(p){
	const x = this.x - p.x
	const y = this.y - p.y
	return Math.sqrt(x*x + y*y)
}

const p1 = new Punto(0,4)  //aqui js crea un nuevo metodo
						   // ejecuta el codigo y
						   //retorna un objeto
const p2 = new Punto(3,0)

console.log(p1.distancia(p2))

//NEW funcion
//js: crea un objeto
//	 llama a esa funcion
//	 asigna al objeto this el objeto creado
//	 se retorna el objeto this
