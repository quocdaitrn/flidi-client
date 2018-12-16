import axios from 'axios';
import {API_BASE_URL,ACCESS_TOKEN} from '../constants/index';
var PlaceRepository = {};
PlaceRepository.read = (id)=>{
    return axios.get(`${API_BASE_URL}/locations/${id}`);
};
PlaceRepository.getPlaces = (province_id,keyword='')=>{
    keyword = encodeURI(keyword);
    return axios.get(`${API_BASE_URL}/locations/province/${province_id}?keyword=${keyword}`);
}

PlaceRepository.search = (province_id,keyword)=>{
    keyword = encodeURI(`searchPid:${province_id},locationName:${keyword}`);
    return axios.get(`${API_BASE_URL}/locations/search?search=${keyword}`);
};

export default PlaceRepository;