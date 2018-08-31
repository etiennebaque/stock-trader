const { environment } = require('@rails/webpacker')

const customConfig = require('./custom')
environment.config.merge(customConfig)

const vue =  require('./loaders/vue')
environment.loaders.append('vue', vue)

module.exports = environment
