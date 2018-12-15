import axios from 'axios';
import {API_BASE_URL,ACCESS_TOKEN} from '../constants/index';
var PlaceRepository = {};
PlaceRepository.read = (id)=>{
    return  {
        name:'Duc Ba Church',
        id:1,
        lat:-34.297,
        lng:150.844,
        des:'Duc Ba Church description',
        thumb:'https://giothanhle.net/wp-content/uploads/2016/02/duc-ba-church-3-1170x738.jpg',
        cover:'https://giothanhle.net/wp-content/uploads/2016/02/duc-ba-church-3-1170x738.jpg',
        rating:3.5,
        address:'01 Công xã Paris, Bến Nghé, Quận 1, Hồ Chí Minh'
    }
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