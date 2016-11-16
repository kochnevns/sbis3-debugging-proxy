const Rule = require('./Model.js');
const YaxyManager = require('./../YaxyConfigManager.js');
const yaxy = new YaxyManager();

let Rules = Backbone.Collection.extend({
    model: Rule,
    initialize: function() {
        let cfg = yaxy.getConfig();
        for (var ruleCfg of cfg) {
            this.add([ruleCfg])
        }
    }
});

module.exports = Rules;