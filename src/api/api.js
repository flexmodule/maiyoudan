import {
  wxrequest
} from '@/utils/request';

// const baseurl = 'https://www.sssyin.cn'
const baseurl = 'https://uat.sssyin.cn';
//首页发现商品接口
const hostGoodsList = (params) => wxrequest(params, baseurl + '/tour/oversea/getPlaceList');
export {
  hostGoodsList
}
