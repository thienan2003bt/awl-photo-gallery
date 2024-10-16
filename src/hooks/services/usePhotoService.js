import { useCallback } from 'react';
import PhotoService from '../../services/photo.service';
import useCallService from '../useCallService';

// Custom hook for calling API services related to photos
// Using useCallService hook to handle API errors and show toast message

const usePhotoService = () => {
    const callService = useCallService();

    const getPhotos = useCallback((page, perPage) => {
        return callService(PhotoService.getPhotos, page, perPage);
    }, [callService]);

    const getPhotoById = useCallback((photoId) => {
        return callService(PhotoService.getPhotoById, photoId);
    }, [callService]);

    return {
        getPhotos,
        getPhotoById,
    };
};

export default usePhotoService;