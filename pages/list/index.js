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
  location: function(){
    if(tool.getStorage('location')) return;
    curl.getList("");
  },
  onShow:function(){
    console.log('onshow');
    if(tool.getStorage('request') && tool.getStorage('location')) return;
    tool.getLocation();
    curl.login();
    curl.getList("");
  },
  searchData: function (e) {
    var value = e.detail.value;
    // tool.alert(value);
    curl.getList(value);
  },
  info:function(e){
    // e.currentTarget.id
    tool.setStorage('distance',e.currentTarget.dataset.distance)
    tool.setStorage('list_id',e.currentTarget.id);
    tool.changePage('/info/index');
  }
})
