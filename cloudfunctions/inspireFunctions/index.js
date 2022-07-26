const getInspireContext = require('./getInspireContext/index');

// 云函数入口函数
exports.main = async (event, context) => {
  switch (event.type) {
    case 'getInspireContext':
      return await getInspireContext.main(event, context);
  }
};
