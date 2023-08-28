export const useStudioAuth = () => {
    const API_URL = useRuntimeConfig().public.API_URL;
    const status = useState('studio:Auth', () => 'unauthenticated');

    async function login(identifier: string, password: string) {
        const { data, error } = await useFetch<any>(API_URL + '/studio/login', {
            method: 'POST',
            body: JSON.stringify({ identifier, password }),
        });
        if (error.value) {
            if (error.value?.data) {
                throw new Error(error.value?.data.message);
            }
            throw new Error(error.value?.message);
        }
        if (data) {
            status.value = 'authenticated';
            useCookie('accessToken', {
                sameSite: 'strict',
                secure: true,
            }).value = data.value.accessToken;
            useCookie('refreshToken', {
                sameSite: 'strict',
                secure: true,
            }).value = data.value.refreshToken;
            return data.value;
        }
    }

    async function getUserData() {
        const { data, error } = await useFetch<any>(API_URL + '/studio/user/', {
            method: 'GET',
        });
        if (error.value) {
            if (error.value?.data) {
                throw new Error(error.value?.data.message);
            }
            throw new Error(error.value?.message);
        }
        if (data) {
            return data.value;
        }
    }

    const actions = {
        login,
        getUserData,
    };

    const getters = {
        status,
    };

    return {
        ...getters,
        ...actions,
    };
};
