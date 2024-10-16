import axios from '../configs/axios.config';

class PhotoService {
    static async getPhotos(page = 1, perPage = 12) {
        try {
            const response = await axios.get('https://api.unsplash.com/photos', {
                params: { page, per_page: perPage },
            });

            return response;
        } catch (error) {
            console.error('Error fetching photo list from Unsplash: ', error);
            return [];
        }
    }

    static async getPhotoById(photoId) {
        try {
            const response = await axios.get(`https://api.unsplash.com/photos/${photoId}`);

            return response;
        } catch (error) {
            console.error('Error fetching photo by id from Unsplash: ', error);
            return null;
        }
    }
}

export default PhotoService;