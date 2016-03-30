'use strict';

let homeCommands = {
    login: function(username, password) {
        username = username || "username";
        password = password || "password"
        return this.waitForElementPresent('@loginDisabledBtn', 2000)
            .setValue('@usernameInput', username)
            .setValue('@passwordInput', password)
            .waitForElementPresent('@loginBtn', 1000)
            .click('@loginBtn')
            .waitForElementPresent('@username', 10000);
    },
    variables: function() {
        return {
            
        }
    }
};

module.exports = {
  url: 'https://sc-popcellar-oco-qa4.overture.orckestra.local/',
  elements: [
	{loginBtn: 'input[type=submit]'}
    ,{loginDisabledBtn: 'input[type=submit][disabled]'}
    ,{usernameInput: 'input[name="username"]'}
    ,{passwordInput: 'input[name="password"]'}
    ,{username: '[data-qa="username"]'}
	],
    commands: [homeCommands]
};