// 测试IP
// const IP = 'http://50.64.102.101/ga/xinghuo-apaas-cloudsearch'
// 正式IP
const IP = 'http://10.101.16.250:10082/ga/xinghuo-apaas-cloudsearch'
export const api = {
  // 获取列表
  getList: IP + '/api/basicSearchApi',
  // 获取详情
  getDetails: IP + '/api/detailSearchApi'
}
