export interface ICatImagen {
    id: string;
    url: string;
}

function fetchDataWithPromises<Type>(url: string): Promise<Type[]> {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }
            return response.json();
        })
        .catch(error => {
            throw error;
        });
}

export {
    fetchDataWithPromises
}
async function fetchDataWithAsyncAwait<Type>(url: string): Promise<Type[]> {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }
        return response.json();
    } catch (error) {
        throw error;
    }
}

export {
    fetchDataWithAsyncAwait
}