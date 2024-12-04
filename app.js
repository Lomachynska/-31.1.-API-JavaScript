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

// Оголошення функції
export async function putData(id, data) {
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



