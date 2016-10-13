/**
 * 首页 干货列表
 * author：iWgang
 * email:  iwgang@163.com
 * time:   2016-10-11
 * github：https://github.com/iwgang/GankCamp-WechatAPP
 */
var util = require('../../utils/util')
var curPageIndex = [1, 1, 1]
var tabInitState = [false, false, false]

Page({
  data: {
    gankData: {},
    loadingHidden: false,
    curSelClassifyIndex: 0
  },
  onLoad: function() {
    this.checkInitLoadGankData()
  },
  // 加载干货数据
  loadGankData: function(pageNo, callback) {
    // 获取干货列表数据
    wx.request({
      url: 'http://gank.io/api/data/' + this.getClassifyName(true) + '/10/' + pageNo,
      header: {
        'Content-Type': 'application/json'
      },
      success: res => {
        // 格式化日期
        res.data.results.map(gankInfo => {
          gankInfo.publishedAt = util.formatSimpleTime(gankInfo.publishedAt)
        })

        callback(res.data.results)
      }
    })
  },
  // 滚动到列表底部监听
  onBindscrolltolower: function(e) {
    var curClassifyName = this.getClassifyName()
    this.loadGankData(curPageIndex[this.data.curSelClassifyIndex], results => {
      curPageIndex[this.data.curSelClassifyIndex] ++
      this.data.gankData[curClassifyName] = this.data.gankData[curClassifyName].concat(results)
      this.setData({
        gankData: this.data.gankData
      })
    })
  },
  // swiper 滚动改变监听
  onBindchange: function(e) {
    this.checkInitLoadGankData()
    this.setData({
      curSelClassifyIndex: e.detail.current
    })
  },
  // 分类点击监听（android）
  // TODO：不知道 bindtap 怎么给方法传参数，不然下面两个方法只需要保留一个就可以了
  onTitleBarsClick0: function() {
    this.setData({
      curSelClassifyIndex: 0
    })
  },
  // 分类点击监听（iOS）
  onTitleBarsClick1: function() {
    this.setData({
      curSelClassifyIndex: 1
    })
  },
  // 分类点击监听（web）
  onTitleBarsClick2: function() {
    this.setData({
      curSelClassifyIndex: 2
    })
  },
  /**
   * 获取分类名称
   * @param isApiName 是否是干货api需要的请求 url 名称
   */
  getClassifyName: function(isApiName) {
    switch(this.data.curSelClassifyIndex) {
      case 0:
        return isApiName ? 'Android' : 'android'
      case 1:
        return isApiName ? 'iOS' : 'ios'
      case 2:
        return isApiName ? '前端' : 'web'
    }
  },
  // 检查初始化加载干货数据（根据不同类别）
  checkInitLoadGankData: function() {
    if (tabInitState[this.data.curSelClassifyIndex]) return

    var curClassifyName = this.getClassifyName()
    this.loadGankData(1, results => {
      curPageIndex[this.data.curSelClassifyIndex] = 2
      this.data.gankData[curClassifyName] = results
      this.setData({
        loadingHidden: true,
        gankData: this.data.gankData
      })
      tabInitState[this.data.curSelClassifyIndex] = true
    })
  }
})
