//  функцию dateFilter регистрируем в main.js, импортируя dateFilter (прописываю путь откуда) и указываю Vue.filter('date', dateFilter) для исполльзования данной функции перехожу в header-component и указываю через прямую черту | date
export default function dateFilter (value, format = 'date') {
  const options = {}
  if (format.includes('date')) {
    options.day = '2-digit'
    options.month = 'long'
    options.year = 'numeric'
  }
  if (format.includes('time')) {
    options.hour = '2-digit'
    options.minute = '2-digit'
    options.second = '2-digit'
  }
  return new Intl.DateTimeFormat('ru-RU', options).format(new Date(value))
}
// в функции описываю формат даты и времени
