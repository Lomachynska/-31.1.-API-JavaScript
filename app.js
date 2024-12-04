// Функція для виконання запиту
export async function getData(segment) {
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
