export function buildCategoryList(myCategories, displayElement) {
    // find DOM element
    const myNav = document.getElementById(displayElement);

    // clear DOM element
     myNav.innerHTML = '';

     let myNavHtml = '';

     // iterate og lav et element for hver kategori
     myCategories.forEach((category)=>{
         myNavHtml += `<li onclick="window._viewCallBacks.categoriesClick('${category}')">${category}</li>`
     });

     myNav.innerHTML = `<ul>${myNavHtml}</ul>`;
}

export function buildProductGallery(myProducts, displayElement, headline) {
    // find DOM element
    const myDisplay = document.getElementById(displayElement);

    // clear DOM element
    myDisplay.innerHTML = '';


    let myDisplayHtml = `<h2>${headline}</h2>`;
    

    // iterate gennem og dan elementer for hvert produkt
    if (myProducts.length > 1) {
        myProducts.forEach((product)=>{
            myDisplayHtml += `<article class="productCard"><h3>${product.title}</h3><img onclick="window._viewCallBacks.productClick('${product.id}')" src="${product.thumbnail}" alt="image-of-product"><p>${product.description}</p><p>Brand: ${product.brand}</p><p>Price: ${product.price}</p></article>`;
        });
    } else {
        myDisplayHtml = `<article class="productCard"><h3>${myProducts.title}</h3><img onclick="window._viewCallBacks.productClick('${myProducts.id}')" src="${myProducts.images[0]}" alt="image-of-product"><p>${myProducts.description}</p><p>Brand: ${myProducts.brand}</p><p>Price: ${myProducts.price}</p></article><button onclick="window._viewCallBacks.categoriesClick('${myProducts.category}')">${myProducts.category}</button>`;
        
    }
    

    myDisplay.innerHTML = myDisplayHtml;
}


/*  product data structure reference
brand: "Huawei"
category: "smartphones"
description: "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK."
discountPercentage:10.58
id: 5
images: ['https://i.dummyjson.com/data/products/5/1.jpg', 'https://i.dummyjson.com/data/products/5/2.jpg', 'https://i.dummyjson.com/data/products/5/3.jpg']
price: 499
rating: 4.09
stock: 32
thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg"
title: "Huawei P30" 
*/
