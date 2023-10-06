
import {getProductCategories, getAllProducts, getProductsByCategory, getProductById} from "./modules/model/dummyjasonLib.js";
import {buildCategoryList, buildProductGallery} from "./modules/view/viewCode.js";


let categoriesDisplayElement='categoriesNav';
let productDisplayElement='productDisplay';

initApp();



function initApp(){
// just to get things started ... happy coding :)

    getProductCategories().then((categories) => {
    //    console.log(categories);

       buildCategoryList(categories, categoriesDisplayElement);
       
    });

    getAllProducts(8, 50).then((products) => {
        // console.log(products);

        buildProductGallery(products, productDisplayElement, 'Featured products');

    });
    
}


// callBack functions remember hoisting to window eks: window._viewCallBacks = { categoriesCallBack,productCardCallback};

window._viewCallBacks = { categoriesClick, productClick };

function categoriesClick(categoryId) {
    // console.log(categoryId);

    getProductsByCategory(categoryId).then((products) => {
        // console.log(products);
        buildProductGallery(products, productDisplayElement, categoryId);
    });
}

function productClick(productId) {
    // console.log(productId);

    getProductById(productId).then((product)=>{
        console.log(product);
        buildProductGallery(product, productDisplayElement, productId);
    });
}

