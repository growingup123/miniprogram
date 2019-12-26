// pages/webview/webview.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url:'',
    shareObj: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("----------------------webView",options)
    console.log(unescape(options.url))
    this.setData({
      url:unescape(options.url)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (options) {
    return {
      title:'',
      desc:'新区e办事办理材料空表链接',
      path: '/pages/webview/webview?url=' + escape(this.data.shareObj.path)
    }
  },
  bindGetMsg: function(e) {
    console.log('23rar',e)
    this.data.shareObj = e.detail.data[e.detail.data.length-1];
  }
  
})