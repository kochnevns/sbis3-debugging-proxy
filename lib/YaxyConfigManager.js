'use strict';
const fs = require('fs');
const path = require('path');
const spawn = require('child_process').spawn;

module.exports = class YaxyManager {

    constructor(configFileName) {
        let self = this;
        this._DIVIDER = ' => ';
        this._YAXY_CONFIG_PATH = path.resolve(__dirname, './yaxy-config.txt')
        this.readConfig();
        
        process.on('exit', (code) => {
            self.kill();
            console.log(`About to exit with code: ${code}`);
        });
        //this.start();
    }
    start() {
        this.yaxyProcess = spawn('node', [path.resolve(__dirname, './../node_modules/yaxy/index.js'), '--config', this._YAXY_CONFIG_PATH]);
        this.yaxyProcess.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`);
        });

        this.yaxyProcess.stderr.on('data', (data) => {
            swal("Oops...", data, "error");
            console.log(`stderr: ${data}`);
        });

        this.yaxyProcess.on('close', (code) => {
            console.log(`child process exited with code ${code}`);
        });
    }
    kill() {
        this.yaxyProcess.kill();
    }
    restart() {
        this.kill();
        this.start();
    }
    readConfig() {
        let buff;
        try {
            buff = fs.readFileSync(this._YAXY_CONFIG_PATH);
        } catch (error) {
            swal("Oops...", error.message, "error");
            throw error;
        }
        this.config = buff.toString().split('\n').filter((n) => !!n.length).map((n, i) => {
            let currentURLs = n.split(' => ')
            return {
                id: i,
                from: currentURLs[0],
                to: currentURLs[1],
                enabled: !(currentURLs[0].slice(0, 1) === "#")
            }
        });
    }
    getConfigItem(id) {
        return this.config.filter((n) => n.id === id)[0]
    }

    appendRuleIntoConfig(ruleModel) {
        if (!this.getConfigItem(ruleModel.get('id'))) {
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
            let stringRule = (cfg.from + this._DIVIDER + cfg.to + '\n');
            if (!cfg.enabled && stringRule[0] !== '#') {
                let tempArr = stringRule.split('');
                tempArr.unshift('#');
                stringRule = tempArr.join('');
            }
            cfgString += stringRule;

        }

        fs.writeFileSync(this._YAXY_CONFIG_PATH, cfgString);


    }
}