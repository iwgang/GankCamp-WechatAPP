/**
 * 我的
 * author：iWgang
 * email:  iwgang@163.com
 * time:   2016-10-11
 * github：https://github.com/iwgang/GankCamp-WechatAPP
 */
Page({
  data: {
    userInfo: {}
  },
  onLoad: function () {
    wx.login({
      success: res => {
        wx.getUserInfo({
          success: res => {
            this.setData({
              userInfo: res.userInfo
            })
          }
        })
      }
    })
  },
  onPullDownRefresh: function() {
    console.log('下拉刷新...')
  }
})