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
            throw new Error(error);
        }
    }

    static async getPhotoById(photoId) {
        const response = await axios.get(`https://api.unsplash.com/photos/${photoId}`);
            return response;
        // try {
        //     const response = await axios.get(`https://api.unsplash.com/photos/${photoId}`);
        //     return response;
        // } catch (error) {
        //     console.error('Error fetching photo by id from Unsplash: ', error);
        //     throw new Error(error);
        // }
    }
}

export default PhotoService;