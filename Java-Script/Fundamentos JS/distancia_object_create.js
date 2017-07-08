//Punto es un objeto
const Punto = {
	init: function(x,y){
		this.x = x;
		this.y = y
	},
	moverEnX: function moverEnX(x){
		this.x += x
	},
	moverEnY: function moverEnY(y){
		this.y += y
	},
	distancia: function distancia(p){
		const x = this.x - p.x
		const y = this.y - p.y
		return Math.sqrt(x*x + y+y)
	}
}
//object.create se le pasa de que manera se le quiere inicializar
const p1 = Object.create(Punto)
p1.init(0,4) //es como llamara al constructor del obj
const p2 = Object.create(Punto)
p2.init(3,0) //es como llamara al constructor del obj

console.log(p1.distancia(p2))