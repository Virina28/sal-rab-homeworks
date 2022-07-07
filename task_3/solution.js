function renderCartItem(item) {
    const product = item;

    // Задание №3.1. Формирование строки корзины

    product.item = [
        {id: 1, title: 'Эчпочмак', count: 2, price: '55.00'}
        {id: 2, title: 'Сосиски', count: 15, price: '150.00'}
        {id: 3, title: 'Булка', count: 1, price: '40.00'}]; // product - объект вида {id: id, title: title, count: count, price: price}
    // например, {id: 1, title: 'Пицца', count: 5, price: '500.00'}, где
    // id - идентификатор
    // title - наименование
    // price - цена
    // count - количество
    let itemCountText = product.item.count * product.item.price; // сформируйте строку itemCountText вида:
    // количество × цена ₽ = стоимость ₽
    // например,
    // 5 × 500.00 ₽ = 2500 ₽
        itemCountText = " "; // 1. Создайте переменную itemCountText, равную пустой строке
        itemCountText = itemCountText + product.item.count; // 2. Присвойте переменной itemCountText результат склеивания itemCountText и количества
        itemCountText = itemCountText + ` × `; // 3. Присвойте переменной itemCountText результат склеивания itemCountText и ` × `
        itemCountText = itemCountText + product.item.price; // 4. Присвойте переменной itemCountText результат склеивания itemCountText и цены
        itemCountText = itemCountText + ` ₽ = `; // 5. Присвойте переменной itemCountText результат склеивания itemCountText и ` ₽ = `
    let sum = product.item.count * product.item.price; // 6. Создайте переменную sum и присвойте ей значение произведения количества и цены
        itemCountText = itemCountText + sum; // 7. Присвойте переменной itemCountText результат склеивания itemCountText и sum
        itemCountText = itemCountText + ` ₽`;// 8. Присвойте переменной itemCountText результат склеивания itemCountText и ` ₽`
    // Конец решения задания №3.1.

    return `<div class="cart-item"><div>${product.title}</div><div>${itemCountText}</div></div>`;
}
