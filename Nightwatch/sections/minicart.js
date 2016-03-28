'use strict';

let miniCartCommands = {
    viewFullCart: function() {
        return this.waitForElementVisible('@miniCartButton', 1000)
            .click('@miniCartButton');
    },
    getItemsCount: function () {
        return this.getValue('@miniCartCount');
    },
    variables: function() {
        return {
            
        }
    }
};

module.exports = {
  url: '',
  elements: [
	{miniCartButton: '[data-qa=minicart-header]'}
    ,{miniCartCount: '[data-qa="minicart-count"]'}
	],
    commands: [miniCartCommands]
};