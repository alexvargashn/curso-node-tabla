const fs = require('fs');
const { threadId } = require('worker_threads');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 1) => {
    try {
        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            consola += `${base} ${ 'x'.green }  ${i} ${ '='.green } ${base * i} \n`;
            salida += `${base} ${ 'x' }  ${i} ${ '=' } ${base * i} \n`;
        }

        if (listar) {
            console.log('================='.green);
            console.log(' Tabla del:', colors.blue(base));
            console.log('================='.green);

            console.log(salida);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;
    } catch (e) {
        throw e;
    }
}

module.exports = {
    crearArchivo
}