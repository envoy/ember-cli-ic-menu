/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'ember-cli-ic-menu',

  treeFor: function(name){
    if (name !== 'app') { return; }
    return this.treeGenerator(path.join(__dirname, 'node_modules/ic-menu/lib'));
  }
};
