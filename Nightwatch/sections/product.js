'use strict';

let productCommands = {
    firstAddToCart: function() {
        return productCommands.addToCart.call(this, 20000); 
    },
    addToCart: function(delay) {
        delay = delay || 1000;
        return this.waitForElementVisible('@addToCartButton', 1000)
            .click('@addToCartButton')
            .waitForElementPresent('@addToCartDisabled', 100)
            .waitForElementPresent('@addToCartDone', delay); 
    },
    variables: function() {
        return {
            
        }
    }
};

module.exports = {
  url: '',
  elements: [
	{addToCartButton: '[data-qa=product-add-to-cart]'}
	,{addToCartDisabled: '[data-qa=product-add-to-cart][disabled]'}
	,{addToCartDone: '[data-qa=product-add-to-cart] span.hidden'}
	],
    commands: [productCommands]
};