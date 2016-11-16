const Rule = Backbone.Model.extend({

    initialize: function(cfg) {
        this.set({
            id: cfg.id,
            from: cfg.from,
            to: cfg.to,
            enabled: cfg.enabled
        });
    },

    commit: function() {
        yaxy.appendRuleIntoConfig(this)
    }
});


module.exports = Rule;