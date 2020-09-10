// функцию currencyFilter регистрируем в main.js, импортируя currencyFilter (прописываю путь откуда) и указываю Vue.filter('currency', currencyFilter) для исполльзования данной функции перехожу в home-bill-component и указываю через прямую черту | currency для отображения валюты
export default function currencyFilter (value, currency = 'RUB') {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: currency
  }).format(value)
}
// в данной функции  возвращаем  новый экземпляр класса Intl (Объект Intl представляет собой пространство имен для ECMAScript API по интернационализации, которое обеспечивает чувствительное к языку сравнение строк, форматирование чисел, времени и даты.), через Intl.NumberFormat  (который является конструктором объектов, включающих языко-зависимое форматирование чисел), указываем набор опций которые он принимает. format показывает функцию в указанном формате
