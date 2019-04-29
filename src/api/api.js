import wxrequest from '@/utils/request';

// const baseurl = 'https://www.sssyin.cn'
const baseurl = 'http://rest.apizza.net/mock/dc40447c3e43b777d38d9801fff7e670';

//首页发现商品接口
const hostGoodsList = (params) => wxrequest(params, baseurl + '/maiyou/api/indexlist');
const getDetail = (params) => wxrequest(params, baseurl + '/maiyou/api/getdetail');
const getimg = (params) => wxrequest(params, `https://openapi.mtlab.meitu.com/v3/makeup?api_key=CI6cZg01b3vVZ8oy1xpcPk3eLkU2LT_W&api_secret=qstwzvbfn9etMqtrzmnYrM0Pomjb8uqo`);
export default {
	hostGoodsList,
	getimg,
	getDetail
}
