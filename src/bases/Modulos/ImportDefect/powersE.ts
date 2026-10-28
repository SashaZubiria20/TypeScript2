// Importaciones por defecto

/*
    En vez de utilizar la palabra reservada export al inicio del elemento, lo hacemos al final del archivo
    Se usa principalmente en: Frameworks como React, donde cada componente suele ser un archivo y el "default" es el componente mismo.

    Al import podemos ponerle el nombre que queramos.

    * Qué es?
        - Cada archivo puede tener muchos export normales (que llamamos exportaciones nombradas), pero solo puede tener un único export default. Es la forma de decirle a otros archivos: "Si no especificas qué quieres, toma esto como lo principal que ofrezco"

    * Para qué sirve?
        - La "estrella" del archivo: Se usa cuando un archivo tiene una función o clase principal que es el único propósito de ese archivo (por ejemplo, un componente de React o una clase principal de modelo).

        - Libertad de nombres al importar: Esta es la gran diferencia. Como el archivo solo tiene un default, no necesitas usar llaves {} al importar, y lo más importante: puedes ponerle el nombre que tú quieras en el archivo destino.

    Comparación:
        - Exportación nombrada (export const...): Obliga a importar usando el nombre exacto entre llaves { NombreOriginal }. Es rígido, pero seguro.

        - Exportación por defecto (export default...): Te deja importar sin llaves y ponerle cualquier nombre (como hiciste con import powers2 from ...).
*/

interface Power {
    id:number;
    desc:string;
}


const powers:Power[] = [
    {
        id:1,
        desc: 'Money'
    },
    {
        id:2,
        desc: 'Drugs'
    }
];

export default powers;