const AddDialog = Backbone.View.extend({
    tagName: 'div',
    el: $('body'),
    className: 'demo-card-square',
    render: function() {
            let $overlay = $('<div class="overlay"></div>')
           let $dlg = $(`<div class="demo-card-square mdl-card mdl-shadow--2dp">
                    <div class="mdl-card__title mdl-card--expand">
                      <h2 class="mdl-card__title-text">${this.model ? 'Edit rule' : 'Add rule'}</h2>
                    </div>
                     <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style="width:90%;margin: 14px">
                      <input class="mdl-textfield__input" type="text" value="${this.model ? this.model.get('from') : ''}" id="from">
                      <label class="mdl-textfield__label" for="sample3">URL</label>
                    </div>  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style="width:90%;margin: 14px;">
                      <input class="mdl-textfield__input" type="text" value="${this.model ? this.model.get('to') : ''}" id="to">
                      <label class="mdl-textfield__label" for="sample3">replace with</label>
                    </div>

                      <a class="addrule mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" style="margin-right: 10px;width:auto;float:right">
                       ${this.model ? 'ok' : 'add'}
                      </a>
                  </div>`);
        this.$el.prepend($overlay)
        this.$el.append($dlg);


        this.$el = $dlg;
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
        this.model.commit();
      }
    }
});


module.exports = AddDialog;