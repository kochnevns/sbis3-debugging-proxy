const AddDialogView = require('./add-dialog.js');
const jade = require('jade');
const path = require('path');
const SwitcherView = require('./switcher.js');

const RuleView = Backbone.View.extend({

    tagName: 'li',
    className: 'mdl-list__item',
    templatePath: './../templates/rule.jade',

    render: function() {
        $('li[FiddlerID="' + this.model.get('id') +'"]').detach();
   
        this.$el.html(
          jade.renderFile(path.resolve(__dirname, this.templatePath), this.model.toJSON()
        ))
        this.$el.find('.mdl-list__item-secondary-action').append(new SwitcherView(this.model).el)
        return this;
    },

    initialize: function(model) {
        this.model = model
        this.render();
       // this.$el = $('.li[FiddlerID="' + model.get('id') + '"]');
        this.listenTo(this.model, "change", this.render);
    },
    events: {
        "click .mdl-list__item-primary-content" : "open"
    },

    open: function(e) {
        e.stopPropagation();
        if (e.target.className === "mdl-switch__ripple-container mdl-js-ripple-effect mdl-ripple--center") { return}
        new AddDialogView(this.model);

    }
});


module.exports = RuleView;