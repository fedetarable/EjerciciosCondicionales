function ejer1(num1, num2) {
    if (num1 > num2) {
        console.log(num1, "es mayor")
    } else (
        console.log(num2, "es mayor")
    )
}
ejer1(3, 4)

function ejer2(num1, num2) {
    if (num1 === num2) {
        console.log("son iguales")
    } else {
        console.log("no son iguales")
    }
}
ejer2(4, 5)

function ejer3(num1, num2) {
    if (num1 !== num2) {
        if (num1 > num2) {
            console.log("num1 es mas grande")
        } else {
            console.log("num2 es mayor")

        }

    } else {
        console.log("son iguales")
    }
}


ejer3(4, 3)
function ejer4(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        console.log("num1 es menor")
    }
    if (num1 > num2 && num2 < num3) {
        console.log("num2 es menor")
    }
    if (num1 > num3 && num2 > num3) {
        console.log("num3 es menor")
    }

}

ejer4(3, 2, 1)

function ejer4(num1, num2, num3) {
    if (num1 === num2 && num1 === num3) {
        console.log("Los números son iguales");
    } else if (num1 <= num2 && num1 <= num3) {
        if (num1 === num2) {
            if (num1 === num3) {
                console.log("num1, num2 y num3 son iguales");
            } else {
                console.log("num1 y num2 son los menores");
            }
        } else if (num1 === num3) {
            console.log("num1 y num3 son los menores");
        } else {
            console.log("num1 es el menor");
        }
    } else if (num2 <= num1 && num2 <= num3) {
        if (num2 === num3) {
            console.log("num2 y num3 son los menores");
        } else {
            console.log("num2 es el menor");
        }
    } else if (num3 <= num1 && num3 <= num2) {
        console.log("num3 es el menor");
    } else {
        console.log("No se puede determinar el menor");
    }
}

ejer4(1, 13, 1);

let fede = {
    "nombre": "federico",
    "edad": 32,
    "altura": 1.82
}

let romi = {

    "nombre": "fRomina",
    "edad": 33,
    "altura": 1.22
}

function ejer5(obj1, obj2) {
    if (obj1.edad > obj2.edad) {
        console.log(obj1.nombre, "es mayor")
    } if (obj1.edad < obj2.edad) {
        console.log(obj2.nombre, "es mayor")
    }
    if (obj1.altura > obj2.altura) {
        console.log(obj1.nombre, "es mas alto")
    } if (obj1.altura < obj2.altura) {
        console.log(obj2.nombre, "es mas alto")
    }
}
ejer5(fede, romi)


// N°6 | Realizar un programa que permita ingresar por pantalla tu nombre, edad, altura, visión y permita determinar si estás capacitado para conducir. La persona deberá cumplir con una edad mínima de 18 años, medir más de 150 cm y tener una visión de 8 de 10 como mínimo.

let nombre = prompt("ingrese su nombre")
let edad = parseInt(prompt("ingrese su edad"))
let altura = parseInt(prompt("ingrese su altura"))
let vision = parseInt(prompt("ingrese su vision"))

function puedeConducir(nombre, edad, altura, vision) {
    if (edad >= 18 && altura > 150 && vision >= 8) {
        console.log(nombre, "puede conducir")
    } else {
        console.log(nombre, "no puede conducir")
    }
}
puedeConducir(nombre, edad, altura, vision)


// N°7 | Realizar un programa que permita el ingreso de los siguientes datos: Nombre, pase (vip o normal), si posee entrada (si o no, s o n, true o false). Las personas que posean tu mismo nombre tienen ingreso libre así como también los que posean un pase vip, mostrar un mensaje de bienvenida. Si posee entrada preguntar si desea utilizarla, en caso afirmativo mostrar mismo mensaje de bienvenida. Y por último de no tener el mismo nombre o poseer un pase vip o entrada, preguntar si desea comprar, caso afirmativo solicitar dinero disponible, si posee $1000 o mas, mostrar mensaje de venta de entrada y bienvenida, caso contrario mostrar mensaje de rechazo de venta, y en caso contrario a no querer comprar, mostrar mensaje de despedida.

let nombre = prompt("ingrese su nombre")
let pase = prompt("ingrese su pase (vip o normal)")
let entrada = prompt("ingrese si posee entrada (si o no, s o n, true o false)")

