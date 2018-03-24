//index.js
//获取应用实例
const app = getApp()
var tool = require("../../utils/tool.js")
var curl = require("../../utils/curl.js")
Page({
  data: {
    list: null,
    min: null,
    mil: null,
    max: null,
  },
  onLoad: function() {
    tool.page = this;
    tool.getLocation();
    curl.login();
    curl.getList("");
    // this.setData({
    //   shen_data: this.data.shen_data
    // })
  },
  searchData: function (e) {
    var value = e.detail.value;
    // tool.alert(value);
    curl.getList(value);
  }
})
