const getNearbyShops = require('./getNearbyShops/index')

// 云函数入口函数
exports.main = async (event, context) => {
  switch (event.type) {
    case 'getNearbyShops':
      return await getNearbyShops.main(event, context);
  }
};
