/*
 * author：iWgang
 * email:  iwgang@163.com
 * time:   2016-10-12
 * github：https://github.com/iwgang/GankCamp-WechatAPP
 */
Page({
  data: {
    title: '',
    url: ''
  },
  onLoad: function(options) {
    this.setData({
      title: options.title,
      url: options.url
    })
  }
})