const YaxyManager = require('./YaxyConfigManager.js');


const yaxy = new YaxyManager()
function renderList() {

	let config = yaxy.getConfig();


  let list = document.querySelector('ul');
  list.innerHTML = '';
  for (let configItem of config) {
  	let from = configItem.from;
  	let id =configItem.id;
  	let rowTemplate = `
<li class="mdl-list__item">
    <span class="mdl-list__item-primary-content">
      <i class="material-icons  mdl-list__item-avatar">dns</i>
      ${from}
    </span>
      <span class="mdl-list__item-secondary-action">
        <label class="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="list-switch-${id}">
          <input type="checkbox" id="list-switch-${id}" class="mdl-switch__input" checked />
        </label>
    </span>
  </li>`
  	list.innerHTML += rowTemplate;
  }

}


let overlay = document.querySelector('.overlay');
  let addBtn = document.querySelector('.btnWrapper');
  let card = document.querySelector('.demo-card-square');
 let addRuleCardBtn = document.querySelector('.addrule');
 let fromInput = document.querySelector('#from');
 let toInput = document.querySelector('#to');

 addRuleCardBtn.onclick = function() {
 	yaxy.appendIntoConfig(fromInput.value, toInput.value);
 	yaxy.commitConfig();
 	yaxy.restart();
 	overlay.style.display = 'none';
 	card.style.display = 'none';
 	renderList();

 }
  addBtn.onclick = function() {
  	overlay.style.display = 'block';
  	card.style.display = 'block';
  }

  renderList();
