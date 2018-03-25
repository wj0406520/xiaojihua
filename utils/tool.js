var tool = {
    page:null,
    alert:function(v){
      wx.showToast({
        title: v,
        duration: 2000
      })
    },
    setData:function(ob){
      this.page.setData(ob);
    },
    getLocation:function(){
        // if(!this.getStorage('latitude')){
            wx.getLocation({
              type: 'wgs84',
              success: function(res) {
                // this.setStorage('latitude',res.latitude);
                // this.setStorage('longitude',res.longitude);
                // console.log(tool);
                // console.log(this);
                tool.setStorage('latitude',res.latitude);
                tool.setStorage('longitude',res.longitude);
              }
            })
        // }
    },
    setStorage: function (key,data) {
      wx.setStorageSync(key, data)
    },
    getStorage: function (key) {
     return wx.getStorageSync(key);
    },
    clearStorage: function () {
      wx.clearStorageSync()
    },
    changePage:function(page){
      wx.navigateTo({    //保留当前页面，跳转到应用内的某个页面（最多打开5个页面，之后按钮就没有响应的）
          url:'/pages'+page
      })
    }
};
module.exports = tool
