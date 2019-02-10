import axios from 'axios';
import {ADMIN_URL} from '../config';

var PlaceRepository = {};
PlaceRepository.getList=(location_id)=>{
    return axios.get(`${ADMIN_URL}/api/blog/list/${location_id}`);
}
export default PlaceRepository;