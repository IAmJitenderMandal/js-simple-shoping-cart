let items = document.querySelector('.items');
let cart = document.querySelector('.cart');
let cartList = document.querySelector('.cartList');
let database = [];

// adding data to database
items.addEventListener('click', function (e) {

    if (e.target.classList.contains('addCart')) {
        console.log(
            e.target.parentElement.parentElement)
        let item = {};
        item.itemName = e.target.parentElement.parentElement.querySelector('.name').textContent.trim();
        item.price = e.target.parentElement.parentElement.querySelector('.price').textContent;
        item.image = e.target.parentElement.parentElement.querySelector('.img').getAttribute('src');

        database.push(item)
    }
})

// show items in cart
cart.addEventListener('click', function () {
    let toShowINCartList = database.map(item => {
        return `
        <div class="eachItem">
            <div class="itemIimg"><img src="${item.image}" alt="img"></div>
            <div class="itemName">${item.itemName}</div>
            <div class="itemPrice">${item.price}Rs/-</div>
        </div>
        `
    })

    cartList.classList.toggle('showCartList');
    
    if (cartList.classList.contains('showCartList')) {
        toShowINCartList.forEach(function (el) {
            cartList.innerHTML += el;
        })
    } else {
        cartList.innerHTML = '';
    }


})