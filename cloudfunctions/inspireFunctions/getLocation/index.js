const rp = require('request-promise')
const md5 = require('md5');
exports.main = async (event, context) => {
  const key = "PFUBZ-G3KWX-WHQ4D-TS7OJ-MYOUH-D5F3M";
  const {loc} = event;
  const sig = `/ws/geocoder/v1?key=${key}&location=${loc.lat},${loc.lng}`;
  const encode = md5(`${sig}Ee8LrNsmAew5gkUk1CMHbNd1UiRi6YVN`);
  const url = `https://apis.map.qq.com${sig}&sig=${encode}`;
  return await rp(url)
    .then(res => {
      const jsonRes = JSON.parse(res);
      return jsonRes.result;
    })
    .catch(res => {
      return res;
    })
}