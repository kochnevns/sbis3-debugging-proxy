const AddDialog = Backbone.View.extend({
    tagName: 'div',
    el: $('body'),
    className: 'demo-card-square',
    render: function() {
            let $overlay = $('<div class="overlay"></div>')
           let $dlg = $(`<div class="demo-card-square mdl-card mdl-shadow--2dp">
                    <div class="mdl-card__title mdl-card--expand">
                      <h2 class="mdl-card__title-text">Add Rule</h2>
                    </div>
                     <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style="width:90%;margin: 14px">
                      <input class="mdl-textfield__input" type="text" id="from">
                      <label class="mdl-textfield__label" for="sample3">URL</label>
                    </div>  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style="width:90%;margin: 14px;">
                      <input class="mdl-textfield__input" type="text" id="to">
                      <label class="mdl-textfield__label" for="sample3">replace with</label>
                    </div>

                      <a class="addrule mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" style="margin-right: 10px;width:auto;float:right">
                       add
                      </a>
                  </div>`);
        this.$el.append($overlay)
        this.$el.append($dlg);


        this.$el = $dlg;
        return this;
    },
    initialize: function() {

        this.render();
    }
});


module.exports = AddDialog;