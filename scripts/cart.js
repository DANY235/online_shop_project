
let addToCartBtns = document.getElementsByClassName('add-to-cart');

let removeFromCartBtns = document.getElementsByClassName('remove-from-cart-btn');

let cartCounter = 0;



for (let i = 0; i < addToCartBtns.length; i++) {
    addToCartBtns[i].addEventListener('click', function () {
        let product = this.parentNode;
        let productName = product.getElementsByClassName('product_name')[0].textContent;

        let productImage = product.parentNode.getElementsByClassName('product-image')
        let productImgSrc = productImage[0].getAttribute('src')
        console.log(productImgSrc)

        let quantityInput = product.getElementsByClassName('quantity-input')[0];
        let quantity = parseInt(quantityInput.value, 10);

        for (let j = 0; j < quantity; j++) {
            addToCart(productName, productImgSrc);
        }

        updateCartCounter();

        this.style.display = 'none';
        product.getElementsByClassName('remove-from-cart-btn')[0].style.display = 'inline-block';
    })
}



for (let i = 0; i < removeFromCartBtns.length; i++) {
    removeFromCartBtns[i].addEventListener('click', function () {
        let product = this.parentNode;
        let productName = product.getElementsByClassName('product_name')[0].textContent;
        let quantityInput = product.getElementsByClassName('quantity-input')[0];
        let quantity = parseInt(quantityInput.value, 10);

        removeFromCart(productName, quantity);
        updateCartCounter();

        this.style.display = 'none';
        product.getElementsByClassName('add-to-cart')[0].style.display = 'inline-block';
    });
}


function addToCart(productName, productImgSrc) {
    let cartItems = document.getElementById('cart-items');

    let listItem = document.createElement('li');
    let productCartImg = document.createElement('img')
    productCartImg.setAttribute('src', productImgSrc)


    listItem.textContent = productName;
    listItem.appendChild(productCartImg)
    cartItems.appendChild(listItem);
}

function removeFromCart(productName, quantity) {
    let cartItems = document.getElementById('cart-items');
    let items = cartItems.getElementsByTagName('li');
    let removedCount = 0;

    for (let i = items.length - 1; i >= 0; i--) {
        if (items[i].textContent === productName) {
            cartItems.removeChild(items[i]);
            removedCount++;

            if (removedCount === quantity) {
                break;
            }
        }
    }
}

function updateCartCounter() {
    let cartItems = document.getElementById('cart-items');
    let items = cartItems.getElementsByTagName('li');

    cartCounter = items.length;

    let cartCounterElement = document.getElementsByClassName('cart-count')[0];

    cartCounterElement.textContent = cartCounter;
}


let clearCartButton = document.getElementById('clear-cart-btn');
clearCartButton.addEventListener('click', function () {
    let cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cartCounter = 0;
    updateCartCounter();

    for (let i = 0; i < removeFromCartBtns.length; i++) {
        removeFromCartBtns[i].style.display = 'none';
        addToCartBtns[i].style.display = 'inline-block';
    }
});