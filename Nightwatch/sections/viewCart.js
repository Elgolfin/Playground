module.exports = {
    url: '',
    elements: [
        {searchBox: '[data-qa="search-input"]'}
        ,{btnSearchSubmit: '[data-qa="search-button"]'}
        ,{noResult: 'h2'}
        ,{refiner1Element: 'h2.h4'}
        ,{searchProductName: '[data-qa="search-product-title"]'}
        ,{searchProductPrice: '[data-qa="search-product-price"]'}
        ,{categoryNameLvl1Link: 'a[title="${categoryNameLvl1}"]'}
        ,{categoryNameLvl2Link: 'a[title="${categoryNameLvl2}"]'}
        ,{sortByAscendingProductName: '[data-qa="search-sort-by"] li:nth-child(4) a'}
        ,{sortByDescendingProductName: '[data-qa="search-sort-by"] li:nth-child(5) a'}
        ,{sortByPriceHighLow: '[data-qa="search-sort-by"] li:nth-child(3) a'}
        ,{sortByPriceLowHigh: '[data-qa="search-sort-by"] li:nth-child(2) a'}
        ,{brand1Element: 'input[name="Brand[]"]'}
    ]
};

/*
css=span.navbar-count;;;miniCartCountItems
css=a[title=&quot;Panier&quot;];;;viewCart
css=[data-qa=&quot;cart-product-price&quot;];;;firstLineItemUnitPrice
css=[data-qa=&quot;cart-product-subtotal-price&quot;];;;firstLineItemSubTotalPrice
css=[data-qa=&quot;cart-product-subtotal-sales&quot;];;;firstLineItemSubTotalSalesPrice
20;;;promotionCart
15;;;promotionDiscount
//div[4]/span;;;qtyCount
soulier;;;addCartSearchKeyword
css=[data-qa=&quot;search-buy-now&quot;];;;buttonBuyFromSearch
css=[data-qa=&quot;search-buy-now&quot;] :nth(1);;;buttonBuyFromSearch2
css=[data-qa=&quot;cart-product-name&quot;];;;cartProductName
css=[data-qa=&quot;cart-product-price&quot;];;;cartProductPrice
css=[data-qa=&quot;cart-product-delete&quot;];;;cartDeleteProduct
//li[3]/a/span[2];;;headerCartWidget
//button[2];;;cartIncreaseQuantity
css=[data-qa=&quot;search-quickview-buy-now&quot;];;;popupBuyNow
css=[data-qa=&quot;cart-product-sales-price&quot;];;;cartProductSalesPrice
css=[data-qa=&quot;product-price&quot;];;;popupProductPrice
css=[data-qa=&quot;order-summary-checkout&quot;];;;cartCheckOut
css=[data-qa=&quot;order-summary-subtotal&quot;];;;cartSubTotal
xpath=(//a[contains(@href, '/')])[8];;;startShopping
*/