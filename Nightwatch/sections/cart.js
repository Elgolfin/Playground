'use strict';

let cartCommands = {
    checkout: function() {
        return this.waitForElementVisible('@checkoutButton', 2000)
            .click('@checkoutButton');
    },
    getItemsCount: function () {
        return this;
    },
    variables: function() {
        return {
            
        }
    }
};

module.exports = {
  url: '',
  elements: [
	{checkoutButton: '[data-qa=order-summary-checkout]'}
    //,{miniCartCount: '[data-qa="minicart-count"]'}
	],
    commands: [cartCommands]
};