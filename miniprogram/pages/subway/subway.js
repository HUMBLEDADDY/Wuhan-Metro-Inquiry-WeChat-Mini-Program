// pages/subway/subway.js


Page({

  /**
   * 页面的初始数据
   */
  data: {
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
    var g = new map.SubwayMap();
    var subwaynum = map.findsubway(this.data.subwayname);
    if (subwaynum == -1){
      wx.showModal({
        title: '提示',
        content: '查无此线路！',
      })
    }
    else{
      var subwaystart = map.findsubwaystart(this.data.subwayname);
      var subwayend = map.findsubwaystart(g.getsubway(subwaynum).end);
      var subwaystations = new Array();
      subwaystations[0] = subwaystart;
      var index = 1;
      for (var i = 0; i < 436; i++) {
        if (g.getroute(i).subway == subwaynum && g.getroute(i).start == subwaystart) {
          subwaystations[index] = g.getroute(i).end;
          subwaystart = g.getroute(i).end;
          index++;
        }
      }
      var stationssubways = new Array(subwaystations.length);
      for (var index = 0; index < subwaystations.length; index++){
        var stationsubways = new Array();
        var subways = new Array(20);
        for (var i = 0; i < 20; i++) {
          subways[i] = 0;
        }
        for (var i = 0; i < 436; i++) {
          if (g.getroute(i).start == subwaystations[index] || g.getroute(i).end == subwaystations[index])
            subways[g.getroute(i).subway] = 1;
        }
        for (var i = 0; i < 20; i++) {
          if (i % 2 == 1) {
            subways[i] = 0;
          }
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
      this.setData({
        resault_height: 20 + 'px',
        subwaystation: Stations,
      })
    }
  }
})