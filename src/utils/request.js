import wepy from 'wepy';
const wxRequest = async(params = {}, url) => {
	wepy.showNavigationBarLoading()
	wepy.showLoading({
		title: '加载中',
	})
	let data = params.query || {};
	let res = await wepy.request({
			url: url,
			method: params.method || 'GET',
			data: data,
			header: { 'Content-Type': 'application/json' },
	});
	wepy.hideNavigationBarLoading();
	wepy.hideLoading();
	return res;
};
module.exports = {
    wxRequest
}
