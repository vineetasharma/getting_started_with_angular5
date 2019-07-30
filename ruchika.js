const items = [
    {
        name: "Apple",
        rate: "Rs 50/Kg",
        offer: "3kg + 1kg",
        catagory: "Produce",
        categoryOffer: "10 % Off",
        subCategory: "Fruits",
        subCategoryOffer: "18 % Off"
    },
    {
        name: "Orange",
        rate: "Rs 80/Kg",
        offer: "20% off",
        catagory: "Produce",
        categoryOffer: "10 % Off",
        subCategory: "Fruits",
        subCategoryOffer: "18 % Off"
    },
    {
        name: "Potato",
        rate: "Rs 30/kg",
        offer: "5kg + 2kg",
        catagory: "Produce",
        categoryOffer: "10 % Off",
        subCategory: "Veg",
        subCategoryOffer: "5 % Off"
    },
    {
        name: "Tomato",
        rate: "Rs 70/Kg",
        offer: "10% Off",
        catagory: "Produce",
        categoryOffer: "10 % off",
        subCategory: "Veg",
        subCategoryOffer: "5 % Off"
    },
    {
        name: "Cow Milk",
        rate: "Rs 50/Lt",
        offer: "3Lt  + 1Lt",
        catagory: "Dairy",
        categoryOffer: "15 % off",
        subCategory: "Milk",
        subCategoryOffer: "20 % Off"
    },
    {
        name: "Soy Milk",
        rate: "Rs 40/Lt",
        offer: "10 % Off",
        catagory: "Dairy",
        categoryOffer: "15 % off",
        subCategory: "Milk",
        subCategoryOffer: "20 % Off"
    },
    {
        name: "Cheddar",
        rate: "Rs 50/Kg",
        offer: "2Kg+ 1Kg",
        catagory: "Dairy",
        categoryOffer: "15 % off",
        subCategory: "Cheese",
        subCategoryOffer: "20 % Off"
    },
    {
        name: "Gouda",
        rate: "Rs 80/kg",
        offer: "10 % Off",
        catagory: "Dairy",
        categoryOffer: "15 % off",
        subCategory: "Cheese",
        subCategoryOffer: "20 % Off"
    },
];


let input = "Apple 6Kg, Orange 2Kg, Potato 14Kg, Tomato 3Kg, Cow Milk 8Lt, Gouda 2Kg";
// let input = "Apple 9Kg";


function getMinPrice(quantity, rate, offer, categoryOffer, subCategoryOffer) {
    let quant = parseInt(quantity);
    let price = rate.split('/')[0].split(' ')[1];
    let categoryOfferPrice = (100 -parseInt(categoryOffer))*quant*price/100;
    let subCategoryOfferPrice = (100 -parseInt(subCategoryOffer))*quant*price/100;

    let offerPlus = {};
    let OfferOffPercent;
    let itemOfferPrice;

    if (offer.indexOf('+')!= -1) {
        offerPlus["quantity"] = offer.split('+')[0];
        offerPlus["free"] = offer.split('+')[1]
    } else {
        OfferOffPercent = parseInt(offer);
    }


    if (OfferOffPercent) {
        console.log("1---------------------",OfferOffPercent);
        itemOfferPrice= (quant * price * (100-OfferOffPercent) / 100);
    } else {
        console.log("2---------------------",quant);
        // itemOfferPrice= (quant * price);
        let quantOffer=parseInt(offerPlus["quantity"]);
        let quantOfferFree= parseInt(offerPlus["free"])
        if(quantOffer<quant){
            let actualQuant = 0;
            console.log('Apple Offre------',quantOffer,quantOfferFree);
            if((quant%(quantOffer+quantOfferFree)) > 0){
                actualQuant= actualQuant + (quant%(quantOffer+quantOfferFree));
            }
            actualQuant = actualQuant + (parseInt(quant / (quantOffer+quantOfferFree))*quantOffer);
            console.log("Actual Quant------------",actualQuant,price);
            itemOfferPrice= actualQuant*price;
        } else if(quantOffer==quant){
            itemOfferPrice= (quant * price);
            /**
             * Customer preferences for free or off
             */
        } else {
            itemOfferPrice= (quant * price);
        }
    }

    if(itemOfferPrice<categoryOfferPrice){
        if(itemOfferPrice<subCategoryOfferPrice){
            return itemOfferPrice;
        } else {
            return subCategoryOfferPrice;
        }

    } else {
        if(categoryOfferPrice<subCategoryOfferPrice){
            return categoryOfferPrice;
        } else {
            return subCategoryOfferPrice;
        }
    }
}

function getPrice(quantity, rate) {

    let quant = parseInt(quantity);
    let price = rate.split('/')[0].split(' ')[1];
    return (quant * price);
}

function calculatePrice(input) {
    let totalItems = input.trim().split(',');

    let boughtItems = [];

    for (var i = 0; i < totalItems.length; i++) {
        let currentItem = totalItems[i].trim();
        let item = {};
        let splitByIndex = currentItem.lastIndexOf(' ');
        item["name"] = currentItem.substring(0, splitByIndex);
        item["quantity"] = currentItem.substring(splitByIndex + 1, currentItem.length);
        let itemDetails = items.filter(function (subItemDetails) {
            return (subItemDetails.name.toUpperCase().trim() == item["name"].toUpperCase().trim());
        });
        item["details"] = itemDetails && itemDetails.length && itemDetails[0];
        item["ActualPrice"] = getPrice(item["quantity"], item["details"]["rate"]);
        item["discountedPrice"] = getMinPrice(item["quantity"], item["details"]["rate"], item["details"]["offer"], item["details"]["categoryOffer"], item["details"]["subCategoryOffer"]);
        boughtItems.push(item);
    }
    console.log("Bought Items---------", boughtItems);
}

calculatePrice(input);