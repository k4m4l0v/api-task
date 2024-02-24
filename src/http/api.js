import { $host } from ".";

export const postData = async (data) => {
    const {dataReq} = await $host.post('', data);
    return dataReq;
}
