const YaxyManager = require('./../YaxyConfigManager.js');


const yaxy = new YaxyManager();

const Rule = Backbone.Model.extend({

    initialize: function(cfg) {
        this.set({
            id: cfg.id || yaxy.getLastIdx() + 1,
            from: cfg.from ? cfg.from.replace('#', '') : '',
            to: cfg.to,
            enabled: cfg.enabled
        });
        this.on('change', this.commit, this)
    },

    commit: function() {
        yaxy.appendRuleIntoConfig.call(yaxy, this);
        yaxy.writeConfig();
    }
});


module.exports = Rule;