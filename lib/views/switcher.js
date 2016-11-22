const jade = require('jade');
const path = require('path');

const SwitcherView = Backbone.View.extend({

    tagName: 'span',
    className: 'mdl-list__item-secondary-action',
    templatePath: './../templates/switcher.jade',

    render: function() {   
        this.$el.html(
          jade.renderFile(path.resolve(__dirname, this.templatePath), this.model.toJSON()
        ));
        if (this.model.get('enabled')) {
            this.$el.find('input').attr('checked', 'checked')
        }
        return this;
    },

    initialize: function(model) {
        this.model = model
        this.render();
    },
    events: {
        "click" : "switch"
    },

    switch: function(e) {
        e.stopPropagation();
        let checked = e.target.checked;
        this.model.set('enabled', checked)

    }
});


module.exports = SwitcherView;