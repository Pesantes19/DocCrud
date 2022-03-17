const model = require('./modelo')

function agregarDocente( docente ) {
    const objeto = new model( docente )
    objeto.save()
}

function obtenerDocente( filtroDocente ) {
    return new Promise((resolve, reject) => {
        let filtro = {}
        if (filtroDocente != null) {
            filtro = { iddocente : filtroDocente }
        }
    })
}

async function actualizarDocente( docente ) {
    const objeto = await model.findOne( {iddocente : docente.iddocente} )
    objeto.cedula = docente.cedula
    objeto.nombre = docente.docente
    objeto.apellido = docente.apellido
    objeto.telefono = docente.telefono
    objeto.correo_electronico = docente.correo_electronico
    const resultado = await objeto.save()
    return resultado
}

function eliminarDocente( docente  ) {
    return model.deleteOne({iddocente : iddocente})
}

module.exports = {
    agregar: agregarDocente,
    obtener: obtenerDocente,
    actualizar: actualizarDocente,
    eliminar: eliminarDocente
}