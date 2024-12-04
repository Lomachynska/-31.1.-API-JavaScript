import { getData } from './main (2)';  // Шлях до файлу з експортованою функцією

// Приклад використання
getData('/posts')
    .then(data => {
        if (typeof data === 'string' && data.startsWith('Error')) {
            console.log('An error occurred:', data);
        } else {
            console.log('Data received:', data);
        }
    });
