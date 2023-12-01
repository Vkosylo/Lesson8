const prompt = require('prompt-sync')()
let person

const name = prompt("Введіть своє ім'я ") 
const phone = prompt("Введіть свій номер ") 
const email = prompt("Введіть свою електрону адресу ") 
const adres = prompt("Введіть своє місце проживання ") 

person = {
    name: name,
    phone: phone,
    email: email,
    adres: adres
}

const menu = [
    {
        title:'Папероні',
        price: 12800/100,
        category: 'піца',
    },
    {
        title:'Гаваї',
        price: 14000/100,
        category: 'піца',
    },
    {
        title:'Тоскану',
        price: 13200/100,
        category: 'піца',
    },{
        title:'Шаурама з куркою',
        price: 7300/100,
        category: 'Шаурма',
    },
    {
        title:'Шаурама з яловиченною',
        price: 8500/100,
        category: 'Шаурма',
    },
    {
        title:'Фалафель',
        price: 7500/100,
        category: 'Шаурма',
    }
]

console.table(menu)

console.log("Що хочете замовити, введіть індекс замовлення:")

let chooseO = prompt("")
switch(chooseO){
    case "0":
        Order(menu[0].title, menu[0].price)
        break
    case "1":
        Order(menu[1].title, menu[1].price)
        break
    case "2":
        Order(menu[2].title, menu[2].price)
        break
    case "3":
        Order(menu[3].title, menu[3].price)
        break
    case "4":
        Order(menu[4].title, menu[4].price)
        break
    case "5":
        Order(menu[5].title, menu[5].price)
        break
    case "6":
        chooseMenu()
        break
}

function Order(x, y){
console.log(person.name, "ваше замовлення:", x)
console.log("ціна замовлення:", y)
console.log("ціна доставки:", 5000/100)
console.log("Сума:", y + 5000/100)

console.log("Кур'єр підїде до", person.adres)
console.log("Дякую за замовлення", person.name, "та смачного!!!")
}



