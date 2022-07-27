// index.js
// const app = getApp()

Page({
  data:{
    helloworld:'你好'
  },
  onLoad(){
    wx.cloud.callFunction({
      name: 'inspireFunctions',
      data: {
        type: 'getInspireContext'
      }
    }).then(({result})=>{
      this.setData({
        helloworld:result.inspireContext
      })
    })
  }
})
