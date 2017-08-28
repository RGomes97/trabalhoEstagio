const path = require('path');
const resolvePath = (pathToResolve = '') => path.resolve(__dirname, pathToResolve)

module.exports = {
	entry: [resolvePath('./src/js/modulos/main.js'),resolvePath('./src/js/modulos/produtos.js'),resolvePath('./src/js/controllers/produtosCtrl.js'),resolvePath('./src/js/diretivas/faq.js')],
	output: {
		path: resolvePath('./build/js'),
		filename: 'bundle.js'
	}
}
