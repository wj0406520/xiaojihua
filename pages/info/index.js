//index.js
//获取应用实例
const app = getApp()
var tool = require("../../utils/tool.js")
var curl = require("../../utils/curl.js")
Page({
  data: {
    name: '黄山',
    latitude:30.060365,
    longitude:118.173455,
    distance:12,
    markers: [{
      iconPath: "/image/location.png",
      latitude: 30.060365,
      longitude: 118.173455,
      width: 50,
      height: 50
    }]
  },
  onLoad: function() {
    tool.page = this;
  	var id = tool.getStorage('list_id');
  	curl.getInfo(id);
  },
  getDistence:function(){
  	  	var distance = tool.getStorage('distance');
	  	if(distance<10){
	  		distance = 13;
	  	}else if(distance<20){
	  		distance = 12;
	  	}else if(distance<50){
	  		distance = 11;
	  	}else if(distance<95){
	  		distance = 10;
	  	}else if(distance<200){
	  		distance = 9;
	  	}else{
	  		distance = 8;
	  	}
	  	return distance;
  },makeMap:function(ob){
  	// {
	  //     iconPath: "/image/location.png",
	  //     latitude: tool.getStorage('latitude'),
	  //     longitude: tool.getStorage('longitude'),
	  //     width: 50,
	  //     height: 50
	  //   },
  	return [
  		{
	      iconPath: "/image/location.png",
	      latitude: ob.latitude,
	      longitude: ob.longitude,
	      width: 50,
	      height: 50
	    }
  	];
  }
})