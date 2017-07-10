 function saludarFamilia(apellido){
 	return function saludarPersona(nombre){
 		console.log(`Hola ${nombre} ${apellido}`)
 	}
 }

const saludarHu = saludarFamilia("huanca");
const saludarGo = saludarFamilia("gonza")

saludarHu("rosario")
saludarGo("pita")

function makePrefixer(prefijo){
	return function palabraPref(palabra){
		console.log(prefijo + palabra)
	}
}

const hacerPrefijo = prefijo => palabra => prefijo + palabra  
