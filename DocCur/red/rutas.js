const docente = require('../componentes/docente/interfaz')
const curso = require('../componentes/curso/interfaz')

const rutas = function(servidor) {
    servidor.use('/docente', docente)
    servidor.use('/curso', curso)
}

module.exports = rutas