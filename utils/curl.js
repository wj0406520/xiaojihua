var tool = require('./tool.js');
var curl = {
    url :'http://localhost:9527/demo/api/',
    login:function(){
      wx.login({
        success: res => {
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
          if(!tool.getStorage('token')){
            tool.setStorage('code',res.code);
            var ob={};
            ob.url='login/index';
            ob.data = {code:res.code};
            ob.success=function(e){
              tool.setStorage('token',e.token);
            };
            curl.send(ob);
          }
        }
      })
    },
    getList:function(name){

      var ob ={};
      ob.url='index/list';
      ob.data = {
        latitude:tool.getStorage('latitude'),
        longitude:tool.getStorage('longitude'),
        token:tool.getStorage('token'),
        name:name
      };
      ob.success=function(e){
        // console.log(e);
        // console.log(this);
        // console.log(tool.page);
        // tool.page.data=e;
        tool.setData(e);
        // console.log(tool.page);
      };
      curl.send(ob);
    },
    send:function(ob){
        wx.request({
          url: this.url+ob.url, //仅为示例，并非真实的接口地址
          data: ob.data,
          header: {
            'content-type': 'application/json' // 默认值
          },
          success: function(e){
            if(e.data.code!=100){
              tool.alert(e.data.msg);
              return;
            }
            ob.success(e.data.data);
          }
        })
    }

};
module.exports = curl
