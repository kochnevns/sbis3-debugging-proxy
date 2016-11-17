const AddDialogView = require('./../AddDialogView.js');
const jade = require('jade');
const path = require('path');

const RuleView = Backbone.View.extend({

    tagName: 'li',
    className: 'mdl-list__item',
    templatePath: 'Rule.jade',

    render: function() {

        this.$el.html(
          jade.renderFile(path.resolve(__dirname, this.templatePath), this.model.toJSON()
        ))

        return this;
    },

    initialize: function(model) {
        this.model = model
        this.render();
        this.listenTo(this.model, "change", this.render);
    },
    events: {
        "click": "open"

    },
    open: function() {
        new AddDialogView(this);
    }
});


module.exports = RuleView;