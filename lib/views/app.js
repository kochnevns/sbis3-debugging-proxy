const AddDialogView = require('./add-dialog.js');
const jade = require('jade');
const path = require('path');
const RuleView = require('./rule.js');
const rule = require('./../models/rule.js');


const AppView = Backbone.View.extend({

    el: '.app',
    className: 'mdl-list__item',
    templatePath: './../templates/app.jade',

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
        "click .btnWrapper": "open",
        "click .mdl-button" : "createNew"

    },
    addRule: function(rule) {
        let newRule = new RuleView(rule);
        $('ul').append(newRule.render().el)

    },
    createNew() {
        let newRule = new rule(Object.create(null))
          new AddDialogView(newRule);
    },
    open: function() {
        new AddDialogView();
    }
});


module.exports = AppView;