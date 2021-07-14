// pages/minfo/index.js


const app = getApp()
var tool = require("../../utils/tool.js")
var curl = require("../../utils/curl.js")


Page({

  /**
   * Page initial data
   */
  data: {
    list:[],
    img:'',
    listen:-1
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    var id = tool.getStorage('tag_id');
    this.data.img = tool.getStorage('img');
    this.setData(this.data);
    tool.page = this;
    curl.mInfo(id);
    console.log(this.data)
  },

  info:function(e){
    // e.currentTarget.id
    // tool.setStorage('tag_id',e.currentTarget.id);
    // tool.setStorage('img',e.currentTarget.dataset.img);
    var src = e.currentTarget.dataset.src;
    var index = e.currentTarget.dataset.index;
    this.setData({listen:index});
    // console.log(e);
    // console.log(src);
    this.music(src);
  },

  music:function(src){

    if(app.audio){
      app.audio.destroy();
    }

    app.audio = wx.createInnerAudioContext();
    app.audio.autoplay = true;
    app.audio.src = src;
    app.audio.onPlay(() => {
      console.log('开始播放')
    })
    app.audio.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })

  },


  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})