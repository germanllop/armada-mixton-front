const path = require('path')

module.exports = {
    outputDir: path.resolve(__dirname, '../../Node/armada-mixton-api/public'),
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000'
            },
            '/auth': {
                target: 'http://localhost:3000'
            }
        }
    }
}