const addDialog = require('./add-dialog.js'),
    jade = require('jade'),
    path = require('path'),
    ruleView = require('./rule.js'),
    rule = require('./../models/rule.js');


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

    initialize: function(collection) {
        this.render();
        this.collection = collection;
        this.listenTo(collection, 'add', this.addRule);

        collection.each(this.addRule, this);


    },
    events: {
        "click .mdl-button": "createNew"

    },
    addRule: function(rule) {
        let newRule = new ruleView(rule);
        $('ul').append(newRule.render().el)

    },
    createNew() {
        let newRule = new rule(Object.create(null));
        this.collection.add(newRule);
        new addDialog(newRule);
    },
    open: function() {
        new addDialog();
    }
});


module.exports = AppView;