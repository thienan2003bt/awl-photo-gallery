import useShowToast from "./useShowToast";

const useCallService = () => {
    const showToast = useShowToast();

    const callService = async (apiCall, ...args) => {
        try {
            const response = await apiCall(...args);
            if(response?.errors?.length > 0) {
                throw new Error(response.errors[0]);
            }
            return response;
        } catch (error) {
            showToast('API Error', error.message, "error");
            return null; // or return a default value if needed
        }
    };

    return callService;
}

export default useCallService;