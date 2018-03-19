//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    shen_data: null,
    shi_data: null,
    qu_data: null,
  },
  all_data:null,
  onLoad: function() {
    this.all_data = this.data.shen_data = require("./district.data.js").data;
    this.setData({
      shen_data: this.data.shen_data
    })
  },
  selectData: function (e) {
    // console.log(e.detail.value);
    // console.log(this.data.shen_data);
    // console.log(value.length)
    var value = e.detail.value;
    var d = {};
    if (value.length<2){
      d = { 
        shen_data: this.all_data,
        shi_data: null,
        qu_data: null
      };
    }
    if (value.length==2){
      var ob = this.getData(this.data.shen_data,value*10000);
      console.log(ob);
      d = {
        shen_data: [ob],
        shi_data: ob["d"],
        qu_data: null
      };
    }

    if (value.length == 4) {
      var ob = this.getData(this.data.shen_data[0]["d"], value * 100);
      d = {
        shi_data: [ob],
        qu_data: ob["d"]
      };
    }
    if (value.length == 6) {
      var ob = this.getData(this.data.shi_data[0]["d"], value);
      d = {qu_data: [ob]};
    }

    this.setData(d);
  },
  getData: function (ob, n) {
    var re = {n:'不存在'};
    ob.forEach(function(e){
      // console.log(e);
      if (e.c==n){
        re = e;
      }
    })
    return re;
  }
})
