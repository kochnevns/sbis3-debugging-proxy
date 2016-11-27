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

 process.on('exit', (code) => {
 	// Перед выходом прибить Yaxy
 	yaxy.yaxyProcess.kill();
  console.log(`About to exit with code: ${code}`);
});