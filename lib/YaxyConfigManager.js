'use strict';
const fs = require('fs');
const path = require('path');
const spawn = require('child_process').spawn;

module.exports = class YaxyManager {

    constructor(configFileName) {

        this._DIVIDER = ' => ';
        this._YAXY_CONFIG_PATH = path.resolve(__dirname, 'yaxy-config.txt');
        this.readConfig();
        this.start();
    }
    start() {
        this.yaxyProcess = spawn('yaxy');
    }
    restart() {
        this.yaxyProcess.kill();
        this.start();
    }
    readConfig() {
        let buff = fs.readFileSync(this._YAXY_CONFIG_PATH);
        this.config = buff.toString().split('\n').filter((n) => !!n.length).map((n, i) => {
            let currentURLs = n.split(' => ')
            return {
                id: i,
                from: currentURLs[0],
                to: currentURLs[1],
                enabled: !!(currentURLs[0].slice(0, 1) === "#")
            }
        });
    }

    appendRuleIntoConfig(ruleModel) {
        if (!this.getCofigItem(ruleModel.get('id'))) {
            this.config.push({
                id: ruleModel.get('id'),
                from: ruleModel.get('from'),
                to: ruleModel.get('to'),
                enabled: ruleModel.get('enabled')
            });
        } else {
            this.getConfig().forEach((n) => {
                if (n.id === +ruleModel.get('id')) {
                    n.from = ruleModel.get('from');
                    n.to = ruleModel.get('to');
                    n.enabled = ruleModel.get('enabled');
                }
            })
        }

    }
    getConfig() {
        return this.config;
    }
    getLastIdx() {
        return this.config.slice(-1)[0].id
    }
    writeConfig() {
        let cfgArr = this.config,
            cfgString = '';

        for (let cfg of cfgArr) {
            cfgString += (cfg.from + this._DIVIDER + cfg.to + '\n')
        }

        fs.writeFileSync(this._YAXY_CONFIG_PATH, cfgString);


    }
}