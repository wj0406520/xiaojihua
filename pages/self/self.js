Page({
  data: {
    activeIndex:1,
    categorys: [
      { id: 1, name: "asdasasdfasdfasfasdfa" },
      { id: 2, name: "1asdaafa" },
      { id: 3, name: "asaa" },
      { id: 4, name: "asdfa" },
      { id: 5, name: "asdfa" },
      { id: 6, name: "asdfa" },
      { id: 7, name: "asdfa" },
      { id: 8, name: "asdfa" },
    ],
    play_state:"paused"
  },
  onLoad: function () {
    this.createCanvasContext('firstCanvas');
    this.createCanvasContext('sencCanvas');

    // animationData
  },
  default:function(){
    var state = '';
    if(this.data.play_state=='paused'){
       state = 'running';
    }else{
       state = 'paused';
    }
    this.setData({
      play_state:state
    });

    /*
    var animation = wx.createAnimation({
        duration: 1000,
        timingFunction: 'ease',
    })
    animation.translate(0,100).step();
    this.setData({
      animationData:animation.export(),
    })
    */
  },
  createCanvasContext:function(str){
    var context = wx.createCanvasContext(str)
    context.setStrokeStyle("#00ff00")
    context.setLineWidth(5)
    context.rect(0, 0, 200, 200)
    context.stroke()
    context.setStrokeStyle("#ff0000")
    context.setLineWidth(2)
    context.moveTo(160, 100)
    context.arc(100, 100, 60, 0, 2 * Math.PI, true)
    context.moveTo(140, 100)
    context.arc(100, 100, 40, 0, Math.PI, false)
    context.moveTo(85, 80)
    context.arc(80, 80, 5, 0, 2 * Math.PI, true)
    context.moveTo(125, 80)
    context.arc(120, 80, 5, 0, 2 * Math.PI, true)
    context.stroke()
    context.draw()
  }
})
