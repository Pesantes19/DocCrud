const storage = require('./almacenamiento')

function agregarDocente( docente ) {
    return new Promise((resolve, reject) => {
        storage.agregar( docente )
        resolve( docente )
    })
}

function obtenerDocente( filtroTren ) {
    return new Promise((resolve, reject) => {
        resolve( storage.obtener( filtroTren ) )
    })
}

function actualizarDocente( docente ) {
    return new Promise((resolve, reject) => {
        storage.actualizar(docente )
        resolve( docente )
    })
}

function eliminarDocente( iddocente ) {
    return new Promise((resolve, reject) => {
        storage.eliminar( iddocente )
        resolve( iddocente )
    })
}

module.exports = {
    agregarDocente,
    obtenerDocente,
    actualizarDocente,
    eliminarDocente
}