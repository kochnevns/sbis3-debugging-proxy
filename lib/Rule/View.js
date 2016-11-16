const AddDialogView = require('./../AddDialogView.js');

const RuleView = Backbone.View.extend({
  
    tagName: 'li',
    el: $('li'),
    className: 'mdl-list__item',

    render: function() {

        let $row = $(`<li class="mdl-list__item fid" FiddlerID="${this.model.get('id')}">
            <span class="mdl-list__item-primary-content">
              <i class="material-icons  mdl-list__item-avatar">dns</i>
              ${this.model.get('from')}
            </span>
              <span class="mdl-list__item-secondary-action">
                <label class="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="list-switch-${this.model.get('id')}">
                  <input type="checkbox" id="list-switch-${this.model.get('id')}" class="mdl-switch__input" checked />
                </label>
            </span>
          </li>`);
        $('ul').append($row);
        this.$el = $row;

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
        new AddDialogView();
    }
});


module.exports = RuleView;