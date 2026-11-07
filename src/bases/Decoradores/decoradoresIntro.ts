// Decoradores

/*
    Es una funcion que se ejecuta en el momento de compilacion o transpilacion, que se usa para expandir o añadir funcionalidades a un objeto
    Se identifican con un @


    Qué son?
        Un decorador es simplemente una función que se ejecuta en el momento en que TypeScript "compila" (o transpila) tu clase, método o propiedad. Se reconocen porque siempre empiezan con el símbolo @

        Son como un "envoltorio" (o wrapper). Cuando pones un decorador sobre una clase, le estás diciendo a TypeScript: "Antes de que esta clase sea usada por la aplicación, pásala por esta función para que le añada, quite o modifique cosas"

    Uso en la vida real:
        - Los decoradores no suelen usarse para la lógica de negocio diaria (sumar números, buscar usuarios), sino para "metaprogramación":

            1- Frameworks (Angular/NestJS): Es donde más los verás. En Angular, usas @Component() para decirle a una clase: "Tú no eres una clase común, eres un componente visual". En NestJS, usas @Controller() o @Get() para definir rutas de API.

            2- Validación: Puedes crear un decorador @IsEmail() que valide automáticamente si una propiedad de una clase es un correo electrónico válido, sin que tengas que escribir el if manualmente en cada clase.

            3- Logging/Auditoría: Puedes crear un decorador @Log() que, cada vez que se ejecute un método, imprima automáticamente en consola: "Se está ejecutando el método X con estos argumentos". ¡Ideal para depurar sin ensuciar tu lógica!

    - ¿Cuándo se ejecutan?: En el momento de la transpilación/compilación.

    - Sintaxis: Se escriben justo encima de la clase, método, propiedad o parámetro con @NombreDelDecorador.

    - ¿Qué reciben?: Dependiendo de qué decoren (clase, método, etc.), reciben diferentes argumentos (la clase, el nombre del método, el descriptor de la propiedad, etc.).

    - Poder: Pueden modificar el comportamiento de una clase, añadir métodos, o incluso "interceptar" llamadas a métodos existentes.
*/