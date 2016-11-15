'use strict';
const fs = require('fs');
const path = require('path');

class YaxyManager {

    constructor(configFileName) {

        this._DIVIDER = ' => ';
        this._YAXY_CONFIG_PATH = path.resolve(__dirname, 'yaxy-config.txt');
        this.readConfig();
    }
    readConfig() {
        let buff = fs.readFileSync(this._YAXY_CONFIG_PATH);
        this.config = buff.toString().split('\n').filter((n) => !!n.length).map((n, i) => {
            let currentURLs = n.split(' => ')
            return {
            	id: i,
                from: currentURLs[0],
                to: currentURLs[1]
            }
        });
    }

    appendIntoConfig(from, to) {
    	let id = this.getLastIdx() + 1;
    	this.config.push({
    		id: id,
    		from: from,
    		to: to
    	});
    }
    getConfig() {
    	return this.config;
    }
    getLastIdx() {
    	return this.config.slice(-1)[0].id
    }
    commitConfig() {
    	let cfgArr = this.config,
    	cfgString = '';

    	for (let cfg of cfgArr) {
    		cfgString += ( cfg.from + this._DIVIDER + cfg.to + '\n')
    	}

    	fs.writeFileSync(this._YAXY_CONFIG_PATH, cfgString);


    }
}

const yaxy = new YaxyManager()
console.log(yaxy.config)
yaxy.appendIntoConfig('kek', 'lol');
yaxy.commitConfig();