'use strict';

let scopeSelectorCommands = {
    select: function(scopeName) {
        scopeName = scopeName || "BetterRetail Canada";
        let scopeNameLink = 'div.scope-selection[title="' + scopeName + '"] div.scope-title';
        this.waitForElementPresent('@scopeSelectorBtn', 2000)
            .waitForElementNotPresent('@scopeSelectorPanel', 1000)
            .click('@scopeSelectorBtn')
            .waitForElementPresent('@scopeSelectorPanel', 1000)
            .setValue('@scopeSelectorSearch', scopeName)
            .waitForElementPresent(scopeNameLink, 1000)
            .click(scopeNameLink)
            .waitForElementNotPresent('@scopeSelectorPanel', 2000)
            .waitForElementPresent('@scopeSelectorBtn', 1000)
        this.api.expect.element('[data-qa=scope-selector-button]').to.have.attribute('title').equals(scopeName);
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
	{scopeSelectorBtn: '[data-qa=scope-selector-button]'}
    ,{scopeSelectorPanel: 'orc-scope-selector'}
    ,{scopeSelectorSearch: '[data-qa=scope-selector-search]'}
    ],
    commands: [scopeSelectorCommands]
};