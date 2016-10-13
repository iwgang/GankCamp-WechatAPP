/**
 * 页面详情 todo：目前只是临时版本，微信那边还有很多组件没有提供
 * author：iWgang
 * email:  iwgang@163.com
 * time:   2016-10-12
 * github：https://github.com/iwgang/GankCamp-WechatAPP
 */
var collections;
Page({
  data: {
    title: '',
    url: ''
  },
  onLoad: function(options) {
    collections = wx.getStorageSync('collections') || []
    this.setData({
      title: options.title,
      url: options.url
    })
  },
  collection: function(e) {
    collections.unshift({url: this.data.url, title: this.data.title, ctime: new Date()})
    wx.setStorage({
      key: "collections",
      data: collections
    })
  }
})