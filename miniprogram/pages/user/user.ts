// index.ts
Page({
    onShow() {
        if (typeof this.getTabBar === 'function' && this.getTabBar()) {
            this.getTabBar().setData({
                current: getApp().globalData.current
            })
        }
    },
})
