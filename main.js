console.log('#14. JavaScript homework example file')

/*
 *
 * #1
 *
 * Функціональні Вимоги:
 * 1. Вхідні параметри:
 *  - `segment`: Рядок, який представляє сегмент шляху URL до ресурсу на API. Наприклад: `/posts` для отримання списку постів, `/posts/1` для отримання посту з ідентифікатором 1.
 *
 * 2. Запити до API:
 *  - Виконати асинхронний HTTP GET запит до `https://jsonplaceholder.typicode.com`, додавши сегмент шляху `segment` до базового URL.
 *  - Використати `fetch` для надсилання запиту.
 *
 * 3. Обробка відповідей:
 *  - У разі успішної відповіді (HTTP статус 200-299), конвертувати відповідь у формат JSON і повернути отримані дані.
 *  - Якщо відповідь вказує на помилку (HTTP статус виходить за межі 200-299), повернути HTTP статус як індикатор помилки.
 *  - При виникненні помилки в процесі виконання запиту (наприклад, мережева помилка), логувати помилку у консоль і повертати текст помилки.
 *
 * 4. Логування:
 *  - Вивести у консоль отримані дані при успішному запиті.
 *  - Логувати помилку у консоль при її виникненні.
 *
 * Технічні вимоги:
 * - Використання сучасних можливостей JavaScript (ES6+), зокрема асинхронних функцій (`async/await`).
 * - Належне управління помилками та виключеннями.
 * - Код має бути чистим, добре структурованим, зі зрозумілими назвами змінних та функцій.
 *
*/

async function getData(segment) {
  const baseUrl = 'https://jsonplaceholder.typicode.com';
  const url = `${baseUrl}${segment}`;

  try {
      const response = await fetch(url);
      if (!response.ok) {
          console.error(`Error: ${response.status}`);
          return `Error: ${response.status}`;
      }

      const data = await response.json();
      console.log('Response data:', data);
      return data;
  } catch (error) {
      console.error('Fetch error:', error);
      return `Fetch error: ${error.message}`;
  }
}

// Приклад використання
getData('/posts')
  .then(data => {
      if (typeof data === 'string' && data.startsWith('Error')) {
          console.log('An error occurred:', data);
      } else {
          console.log('Data received:', data);
      }
  });



// Базовий URL та сегмент шляху: Спочатку створюємо повний URL, додаючи до базового шляху segment, який передається у функцію.
// Асинхронний запит: Використовуємо fetch для виконання HTTP GET запиту. Оскільки це асинхронна операція, ми використовуємо await для отримання результату.
// Обробка відповіді:
// Якщо статус відповіді в межах 200-299 (успішний запит), ми конвертуємо її у формат JSON і логуємо.
// Якщо статус відповіді вказує на помилку (наприклад, 404 або 500), ми логуємо цей статус як індикатор помилки.
// Обробка помилок:
// Якщо під час запиту або обробки виникає помилка (наприклад, мережева помилка), вона ловиться в блоці catch і виводиться в консоль, а також повертається повідомлення про помилку.



getData('/posts') // отримуємо список постів
  .then(data => {
    // додаткові дії з отриманими даними
  })
  .catch(error => {
    // обробка помилок
  });

  // асинхронний запит, обробляє можливі помилки і коректно логує дані або помилки у консоль.



/*
 *
 * #2
 * Функціональні вимоги:
 *
 * 1. Вхідні параметри:
 *  - `segment`: Рядок, що вказує на сегмент API для виконання POST запиту (наприклад, `/posts`).
 *  - `data`: Об'єкт, який містить дані для відправки в тілі запиту.
 *
 * 2. Виконання запиту:
 *  - Виконати асинхронний HTTP POST запит до `https://jsonplaceholder.typicode.com`, додавши `segment` до URL. Використати `data` як тіло запиту.
 *  - Встановити необхідні заголовки для запиту, зокрема `Content-Type: application/json`.
 *
 * 3. Обробка відповіді:
 *  - У разі успішного отримання відповіді (HTTP статус 200-299), конвертувати відповідь у формат JSON і повернути отримані дані.
 *  - Якщо відповідь вказує на помилку (HTTP статус виходить за межі 200-299), повернути повідомлення про помилку.
 *
 * 4. Логування:
 *  - Логувати у консоль результат або повідомлення про помилку.
 *
 * Технічні Вимоги:
 * - Використання сучасних можливостей JavaScript (ES6+), зокрема асинхронних функцій (`async/await`).
 * - Належне управління помилками та відповідями від API.
 *
*/

