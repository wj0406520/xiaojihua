// pages/music/index.js

const app = getApp()
var tool = require("../../utils/tool.js")
var curl = require("../../utils/curl.js")

Page({

  /**
   * Page initial data
   */
  data: {
    list:[],

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

    tool.page = this;
    curl.mlist();
    console.log(this.data)
  },


  info:function(e){
    // e.currentTarget.id
    tool.setStorage('tag_id',e.currentTarget.id);
    tool.setStorage('img',e.currentTarget.dataset.img);
    tool.changePage('/minfo/index');
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