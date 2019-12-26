const app = getApp()

Page({
  data: {
    dataId: 1,
    specificZone: [
      {
        title: '工行——服务',
        dataId: 'wxc575845fbd5bac33',
        src: 'https://jbxqalipay.nanjingdata.cn/image/gonghangfuwu.png',
        bindType: 'navigateToMiniProgram'
      },
      {
        title: '工行——ETC服务',
        dataId: 'wxc326e066529a7b8e',
        src: 'https://jbxqalipay.nanjingdata.cn/image/gonghangetc.png',
        bindType: 'navigateToMiniProgram'
      },
      {
        title: '工行——工银爱购',
        dataId: 'wxabc67d38a5525cc0',
        src: 'https://jbxqalipay.nanjingdata.cn/image/aigou.png',
        bindType: 'navigateToMiniProgram'
      }
    ]
  },

  navigateToMiniProgram(e) {
    wx.navigateToMiniProgram({
      appId: e.currentTarget.dataset.id,
      path: '',
      // envVersion: 'trial',
      success(res) {
        console.log('success')
        // 打开其他小程序成功同步触发
      }
    })
  }
})