async function fetchPets() {
    try {
        const response = await fetch('https://petstore3.swagger.io/api/v3/pet/findByStatus?status=available');
        
   
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json(); 
        console.log(data); 
    } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
    }
}


fetchPets();