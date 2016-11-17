const YaxyManager = require('./YaxyConfigManager.js');


const yaxy = new YaxyManager();
const Rule = require('./Rule/Model.js');
const Rules = require('./Rule/Collection.js');
const RuleView = require('./Rule/View.js');
const AddDialog = require('./AddDialogView.js')
const AppView = require('./App-view.js')



let RulesCollection = new Rules();



new AppView(RulesCollection);


let overlay = document.querySelector('.overlay');
addBtn = document.querySelector('.btnWrapper'),
    card = document.querySelector('.demo-card-square'),
    addRuleCardBtn = document.querySelector('.addrule'),
    fromInput = document.querySelector('#from'),
    toInput = document.querySelector('#to'),
    list = document.querySelector('ul');

// list.onclick = function(mouseEvent) {
//     let target = mouseEvent.target,
//         li = target.tagName === "LI" ? target : target.parentElement,
//         id = li.attributes.getNamedItem('FiddlerID').value;
//     configItem = yaxy.getConfigItem(id);

// }

// addRuleCardBtn.onclick = function() {
//     yaxy.appendIntoConfig(fromInput.value, toInput.value);
//     yaxy.commitConfig();
//     yaxy.restart();
//     overlay.style.display = 'none';
//     card.style.display = 'none';
//     renderList();
//     new Notification('New rule has been added', {
//         iconUrl: 'http://pre-test-cloud.sbis.ru/favicon.ico',
//         title: 'SBIS3.Fiddler',
//         message: "New rule has been added"
//     });

// }
// addBtn.onclick = function() {
//     overlay.style.display = 'block';
//     card.style.display = 'block';
// }
//new AddDialog();