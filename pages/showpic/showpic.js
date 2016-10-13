/*
 * 图片预览
 * author：iWgang
 * email:  iwgang@163.com
 * time:   2016-10-12
 * github：https://github.com/iwgang/GankCamp-WechatAPP
 */
Page({
  data:{
    pic: ''
  },
  onLoad:function(options){
    this.setData({
      pic: options.pic
    })
  }
})