const AddDialogView = require('./../AddDialogView.js');
const jade = require('jade');
const path = require('path');

const RuleView = Backbone.View.extend({

    tagName: 'li',
    className: 'mdl-list__item',
    templatePath: 'Rule.jade',

    render: function() {
        $('li[FiddlerID="' + this.model.get('id') +'"]').detach();
   
        this.$el.html(
          jade.renderFile(path.resolve(__dirname, this.templatePath), this.model.toJSON()
        ))


        return this;
    },

    initialize: function(model) {
        this.model = model
        this.render();
       // this.$el = $('.li[FiddlerID="' + model.get('id') + '"]');
        this.listenTo(this.model, "change", this.render);
    },
    events: {

    },

    open: function() {
        new AddDialogView(this);

    }
});


module.exports = RuleView;