// logs.ts
import { formatTime } from '../../utils/util'

Page({
  data: {
    logs: []
  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        current: getApp().globalData.current
      })
    }
  },

  onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map((log: string) => {
        //console.log('log');
        return {
          date: formatTime(new Date(log)),
          timeStamp: log
        }
      })
    })
  },

})
