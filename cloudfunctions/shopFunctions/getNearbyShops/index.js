const rp = require('request-promise')
const md5 = require('md5');
exports.main = async (event, context) => {
  const key = `key=PFUBZ-G3KWX-WHQ4D-TS7OJ-MYOUH-D5F3M`;
  const {loc} = event;
  const boundary = `boundary=nearby(${loc.lat},${loc.lng},1000)`
  const filter = `filter=category=美食`
  const page = `page_index=1&page_size=20`
  const sig = `/ws/place/v1/search?address_format=short&${boundary}&${filter}&${key}&${page}`;
  const encode = md5(`${sig}Ee8LrNsmAew5gkUk1CMHbNd1UiRi6YVN`);
  const url = encodeURI(`https://apis.map.qq.com${sig}&sig=${encode}`);
  return await rp(url)
    .then(res => {
      const jsonRes = JSON.parse(res);
      return jsonRes.data;
    })
    .catch(res => {
      return res;
    })
}