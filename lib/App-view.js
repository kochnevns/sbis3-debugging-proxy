const AddDialogView = require('./AddDialogView.js');
const jade = require('jade');
const path = require('path');
const RuleView = require('./Rule/View.js');


const AppView = Backbone.View.extend({

    el: '.app',
    className: 'mdl-list__item',
    templatePath: 'App-template.jade',

    render: function() {

        this.$el.html(
          jade.renderFile(path.resolve(__dirname, this.templatePath))
        );

        return this;
    },

    initialize: function( collection) {
               this.render();
        this.collection = collection;
        this.listenTo(collection, 'add', this.addRule);
      //  this.listenTo(collection, 'all', _.debounce(this.render, 0));
        collection.each(this.addRule, this);
 

    },
    events: {
        "click .btnWrapper": "open"

    },
    addRule: function(rule) {
        let newRule = new RuleView(rule);
        $('ul').append(newRule.render().el)

    },
    open: function() {
        new AddDialogView();
    }
});


module.exports = AppView;