function ingreso(nombre, pase, entrada) {
    if (nombre === "federico" || pase === "vip") {
        console.log("bienvenido a la joda")
    } else if (entrada === "si") {
        let deseaUtilizar = prompt("desea utilizarla?")
        if (deseaUtilizar === "si") {
            console.log("bienvenido a la joda")
        } else {
            console.log("chau")
        }
    } else {
        let deseaComprar = prompt("desea comprar?")
        if (deseaComprar === "si") {
            let dinero = parseInt(prompt("cuanto dinero tiene?"))
            if (dinero >= 1000) {
                console.log("bienvenido a la joda")
            } else {
                console.log("chau")
            }
        } else {
            console.log("chau")
        }
    }
}

ingreso(nombre, pase, entrada)

// N°8 | Realizar un juego de adivinanza estableciendo un valor entre 1 y 10 en una variable llamada numeroIncognita y que permita en 3 intentos adivinar el número. El usuario deberá ingresar un numero del 1 al 10 por pantalla en 3 intentos el cual se deberá guardar en una variable llamada numeroIngresado, y en cada intento deberás mostrarle un mensaje al usuario diciendo: “el numero ingresado es mayor, vuelve a intentarlo” o “el numero ingresado es menor, vuelve a intentarlo” o en caso de adivinar, un mensaje que diga: “Ganaste, has adivinado el número.” No te preocupes si usas mucho código repetido, más adelante verás cómo realizar este juego de manera más eficiente.

let numeroIncognita = 6

function adivinanza(numeroIncognita) {
    let numeroIngresado = parseInt(prompt("ingrese un numero del 1 al 10"))
    if (numeroIngresado === numeroIncognita) {
        console.log("Ganaste, has adivinado el número.")
    } else if (numeroIngresado > numeroIncognita) {
        console.log("el numero ingresado es mayor, vuelve a intentarlo")
        numeroIngresado = parseInt(prompt("ingrese un numero del 1 al 10"))
        if (numeroIngresado === numeroIncognita) {
            console.log("Ganaste, has adivinado el número.")
        } else if (numeroIngresado > numeroIncognita) {
            console.log("el numero ingresado es mayor, vuelve a intentarlo")
            numeroIngresado = parseInt(prompt("ingrese un numero del 1 al 10"))
            if (numeroIngresado === numeroIncognita) {
                console.log("Ganaste, has adivinado el número.")
            } else {
                console.log("perdiste")
            }
        } else {
            console.log("el numero ingresado es menor, vuelve a intentarlo")
            numeroIngresado = parseInt(prompt("ingrese un numero del 1 al 10"))
            if (numeroIngresado === numeroIncognita) {
                console.log("Ganaste, has adivinado el número.")
            } else {
                console.log("perdiste")
            }
        }
    } else {
        console.log("el numero ingresado es menor, vuelve a intentarlo")
        numeroIngresado = parseInt(prompt("ingrese un numero del 1 al 10"))
        if (numeroIngresado === numeroIncognita) {
            console.log("Ganaste, has adivinado el número.")
        } else if (numeroIngresado > numeroIncognita) {
            console.log("el numero ingresado es mayor, vuelve a intentarlo")
            numeroIngresado = parseInt(prompt("ingrese un numero del 1 al 10"))
            if (numeroIngresado === numeroIncognita) {
                console.log("Ganaste, has adivinado el número.")
            } else {
                console.log("perdiste")
            }
        } else {
            console.log("el numero ingresado es menor, vuelve a intentarlo")
        }
    }

}

adivinanza(numeroIncognita)

// N°9 | Crear un programa que permita ingresar tu edad y decir si eres un infante (0 a 12 años), adolescente(13 a 18 años), un mayor joven (19 a 45 años) o un anciano (más de 45 años), y en caso de ingresar una edad mayor a 100 mostrar un mensaje preguntando si en realidad tiene esa edad.

let edad = parseInt(prompt("ingrese su edad"))

function etapaVida(edad) {
    if (edad <= 12) {
        console.log("infante")
    } else if (edad <= 18) {
        console.log("adolescente")
    } else if (edad <= 45) {
        console.log("mayor joven")
    } else if (edad <= 100) {
        console.log("anciano")
    } else {
        let edadReal = prompt("en realidad tiene esa edad?")
        if (edadReal === "si") {
            console.log("anciano")
        } else {
            console.log("nos vimo")
        }
    }
}

etapaVida(edad)

N°10 |
    // Crear un programa que permita el ingreso de “PIEDRA”, “PAPEL” o “TIJERAS” a 2 jugadores y muestre en pantalla cuál de los 2 ha ganado o si han empatado. En caso de algún ingreso incorrecto mostrar por pantalla que uno de los jugadores ha hecho trampa.

    let jugador1 = prompt("j1 ingrese piedra, papel o tijera")
let jugador2 = prompt("j2 ingrese piedra, papel o tijera")

