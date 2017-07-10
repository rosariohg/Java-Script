/*class Persona{
	constructor(nombre,amigos = []){
		this.nombre = nombre
		this.amigos = amigos
	}
	listarAmigos(){
		const _this = this
		this.amigos.forEach(function(amigo){
			console.log(`Hola mi nombre es ${_this.nombre} y spy amigo de ${amigo}`)
		})
	}
}

const charo = new Persona('rosario',['carmen','lupe'])*/

/*class Persona{
	constructor(nombre,amigos = []){
		this.nombre = nombre
		this.amigos = amigos
	}
	listarAmigos(){
		this.amigos.forEach(function(amigo){
			console.log(`Hola mi nombre es ${this.nombre} y spy amigo de ${amigo}`)
		}.bind(this))
	}
}

const charo = new Persona('rosario',['carmen','lupe'])*/

//ARROW function
class Persona{
	constructor(nombre,amigos = []){
		this.nombre = nombre
		this.amigos = amigos
	}
	listarAmigos(){
		this.amigos.forEach((amigo) => {
			console.log(`Hola mi nombre es ${this.nombre} y spy amigo de ${amigo}`)
		}
	}
}

const charo = new Persona('rosario',['carmen','lupe'])