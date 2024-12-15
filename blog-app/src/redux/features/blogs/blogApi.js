import { publicAxios } from "../../../components/publicAxios";

export const getData = async ()=>{
    const response = await publicAxios.get('/blogs')
    return response.data;
}