import { instance } from ".";
export const login = () => {
    return instance.get('/user');
}
