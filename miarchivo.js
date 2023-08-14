            alert ("bienvenido a la casa rapi prestamo")
            

            //Funcion para ingresar cantidad a prestar

            
            function cantidad1(){
                let cantidad1 = prompt("ingresar cantidad a prestar");
                alert("La cantidad es = " + cantidad1)
                return cantidad1
            }
        

            //Funcion para ingresar cuotas a pagar
            function cuotas1(){
                let cuotas1 = prompt("En cuantas cuotas quiere pagar, por favor  elija de 1 a 60");
                alert("Desea el prestamo en " + cuotas1 + " cuotas?")
                return cuotas1
            }

            //Capturar resultado de funciones
            let cantidad = cantidad1()
            let cuotas = cuotas1()
            let tasaDeInteres= 75;

            //Mostrar resultado de funciones
            console.log("La cantidad es: " + cantidad)
            console.log("Las cuotas son:" + cuotas)

            //Funcion para dividir cantidad en cuotas
            function dividir(dato1, dato2){
               let resultado = dato1 / dato2;
               return resultado
            }

            function calcularCuota (cantidad, tasa, cuotas) {

                let tasaMensual = tasa/100/12;
                let cuota = cantidad* (tasaMensual*Math.pow (1+tasaMensual, cuotas)) / ((Math.pow (1+ tasaMensual,cuotas)) - 1);
                return cuota;
            }

            if (cantidad > 10000) {
        
            //Capturar cantidad / cuotas
            let division = dividir(cantidad, cuotas)

            //Calcular el valor de la cuota

            let cuotaPrestamo = calcularCuota (cantidad, tasaDeInteres, cuotas);
            

            //Mostrar resultado
            alert ("Usted debe pagar " + cuotas + " cuotas de " + cuotaPrestamo.toFixed (2))

            }



        else {

            alert ("El monto solicitado no esta dentro de lo establecido, por favor ingrese un importe mayor a 10000")
        }

        
