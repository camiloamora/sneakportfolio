const URL_API = "https://api.unsplash.com/photos/?client_id=" + 'OBNSjfUwE4_Kp264QgVYtRgXsNwMDzsRTZVUFOJAtuM';

const getData = async () => {
    try {
        const response = await fetch(URL_API);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Fetch error', error);
    }
}

export default getData;