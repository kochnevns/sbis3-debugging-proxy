const rule = require('./models/rule.js'),
    YaxyManager = require('./YaxyConfigManager.js'),
    yaxy = new YaxyManager();

let Rules = Backbone.Collection.extend({
    model: rule,
    initialize: function() {
        let cfg = yaxy.getConfig();
        for (var ruleCfg of cfg) {
            this.add([ruleCfg])
        }
    }
});

module.exports = Rules;