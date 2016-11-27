const jade = require('jade');
const path = require('path');

const AddDialog = Backbone.View.extend({
    tagName: 'div',
    el: $('body'),
    className: 'demo-card-square',
    templatePath: './../templates/add-dialog.jade',
    render: function() {
            let $overlay = $('<div class="overlay"></div>')
           let $dlg = jade.renderFile(path.resolve(__dirname, this.templatePath), this.model.toJSON())
        this.$el.prepend($overlay)
        this.$el.append($dlg);
        this.$overlay = $overlay;
        return this;
    },
    initialize: function(model) {
        this.model = model;
        this.render();
    },
    events: {
      "click a" : "save"
    },
    getFrom() {
      return document.querySelector('#from').value;
    },
    getTo: function() {
      return document.querySelector('#to').value;
    },
    save: function() {
      if (this.model) {
        this.model.set({'from': this.getFrom(), to: this.getTo()});
      }
      $('.demo-card-square').detach();
      this.$overlay.detach();
      
    }
});

module.exports = AddDialog;