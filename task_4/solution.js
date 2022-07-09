// Задание 4.1. Вывод карточек товаров

function parseProducts(json) {
    function JSON.parse(json) {
        let data = JSON;
        data = {products};
    }
parseProducts(data.products)};

function renderProductsCards(json) {// Напишите функцию renderProductsCards(json)
// Аргументом функции является JSON
clearProducts(); // Выполните функцию clearProducts - она уже написана в коде, просто вызовите ее, аргументы не требуются
parseProducts(products); // Выполните функцию parseProducts, передав в неё json - аргумент функции и запишите результат в переменную products
let length = products.length; // Запишите в переменную length значение свойства products.length
for (let i = 0; i < products.length; i++); // Напишите цикл, в котором перебираете все products от 0 до (length - 1)
console.log(length[i])};
addProduct(products);// и выполняете addProduct с каждым элементом массива products (передавая элемент массива как аргумент)