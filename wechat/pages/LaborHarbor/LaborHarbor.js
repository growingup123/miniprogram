//引入SDK核心类
var QQMapWX = require('../../utils/qqmap-wx-jssdk.min.js');

//实例化API核心类
var qqmapsdk;

Page({
  data: {
    list: [
      {
        id: "1",
        latitude: 32.158510,
        longitude: 118.713010,
        name: "南京江北新区政务服务中心",
        address: "江苏省南京市浦口区丽景路2号南京软件园研发大厦",
        distance:""
      },
      {
        id: "2",
        latitude: 32.064880,
        longitude: 118.829490,
        name: "紫金山天文台",
        address: "江苏省南京市玄武区天文路",
        distance: ""
      },
      {
        id: "1",
        latitude: 32.140552,
        longitude: 118.722401,
        name: "印象汇",
        address: "江苏省南京市浦口区大桥北路58号",
        distance: ""
      },
    ],
    specificZone: [
      {
        title: '建行——预约取号',
        dataId: 'wx307e11636e7679c6',
        src: 'https://jbxqalipay.nanjingdata.cn/image/yuyuequhao.png',
        bindType: 'navigateToMiniProgram'
      }
    ]
  },

  // mySort: function (e) {
  //   //property 根据什么排序
  //   var property = e.currentTarget.dataset.property;
  //   var self = this;
  //   var arr = self.data.list;
  //   var sortRule = true; // 正序倒序
  //   self.setData({
  //     list: arr.sort(self.compare(property, sortRule))
  //   })
  //   console.log(arr)
  // },
  // compare: function (property, bol) {
  //   return function (a, b) {
  //     var value1 = a[property];
  //     var value2 = b[property];
  //     if (bol) {
  //       return value1 - value2;
  //     } else {
  //       return value2 - value1;
  //     }
  //   }
  // },



  navigateToMiniProgram(e) {
    console.log('444',e)
    wx.navigateToMiniProgram({
      appId: e.currentTarget.dataset.id,
      path: '',
      // envVersion: 'trial',
      success(res) {
        console.log('success')
        // 打开其他小程序成功同步触发
      }
    })
  },

  onLoad: function (options) {
  },

  onShow: function(options) {
    let _this = this;
    function compare(distance) {
      return function (a, b) {
        var value1 = a[distance];
        var value2 = b[distance];
        return value1 - value2;
      }
    }
    qqmapsdk = new QQMapWX({
      key: '532BZ-3HZCW-ZULRZ-RQKCF-ALTAJ-XYFH5'
    });
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        _this.setData({
          latitude1: res.latitude,
          longitude1: res.longitude,
          scale: 10
        });

        //计算距离
        var strs = [];
        for (var j = 0; j < _this.data.list.length; j++) {
          strs[j] = {
            latitude: _this.data.list[j].latitude,
            longitude: _this.data.list[j].longitude
          }
        }
        qqmapsdk.calculateDistance({
          from: {
            latitude: _this.data.latitude1,
            longitude: _this.data.longitude1
          },
          to: strs,
          success: function (res) {
            console.log('juli', res);
            var res = res.result;
            var dis = [];
            for (var i = 0; i < res.elements.length; i++) {
              // dis.push(res.elements[i].distance); //将返回数据存入dis数组，
              var param = {};
              
              var string = "list[" + i + "].distance";
              param[string] = res.elements[i].distance;
              _this.setData(param);
            };
            var arr = _this.data.list;
            _this.setData({
              list: arr.sort(compare("distance"))
            })
            
            console.log('list', _this.data.list);
          },
          fail: function (error) {
            console.error(error);
          },
          complete: function (res) {
            console.log('complete', res);
            // _this.data.list.sort(compare('distance'));
            // console.log('list', _this.data.list);
          }
        })
      },
    })
  },

  onReady: function() {

  },

  

  getAddress(e) {
    console.log('list', this.data.list);
    console.log('getaddress',e)
    wx.openLocation({//​使用微信内置地图查看位置。
      latitude: e.currentTarget.dataset.item.latitude,//要去的纬度-地址
      longitude: e.currentTarget.dataset.item.longitude,//要去的经度-地址
      name: e.currentTarget.dataset.item.name,
      address: e.currentTarget.dataset.item.address
    })
  },

  compare: function(distance) {
    return function(a, b) {
      var value1 = a[distance];
      var value2 = b[distance];
      return value1 - value2;
    }
  }



})

