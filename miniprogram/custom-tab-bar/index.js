Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      "pagePath": "/pages/index/index",
      "iconPath": "/image/icon_draw.png",
      "selectedIconPath": "/image/icon_draw_hl.png",
      "text": "抽一抽"
    },
    {
      "pagePath": "/pages/nearby/index",
      "iconPath": "/image/icon_nearby.png",
      "selectedIconPath": "/image/icon_nearby_hl.png",
      "text": "附近"
    },
    {
      "pagePath": "/pages/mine/index",
      "iconPath": "/image/icon_mine.png",
      "selectedIconPath": "/image/icon_mine_hl.png",
      "text": "我的"
    }]
  },
  attached() {
    wx.switchTab({
      url: '/pages/nearby/index',
    })
    this.setData({
      selected: 1
    })
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({ url })
      this.setData({
        selected: data.index
      })
    }
  }
})