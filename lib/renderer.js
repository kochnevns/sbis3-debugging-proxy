 const YaxyManager = require('./YaxyConfigManager.js'),
     yaxy = new YaxyManager(),
     Rule = require('./models/rule.js'),
     Rules = require('./rules.js'),
     RuleView = require('./views/rule.js'),
     AddDialog = require('./views/add-dialog.js'),
     AppView = require('./views/app.js');

 let rulesCollection = new Rules();
 new AppView(rulesCollection);

 yaxy.start();