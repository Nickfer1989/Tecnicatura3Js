// Clase base DispositivoEntrada
class DispositivoEntrada {
    constructor(tipoEntrada, marca) {
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada() {
        return this._tipoEntrada;
    }

    set tipoEntrada(tipoEntrada) {
        this._tipoEntrada = tipoEntrada;
    }

    get marca() {
        return this._marca;
    }

    set marca(marca) {
        this._marca = marca;
    }
}

// Clase Raton
class Raton extends DispositivoEntrada {
    static contadorRatones = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    toString() {
        return `Raton [ID: ${this._idRaton}, Tipo: ${this.tipoEntrada}, Marca: ${this.marca}]`;
    }
}

// Clase Teclado
class Teclado extends DispositivoEntrada {
    static contadorTeclado = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclado;
    }

    toString() {
        return `Teclado [ID: ${this._idTeclado}, Tipo: ${this.tipoEntrada}, Marca: ${this.marca}]`;
    }
}

// Clase Monitor
class Monitor {
    static contadorMonitores = 0;

    constructor(marca, tamaño) {
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }

    get idMonitor() {
        return this._idMonitor;
    }

    toString() {
        return `Monitor [ID: ${this._idMonitor}, Marca: ${this._marca}, Tamaño: ${this._tamaño}]`;
    }
}

// Clase Computadora
class Computadora {
    static contadorComputadoras = 0;

    constructor(nombre, monitor, teclado, raton) {
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }

    toString() {
        return `
Computadora ${this._idComputadora}: ${this._nombre}
  ${this._monitor.toString()}
  ${this._teclado.toString()}
  ${this._raton.toString()}
        `;
    }
}

// Clase Orden
class Orden {
    static contadorOrdenes = 0;

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }

    agregarComputadora(computadora) {
        this._computadoras.push(computadora);
    }

    mostrarOrden() {
        let ordenStr = `Orden ${this._idOrden}:\n`;
        this._computadoras.forEach(comp => {
            ordenStr += comp.toString() + '\n';
        });
        console.log(ordenStr);
    }
}

// EJEMPLO DE USO:

// Crear dispositivos
let monitor1 = new Monitor('Samsung', '27 pulgadas');
let teclado1 = new Teclado('USB', 'Logitech');
let raton1 = new Raton('USB', 'Genius');

let computadora1 = new Computadora('PC Gamer', monitor1, teclado1, raton1);

let monitor2 = new Monitor('LG', '24 pulgadas');
let teclado2 = new Teclado('Bluetooth', 'Redragon');
let raton2 = new Raton('Bluetooth', 'Redragon');

let computadora2 = new Computadora('PC Oficina', monitor2, teclado2, raton2);

// Crear orden y agregar computadoras
let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);

// Mostrar orden
orden1.mostrarOrden();

