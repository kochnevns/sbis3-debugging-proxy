const AddDialogView = require('./../AddDialogView.js');

const RuleView = Backbone.View.extend({
  
    tagName: 'li',
    el: $('li'),
    className: 'mdl-list__item',

    render: function() {
        $('li[FiddlerID="' + this.model.get('id') +'"]').detach();

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
        $row.find('.mdl-list__item-primary-content').bind('click', this.open.bind(this))
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
    open: function(e) {
        e.stopPropagation();
        e.preventDefault();
        new AddDialogView(this.model);
    }
});


module.exports = RuleView;