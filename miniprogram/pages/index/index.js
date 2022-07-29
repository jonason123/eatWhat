// index.js
// const app = getApp()

Page({
  data:{
    helloworld:'你好'
  },
  onLoad(){
    // wx.cloud.callFunction({
    //   name: 'inspireFunctions',
    //   data: {
    //     type: 'getInspireContext'
    //   }
    // }).then(({result})=>{
    //   this.setData({
    //     helloworld:result.inspireContext
    //   })
    // })
    wx.getLocation({
      type:'wgs84',
    }).then(res=>{
      wx.cloud.callFunction({
        name: 'inspireFunctions',
        data: {
          type: 'getLocation',
          loc:{
            lat: res.latitude,
            lng: res.longitude
          }
        }
      }).then(({result})=>{
        this.setData({
          helloworld: result.address
        })
      })
    })
  }
})