// Функція для виконання POST запиту до API
async function postToAPI(segment, data) {
    const baseUrl = 'https://jsonplaceholder.typicode.com';
    const url = `${baseUrl}${segment}`;

    try {
        // Виконання POST запиту
        const response = await fetch(url, {
            method: 'POST', // Встановлюємо метод запиту POST
            headers: {
                'Content-Type': 'application/json', // Заголовок для передачі JSON даних
            },
            body: JSON.stringify(data), // Перетворюємо об'єкт в JSON для відправки
        });

        // Перевірка статусу відповіді
        if (!response.ok) {
            // Якщо статус не в межах 200-299, повертаємо повідомлення про помилку
            console.error(`Error: ${response.status}`);
            return `Error: ${response.status}`;
        }

        // Перетворення відповіді в JSON
        const responseData = await response.json();

        // Логування результату
        console.log('Response data:', responseData);

        // Повернення отриманих даних
        return responseData;
    } catch (error) {
        // Логування помилки в процесі виконання запиту
        console.error('Fetch error:', error);
        return `Fetch error: ${error.message}`;
    }
}

// Приклад використання
const postData = {
    title: 'foo',
    body: 'bar',
    userId: 1
};

postToAPI('/posts', postData)
    .then(data => {
        if (typeof data === 'string' && data.startsWith('Error')) {
            // Обробка помилки, якщо є
            console.log('An error occurred:', data);
        } else {
            // Обробка отриманих даних
            console.log('Data received:', data);
        }
    });

//Вхідні параметри:
//segment: шлях до ресурсу API, наприклад, /posts.
//data: об'єкт, що містить дані для відправки у тілі запиту.

//Виконання POST запиту:
//За допомогою fetch відправляється запит на зазначений URL.
//Заголовок Content-Type: application/json вказує, що тіло запиту має бути в форматі JSON.
//Тіло запиту (body) перетворюється в JSON за допомогою JSON.stringify(data).

//Обробка відповіді:
//Якщо відповідь успішна (статус HTTP 200-299), перетворюється на JSON і логуються отримані дані.
//Якщо статус відповіді вказує на помилку (наприклад, 400 або 500), виводиться повідомлення з HTTP статусом.

//Логування:
//Логуються як успішні відповіді, так і помилки при запиті.
//Якщо запит не вдався, помилка буде виведена в консоль.

//Як працює:
//Функція postToAPI відправляє POST запит на сервер з даними, вказаними в параметрі data.
//В залежності від результату запиту (успіх чи помилка), ви отримуєте дані або повідомлення про помилку в консолі.

//Приклад використання:
//У даному завдані відправляється POST запит для створення нового поста на сервері з параметрами { title: 'foo', body: 'bar', userId: 1 }.
//Результат обробляється в .then(), де можна перевірити, чи це помилка, або успішний відповідь із даними.





/*
 *
 * #3
 *
 * Функціональні вимоги:
 *
 * 1. Вхідні параметри:
 *  - `id`: Ідентифікатор об'єкта, який потрібно оновити.
 *  - `data`: Об'єкт з даними для оновлення.
 *
 * 2. Виконання запиту:
 *  - Виконати асинхронний HTTP PUT запит до `https://jsonplaceholder.typicode.com/posts/${id}` з використанням `id` та `data`.
 *  - Встановити заголовок `Content-Type: application/json`.
 * 3. Обробка відповідей:
 *  - У разі успішної відповіді, конвертувати відповідь у формат JSON і повернути отримані дані.
 *  - Якщо відповідь вказує на помилку (наприклад, неіснуючий ресурс або проблеми з сервером), повернути повідомлення про помилку.
 *
 * 4. Логування:
 *  - Логувати у консоль результат або повідомлення про помилку.
 *
 * Технічні Вимоги:
 * - Використання асинхронних функцій (`async/await`) для обробки HTTP запитів.
 * - Належне управління помилками та відповідями від API.
 *
 */


/// Оголошення функції без використання export
async function putData(id, data) {
  const baseUrl = 'https://jsonplaceholder.typicode.com';
  const url = `${baseUrl}/posts/${id}`;

  try {
      const response = await fetch(url, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
      });

      if (!response.ok) {
          console.error(`Error: ${response.status}`);
          return `Error: ${response.status}`;
      }

      const responseData = await response.json();
      console.log('Response data:', responseData);
      return responseData;
  } catch (error) {
      console.error('Fetch error:', error);
      return `Fetch error: ${error.message}`;
  }
}

// Приклад використання функції
const updatedData = {
  title: 'Updated Title',
  body: 'Updated body content',
  userId: 1
};

putData(1, updatedData)
  .then(data => {
      if (typeof data === 'string' && data.startsWith('Error')) {
          console.log('An error occurred:', data);
      } else {
          console.log('Updated data received:', data);
      }
  });



/*
 *
 * #4
 * Функціональні вимоги:
 *
 * 1. Вхідні параметри:
 *  - `id`: Ідентифікатор об'єкта, який потрібно оновити.
 *  - `data`: Об'єкт з даними для оновлення.
 *
 * 2. Виконання запиту:
 *  - Виконати асинхронний HTTP PATCH запит до `https://jsonplaceholder.typicode.com/posts/${id}` з використанням `id` та `data`.
 *  - Встановити заголовок `Content-Type: application/json`.
 *
 * 3. Обробка відповідей:
 *  - У разі успішної відповіді, конвертувати відповідь у формат JSON і повернути отримані дані.
 *  - Якщо відповідь вказує на помилку (наприклад, неіснуючий ресурс або проблеми з сервером), повернути повідомлення про помилку.
 *
 * 4. Логування:
 *  - Логувати у консоль результат або повідомлення про помилку.
 *
 * Технічні Вимоги:
 * - Використання асинхронних функцій (`async/await`) для обробки HTTP запитів.
 * - Належне управління помилками та відповідями від API.
 *
 */

