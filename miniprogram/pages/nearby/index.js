// index.js
// const app = getApp()

Page({
  data: {
    address: '',
    shops: []
  },
  getNearbyShops(loc) {
    wx.cloud.callFunction({
      name: 'shopFunctions',
      data: {
        type: 'getNearbyShops',
        loc: {
          lat: loc.latitude,
          lng: loc.longitude
        }
      }
    }).then(({ result }) => {
      this.setData({shops:result})
    })
  },
  getAddress(loc) {
    wx.cloud.callFunction({
      name: 'inspireFunctions',
      data: {
        type: 'getLocation',
        loc: {
          lat: loc.latitude,
          lng: loc.longitude
        }
      }
    }).then(({ result }) => {
      this.setData({
        address: result.address
      })
    })
  },
  onLoad() {
    wx.getLocation({
      type: 'wgs84',
    }).then(res => {
      this.getAddress(res)
      this.getNearbyShops(res)
    })
  }
})