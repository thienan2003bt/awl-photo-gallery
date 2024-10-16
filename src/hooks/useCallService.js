import useShowToast from "./useShowToast";

// Custom hook for calling API services
// Helping handling API errors and show toast message
// Do not need to handle errors in each component

const useCallService = () => {
    const showToast = useShowToast();

    /**
     * @param {* function} apiCall: API service function
     * @param  {...any} args : arguments for API service function
     * @returns 
     */
    const callService = async (apiCall, ...args) => {
        try {
            const response = await apiCall(...args);
            if(response?.errors?.length > 0) {
                throw new Error(response.errors[0]);
            }
            return response;
        } catch (error) {
            showToast('API Error', error.message, "error");
            return null;
        }
    };

    return callService;
}

export default useCallService;