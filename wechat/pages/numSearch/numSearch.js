// pages/numSearch/numSearch.js
import {
  webView,
  navTo
} from '../../utils/webView.js'

const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatar: app.globalData.avatar,
    nickName: app.globalData.nickName,
    isLogin: app.globalData.isLogin,
    itemList: [{
        title: '我的办件',
        items: [{
            dataId: "https://jbxqalipay.nanjingdata.cn" + app.globalData.test + "/web/wechat/modules/workGuide/templates/newOffice.html?workType=S",
            src: "https://jbxqalipay.nanjingdata.cn/image/doing.png",
            name: "在办件",
            bindType: 'toWebView'
          },
          {
            dataId: "https://jbxqalipay.nanjingdata.cn" + app.globalData.test + "/web/wechat/modules/workGuide/templates/newOffice.html?workType=O",
            src: "https://jbxqalipay.nanjingdata.cn/image/QrCode.png",
            name: "办结件",
            bindType: 'toWebView'
          }
        ]
      },
      {
        title: '云柜二维码',
        items: [{
            dataId: "https://jbxqalipay.nanjingdata.cn" + app.globalData.test + "/web/wechat/modules/fileCabinet/templates/pickup.html",
          src: "https://jbxqalipay.nanjingdata.cn/image/pickup.png",
            name: "取件码",
            bindType: 'toWebView'
          },
          {
            dataId: "https://jbxqalipay.nanjingdata.cn" + app.globalData.test + "/web/wechat/modules/fileCabinet/templates/saveup.html",
            src: "https://jbxqalipay.nanjingdata.cn/image/saveup.png",
            name: "存件码",
            bindType: 'toWebView'
          }
        ]
      },
      {
        title: '建议与反馈',
        items: [{
            dataId: "https://jbxqalipay.nanjingdata.cn" + app.globalData.test + "/web/wechat/modules/feedback/templates/feedback.html",
          src: "https://jbxqalipay.nanjingdata.cn/image/feedback.png",
            name: "我要反馈",
            bindType: 'toWebView'
          },
          {
            dataId: "https://jbxqalipay.nanjingdata.cn" + app.globalData.test + "/web/wechat/modules/feedback/templates/historyRecord.html",
            src: "https://jbxqalipay.nanjingdata.cn/image/historyRecord.png",
            name: "反馈历史",
            bindType: 'toWebView'
          }
        ]
      },
      {
        title: '问卷调查',
        items: [{
          dataId: "https://jbxqalipay.nanjingdata.cn" + app.globalData.test + "/web/wechat/modules/questionnaire/templates/questionnaireList.html",
          src: "https://jbxqalipay.nanjingdata.cn/image/questionnair.png",
          name: "填写问卷",
          bindType: 'toWebView'
        },
          {
            dataId: "https://jbxqalipay.nanjingdata.cn" + app.globalData.test + "/web/wechat/modules/questionnaire/templates/questionnairehistoryList.html",
            src: "https://jbxqalipay.nanjingdata.cn/image/questionlist.png",
            name: "历史问卷",
            bindType: 'toWebView'
          },
        ]
      }
    ],
  },
  goOfficeList() {
    wx.navigateTo({
      url: '../officeList/officeList'
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log("onLoad", app.globalData)
    // var qq = decodeURIComponent(options.q)
    // console.log(qq)
    // wx.showModal({
    //   title: '提示',
    //   content: qq,
    //   success: function (res) {
    //     if (res.confirm) {
    //       console.log('用户点击确定')
    //     } else {
    //       console.log('用户点击取消')
    //     }
    //   }
    // })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function(options) {
    console.log("numSearch,onShow", app.globalData);
    if (app.globalData.isLogin == false && app.globalData.isJump == 1) {
      wx.navigateTo({
        url: '/pages/auth/auth?url=homePage',
      })
    }
    this.setData({
      nickName: app.globalData.nickName,
      avatar: app.globalData.avatar,
      isLogin: app.globalData.isLogin
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  toWebView(e) {
    webView(e, true)
  },
  login() {
    if (app.globalData.isLogin == false) {
      wx.navigateTo({
        url: '/pages/auth/auth?url=homePage'
      })
    }
  },
  logout() {
    this.setData({
      nickName: app.globalData.constNickName,
      avatar: app.globalData.constAvatar,
      isLogin: false
    });
    app.globalData.nickName = app.globalData.constNickName,
      app.globalData.avatar = app.globalData.constAvatar,
      app.globalData.isLogin = false
    console.log("logout:", app.globalData)
  },
  navTo(e) {
    navTo(e, true);
  }
})