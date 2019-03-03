import axios from 'axios';
import {API_BASE_URL,ACCESS_TOKEN} from '../constants/index';
import {ADMIN_URL} from '../config';
var Settings = {};
Settings.data = null;
Settings.get = ()=>{
    return axios.get(`${ADMIN_URL}/api/settings`);
}
export default Settings;