// pages/subway/subway.js


Page({

  /**
   * 页面的初始数据
   */
  data: {
    display: 'none',
    thissubwayname: '',
    subwayname: '',
    subwaystation: '',
  },

  subwayname: function(e){
    this.setData({
      subwayname: e.detail.value
    })
  },

  searchSubway: function(){
    var map = require('../../map/map.js');
    var g = new map.SubwayMap();//加载线路图
    var subwaynum = map.findsubway(this.data.subwayname);//获取当前查询地铁id
    if (subwaynum == -1){//判断输入是否合法
      wx.showModal({
        title: '提示',
        content: '查无此线路！',
      })
    }
    else{//输入合法,开始查询
      var subwaystart = map.findsubwaystart(this.data.subwayname);//找到地铁起点
      var subwayend = map.findsubwaystart(g.getsubway(subwaynum).end);//找到地铁终点
      var subwaystations = new Array();//用于存放地铁经过的站点
      subwaystations[0] = subwaystart;
      var index = 1;
      for (var i = 0; i < 218; i++) {
        if (g.getroute(i).subway == subwaynum && g.getroute(i).start == subwaystart) {
          subwaystations[index] = g.getroute(i).end;
          subwaystart = g.getroute(i).end;
          index++;
        }
      }//查询经过的站点
      var stationssubways = new Array(subwaystations.length);//以下是对经过的站点再进行查询站点操作,查询是否可换乘,与查询站点操作相同
      for (var index = 0; index < subwaystations.length; index++){
        var stationsubways = new Array();
        var subways = new Array(10);
        for (var i = 0; i < 10; i++) {
          subways[i] = 0;
        }
        for (var i = 0; i < 218; i++) {
          if (g.getroute(i).start == subwaystations[index] || g.getroute(i).end == subwaystations[index])
            subways[g.getroute(i).subway] = 1;
        }
        for (var i = 0; i < 10; i++) {
          if (subways[i] == 1 && i != subwaynum) {
            stationsubways.push(i);
          }
        }
        var theword = "";
        for(var i=0;i<stationsubways.length;i++){
          if(i==0){
            theword+="可换乘："
          }
          theword +=(g.getsubway(stationsubways[i]).name+' ')
        }
        stationssubways[index] = theword;
      }
      console.log(stationssubways);
      var Stations = new Array();
      for (var i = 0; i < subwaystations.length; i++) {
        Stations[i] = { name: g.getstation(subwaystations[i]).name,
                        subwayname: stationssubways[i] }
      }
      console.log(this.data.subwayname)
      this.setData({
        resault_height: 20 + 'px',
        subwaystation: Stations,
        display: 'block',
        thissubwayname: this.data.subwayname,
      })
    }
  }
})