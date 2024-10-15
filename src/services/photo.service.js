import axios from '../configs/axios.config';

class PhotoService {
    static async getPhotos(page = 1, perPage = 12) {
        try {
            const response = await axios.get('https://api.unsplash.com/photos', {
                params: { page, per_page: perPage },
            });

            return response;
        } catch (error) {
            console.error('Error fetching images from Unsplash: ', error);
            return [];
        }
    }
}

export default PhotoService;