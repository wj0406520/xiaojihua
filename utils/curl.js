var tool = require('./tool.js');
var curl = {
    url_music:'https://classicmusic.nbweiaishiguang.com/api/',
    url_old:'https://jie.nbweiaishiguang.com/api/',
    // url :'http://localhost:9527/demo/api/',
    url:'https://jie.nbweiaishiguang.com/api/',
    login:function(){
      wx.login({
        success: res => {
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
          if(tool.getStorage('token')) return true;
          tool.setStorage('token',res.code);
          return true;
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
    getInfo:function(id){
      this.url = this.url_old;
      var ob ={};
      ob.url='index/info';
      ob.data = {
        id:id
      };
      ob.success=function(e){
        e.markers = tool.page.makeMap(e);
        e.distance = tool.page.getDistence();
        // e.includePoints = tool.page.makePoints(e);
        tool.setData(e);
      };
      curl.send(ob);
    },
    getList:function(name){
      this.url = this.url_old;
      tool.setStorage('location',1);
      if(!tool.getStorage('latitude')){
        tool.setStorage('location',0);
      }
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


    mlist:function(){
      var ob ={};
      ob.url='index/list';
      this.url = this.url_music;
      ob.data = {};
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
    mInfo:function(id){
      var ob ={};
      this.url = this.url_music;
      ob.url='index/info';
      ob.data = {
        id:id
      };
      ob.success=function(e){
        tool.setData(e);
      };
      curl.send(ob);
    },
    send:function(ob){
        wx.request({
          url: this.url+ob.url, //仅为示例，并非真实的接口地址
          data: ob.data,
          // method:'POST',
          header: {
            'content-type': 'application/json' // 默认值
          },
          success: function(e){
            if(e.data.code!=100){
              tool.alert(e.data.msg);
              return;
            }
            console.log('请求成功'+ob.url);
            tool.setStorage('request',1);
            ob.success(e.data.data);
          },
          fail:function(e){
              tool.setStorage('request',0);
              tool.alert('请更换网络重试');
              return;
          }
        })
    }

};
module.exports = curl
