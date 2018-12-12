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
PlaceRepository.search = (keyword,province_id)=>{
    return  [
        {
            name:'Duc Ba Church',
            id:1,
            lat:-34.297,
            lng:150.844,
            des:'Duc Ba Church description',
            thumb:'https://giothanhle.net/wp-content/uploads/2016/02/duc-ba-church-3-1170x738.jpg',
            rating:3.5,
            address:'01 Công xã Paris, Bến Nghé, Quận 1, Hồ Chí Minh'
        },
        {
            name:'Bitexco Building',
            id:2,
            lat:-34.397,
            lng:150.644,
            des:'Bitexco Building description',
            thumb:'http://vn.savills.com.vn/_images/bitexco-financial-tower-4(2).jpg',
            rating:4.6,
            address:'2 Hải Triều, Bến Nghé, Hồ Chí Minh'
        }
    ]
};

export default PlaceRepository;