function juego(jugador1, jugador2) {
    if (jugador1 === "piedra" || jugador1 === "papel" || jugador1 === "tijera" && jugador2 === "piedra" || jugador2 === "papel" || jugador2 === "tijera") {
        if (jugador1 === "piedra" && jugador2 === "piedra") {
            console.log("empate")
        } else if (jugador1 === "piedra" && jugador2 === "papel") {
            console.log("jugador 2 gana")
        } else if (jugador1 === "piedra" && jugador2 === "tijera") {
            console.log("jugador 1 gana")
        } else if (jugador1 === "papel" && jugador2 === "papel") {
            console.log("empate")
        } else if (jugador1 === "papel" && jugador2 === "tijera") {
            console.log("jugador 2 gana")
        } else if (jugador1 === "papel" && jugador2 === "piedra") {
            console.log("jugador 1 gana")
        } else if (jugador1 === "tijera" && jugador2 === "tijera") {
            console.log("empate")
        } else if (jugador1 === "tijera" && jugador2 === "piedra") {
            console.log("jugador 2 gana")
        } else if (jugador1 === "tijera" && jugador2 === "papel") {
            console.log("jugador 1 gana")
        }
    } else {
        console.log("uno de los jugadores hizo trampa")

    }
}

juego(jugador1, jugador2)

N°11 |
    //  Realizar un programa que permita el ingreso de un color y utilizando “switch” mostrar por pantalla los siguientes mensajes según las opciones:
    // Verde: El color de la naturaleza.
    // Blanco o Negro: Falta de color.
    // Azul: El color del agua.
    // Amarillo: El color del sol.
    // Rojo: El color del fuego.
    // Marrón: el color de la tierra.
    // y para cualquier otro valor: Excelente elección, no lo teníamos pensado.

    let ingresoColor = prompt("Ingrese Color")

function showMessageByColors(ingresoColor) {
    switch (ingresoColor) {
        case "blanco":
            console.log("Falta de color")
            break;
        case "negro":
            console.log("Falta de color")
        case "verde":
            console.log("El color de la naturaleza")
            break;
        case "azul":
            console.log("El color del agua")
            break
        case "amarillo":
            console.log("El color del sol")
            break
        case "rojo":
            console.log("El color del fuego.")
            break
        case "marron":
            console.log("el color de la tierra")
            break
        default:
            console.log("No lo tenia pensado")
            break;
    }
}

showMessageByColors(ingresoColor)



N°12
//  Realizar un programa que permita el ingreso de 2 valores numéricos y una operación. Según sea la operación ingresada (suma, resta, multiplicación, división) el programa deberá mostrar en pantalla un mensaje junto con el resultado. En caso de haber elegido división realizar la operación siempre que sea posible o mostrar un mensaje de ERROR si el divisor ingresado fue 0.

let numero1 = parseInt(prompt("ingrese un numero"))
let numero2 = parseInt(prompt("ingrese otro numero"))
let operacion = prompt("ingrese una operacion")

function operaciones(numero1, numero2, operacion) {
    switch (operacion) {
        case "suma":
            console.log(numero1 + numero2)
            break;
        case "resta":
            console.log(numero1 - numero2)
            break;
        case "multiplicacion":
            console.log(numero1 * numero2)
            break;
        case "division":
            if (numero2 === 0) {
                console.log("error")
            } else {
                console.log(numero1 / numero2)
            }
            break;
        default:
            console.log("no es una operacion")
            break;
    }
}

operaciones(numero1, numero2, operacion)


N°13
// Crear un programa que permita ingresar todos los datos de tu documento nacional de identidad, mostrar por pantalla un mensaje que imprima todos los datos ingresados y pregunte si están correctos los mismos. En caso afirmativo, crear un objeto llamado dni con todos los datos ingresados y mostrarlos por consola con console.table() más un mensaje de registro exitoso, en caso de que la persona rechace confirmar los datos, mostrar un mensaje que diga: vuelva a intentarlo en 1 mes.

let nombre = prompt("ingrese su nombre")
let apellido = prompt("ingrese su apellido")
let dni = parseInt(prompt("ingrese su dni"))
let direccion = prompt("ingrese su direccion")

function datosDni(nombre, apellido, dni, direccion) {
    console.log(nombre, apellido, dni, direccion)
    let confirmacion = prompt("estan correctos los datos?")
    if (confirmacion === "si") {
        let dniObjeto = {
            nombre: nombre,
            apellido: apellido,
            dni: dni,
            direccion: direccion
        }
        console.table(dniObjeto)
    } else {
        console.log("vuelva a intentarlo en 1 mes")
    }
}

datosDni(nombre, apellido, dni, direccion)

