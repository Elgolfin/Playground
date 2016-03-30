'use strict';

let marketingCommands = {
    addCampaign: function() {
        return this.waitForElementPresent('@addCampaignBtn', 1000)
                .click('@addCampaignBtn')
                .waitForElementPresent('@campaignName', 1000)
                .setValue('@campaignName', 'Automated UI Test #' + (new Date).getTime())
                .click('@promotionsTab')
                .waitForElementPresent('@confirmDialogSaveBtn', 1000)
                .waitForElementPresent('@confirmDialogCancelBtn', 1000)
                .click('@confirmDialogSaveBtn')
                .waitForElementPresent('@addPromotionBtn', 1000);
    },
    variables: function() {
        return {
            
        }
    }
};

module.exports = {
  url: 'https://sc-popcellar-oco-qa4.overture.orckestra.local/',
  elements: [
	{addCampaignBtn: 'button.add-campaign'}
    ,{campaignSaveBtn: '[data-qa="campaign-save"]'}
    ,{confirmDialogSaveBtn: '[data-qa="confirm-dialog-save"]'}
    ,{confirmDialogCancelBtn: '[data-qa="confirm-dialog-cancel"]'}
    ,{campaignName: '[data-qa="campaign-name"]'}
    
    // Left Tabs
    ,{promotionsTab: 'li[heading="Promotions"]'}
    
    // Promotions
    ,{addPromotionBtn: 'div.promotion-list button.add-button'}
    
	],
    commands: [marketingCommands]
};