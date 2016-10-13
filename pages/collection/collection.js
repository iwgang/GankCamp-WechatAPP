/**
 * 我的收藏
 * author：iWgang
 * email:  iwgang@163.com
 * time:   2016-10-13
 * github：https://github.com/iwgang/GankCamp-WechatAPP
 */
var util = require('../../utils/util')

Page({
  data:{
    collections: []
  },
  onLoad:function(options){
    var tempCollections = wx.getStorageSync('collections') || []
    tempCollections.map(c => {
      c.ctime = util.formatSimpleTimeFull(c.ctime)
    })
    this.setData({
      collections: tempCollections
    })
  },
})