// Функція для виконання PATCH запиту для оновлення частини об'єкта
async function patchData(id, data) {
  const baseUrl = 'https://jsonplaceholder.typicode.com';
  const url = `${baseUrl}/posts/${id}`; // Формуємо URL з ідентифікатором

  try {
      // Виконання PATCH запиту
      const response = await fetch(url, {
          method: 'PATCH', // Встановлюємо метод запиту PATCH
          headers: {
              'Content-Type': 'application/json', // Заголовок для передачі JSON даних
          },
          body: JSON.stringify(data), // Перетворюємо об'єкт в JSON для відправки
      });

      // Перевірка статусу відповіді
      if (!response.ok) {
          // Якщо статус не в межах 200-299, повертаємо повідомлення про помилку
          console.error(`Error: ${response.status}`);
          return `Error: ${response.status}`;
      }

      // Перетворення відповіді в JSON
      const responseData = await response.json();

      // Логування результату
      console.log('Response data:', responseData);

      // Повернення отриманих даних
      return responseData;
  } catch (error) {
      // Логування помилки в процесі виконання запиту
      console.error('Fetch error:', error);
      return `Fetch error: ${error.message}`;
  }
}

// Оголошення змінної з іншим іменем
const updatedPostData = {
  title: 'Updated Title',  // Тільки оновлення заголовка
};

patchData(1, updatedPostData)  // Оновлення поста з ідентифікатором 1
  .then(data => {
      if (typeof data === 'string' && data.startsWith('Error')) {
          // Обробка помилки, якщо є
          console.log('An error occurred:', data);
      } else {
          // Обробка отриманих даних
          console.log('Updated data received:', data);
      }
  });



/*
 *
 * #5
 * Функціональні вимоги:
 *
 * 1. Вхідні дані:
 *  - Функція приймає один параметр id — ідентифікатор ресурсу, який потрібно видалити.
 *
 * 2. Запит на видалення:
 *  - Виконати асинхронний HTTP DELETE запит до API за адресою https://jsonplaceholder.typicode.com/posts/${id}, де ${id} замінюється на конкретний ідентифікатор ресурсу для видалення.
 *
 * 3. Обробка відповіді:
 *  - Якщо запит успішний (HTTP статус відповіді 200-299), логувати успішне повідомлення і повертати true.
 *  - У випадку отримання відповіді зі статусом, що вказує на помилку (все, що поза діапазоном 200-299), логувати помилку зі статусом і повертати сам статус помилки.
 *  - При виникненні помилки в процесі виконання запиту (наприклад, мережева помилка), логувати повідомлення про помилку і повертати текст помилки.
 *
 * 4. Логування:
 *  - Успішне видалення: Логувати повідомлення у консоль у форматі: "Post with id [id] has been successfully deleted.", де [id] — це ідентифікатор видаленого ресурсу.
 *  - Неуспішне видалення: Логувати повідомлення у консоль у форматі: "Failed to delete post with id [id]. Status: [status]", де [id] — ідентифікатор ресурсу, а [status] — HTTP статус відповіді.
 *  - Помилка виконання запиту: Логувати повідомлення у консоль у форматі: "Error during deletion: [error message]", де [error message] — текст помилки.
 *
 * Технічні вимоги:
 * - Використання асинхронних функцій (async/await) для обробки HTTP запитів.
 * - Забезпечити належну обробку помилок та відповідей від API.
 * - Функція повинна бути експортована для подальшого використання або тестування.
 *
 */

// Функція для видалення ресурсу за ідентифікатором
export async function deletePost(id) {
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;  // Формуємо URL для DELETE запиту

  try {
      // Виконання DELETE запиту
      const response = await fetch(url, {
          method: 'DELETE',  // Встановлюємо метод запиту DELETE
      });

      // Перевірка статусу відповіді
      if (response.ok) {
          // У разі успіху логуємо успішне повідомлення
          console.log(`Post with id ${id} has been successfully deleted.`);
          return true;  // Повертаємо true, якщо видалення пройшло успішно
      } else {
          // У разі помилки логуємо повідомлення з помилкою
          console.error(`Failed to delete post with id ${id}. Status: ${response.status}`);
          return `Failed to delete post. Status: ${response.status}`;  // Повертаємо статус помилки
      }
  } catch (error) {
      // Логування помилки в разі проблем із запитом
      console.error(`Error during deletion: ${error.message}`);
      return `Error during deletion: ${error.message}`;  // Повертаємо текст помилки
  }
}

// Приклад використання
deletePost(1)  // Видалення поста з ідентифікатором 1
  .then(result => {
      if (result === true) {
          // Успішне видалення
          console.log('Post deleted successfully!');
      } else {
          // Помилка під час видалення
          console.log(result);
      }
  });


//export { getData, postData, putData, patchData, deleteData }