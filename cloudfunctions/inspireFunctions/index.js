const getInspireContext = require('./getInspireContext/index');
const getLocation = require('./getLocation/index')

// 云函数入口函数
exports.main = async (event, context) => {
  switch (event.type) {
    case 'getInspireContext':
      return await getInspireContext.main(event, context);
    case 'getLocation':
      return await getLocation.main(event, context);
  }
};
