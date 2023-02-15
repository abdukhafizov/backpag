let arr = [{
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 120
    }
}, 
]

let container = document.querySelector('.container')

const reload = () => {

    for (let item of arr) {
        // create
        let bagpack = document.createElement('div')
        let bagpack_img = document.createElement('div')
        let bag__img = document.createElement('img')
        let bagpack__desc = document.createElement('div')
        let h3 = document.createElement('h3')
        let p = document.createElement('p')
        let bagpack_price = document.createElement('div')
        let bagpack_price__boxOne = document.createElement('div')
        let bagpack_price__boxTwo = document.createElement('div')
        let bagpack_price__boxThree = document.createElement('div')
        let starImg = document.createElement('img')
        let priceImg = document.createElement('img')
        let boxImg = document.createElement('img')
        let starSpan = document.createElement('span')
        let priceSpan = document.createElement('span')
        let boxSpan = document.createElement('span')
        let bagpack_desc__btn = document.createElement('div')
        let bagpack__desc__btn1 = document.createElement('button')


        // styling
        bagpack.classList.add('bag__card')
        bagpack_img.classList.add('bag__card__img')
        bagpack__desc.classList.add('bag__card__desc')
        bagpack_price.classList.add('bag__card__price')
        bagpack_desc__btn.classList.add('bag__card__desc__btn')
        bagpack__desc__btn1.classList.add('bag__card__desc__btn1')
        bagpack_desc__btn.classList.add('bag__card__desc__btn')

        bagpack__desc__btn1.innerHTML = "В избранное"

        bag__img.src = item.image
        // bag__img.setAttribute('src', 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg')
        bag__img.setAttribute('width', '115px')
        bag__img.setAttribute('height', '161px')
        h3.innerHTML = item.category
        p.innerHTML = item.description.slice(0, 155).toLowerCase()
        priceSpan.innerHTML = item.price
        starSpan.innerHTML = item.rating.rate
        boxSpan.innerHTML = item.rating.count


        priceImg.setAttribute('src', './img/price-icon.svg')
        starImg.setAttribute('src', './img/star-icon.png')
        boxImg.setAttribute('src', './img/box-icon.svg')

        container.append(bagpack)
        bagpack.append(bagpack_img, bagpack__desc,)
        bagpack_img.append(bag__img)
        bagpack__desc.append(h3, p, bagpack_price, bagpack_desc__btn)
        bagpack_price.append(bagpack_price__boxOne, bagpack_price__boxTwo, bagpack_price__boxThree)
        bagpack_price__boxOne.append(priceImg, priceSpan)
        bagpack_price__boxTwo.append(starImg, starSpan)
        bagpack_price__boxThree.append(boxImg, boxSpan)
        bagpack_desc__btn.append(bagpack__desc__btn1)

    

         
        }

    }


reload(arr)







