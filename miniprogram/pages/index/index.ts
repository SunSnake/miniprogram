// index.ts
Page({
  data: {
    items: [] as any[]
  },

  onLoad() {
    this.loadItems();
  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        current: getApp().globalData.current
      })
    }
  },

  loadItems:function(){
    wx.request({
      url: 'http://192.168.8.148:8080/unit/loadItems',
      success: (res) => {
        var list: any[] = res.data as any[];
        this.setData({
          items: list.map((item: Object) => {
            //console.log('log');
            return item;
          }),
        })
      }
    })
  }
})
