const nacimiento = new Date(1991,2,25)
const hoy = new Date() // sin parametros js entiende que es la fecha de hoy
const tiempo = hoy - nacimiento 
// el tiempo se devolvera en milisegundos
const tiempoSegundos = tiempo/1000  //cada segundo vale 1000 milisegundos
const tiempoMin =  tiempoMin / 60
const tiempoHoras = tiempoMin / 60

const proximoCumple = new Date(hoy.getFullYear(),nacimiento.getMonth(), nacimiento.getDate())
//para que se muestre en español
const diaSemana = [
	"Domingo",
	"Lunes",
	"Martes",
	"Miercoles",
	"Jueves",
	"Viernes",
	"Sabado"	
]

diaSemana[proximoCumple.getDay()]