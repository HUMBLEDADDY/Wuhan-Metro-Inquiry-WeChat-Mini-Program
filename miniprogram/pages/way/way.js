// pages/way/way.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myway: '',
    wayend: '',
    waystart: ''
  },

  waystart: function (e) {
    this.setData({
      waystart: e.detail.value
    })
  },

  wayend: function (e) {
    this.setData({
      wayend: e.detail.value
    })
  },

  searchway: function(){
    var map = require('../../map/map.js');
    var g = new map.SubwayMap();
    var dis = new Array(200);
    var start = map.findstation(this.data.waystart);
    var end = map.findstation(this.data.wayend);
    if (end == -1) {
      wx.showModal({
        title: '提示',
        content: '终点输入有误，查无此站！',
      })
    }
    if (start == -1) {
      wx.showModal({
        title: '提示',
        content: '起点输入有误，查无此站！',
      })
    }
    if(start !=1 && end !=1){
      for (var i = 0; i < 200; i++) {
        dis[i] = new Array(200);
      }
      for (var i = 0; i < 200; i++) {
        for (var j = 0; j < 200; j++) {
          dis[i][j] = new Array(100);
        }
      }
      for (var i = 0; i < 200; i++) {
        dis[i][i] = [];
      }
      for (var i = 0; i < 436; i++) {
        dis[g.getroute(i).start][g.getroute(i).end] = [g.getroute(i).start, g.getroute(i).end]
      }
      for (var k = 0; k < 200; k++) {
        for (var i = 0; i < 200; i++) {
          for (var j = 0; j < 200; j++) {
            if (dis[i][k].length + dis[k][j].length < dis[i][j].length) {
              var way = new Array(100);
              var l = 0;
              for (var index = 0; dis[i][k][index] != null; index++) {
                way[index] = dis[i][k][index];
                l++
              }
              for (var index = 1; dis[k][j][index] != null; index++) {
                way[l] = dis[k][j][index];
                l++;
              }
              var way1 = new Array(l)
              for (var index = 0; index < l; index++) {
                way1[index] = way[index];
              }
              dis[i][j] = way1;
            }
          }
        }
      }
      console.log(dis)
      var stationssubways = new Array(dis[start][end].length);
      for (var index = 0; index < dis[start][end].length; index++) {
        var stationsubways = new Array();
        var subways = new Array(20);
        for (var i = 0; i < 20; i++) {
          subways[i] = 0;
        }
        for (var i = 0; i < 436; i++) {
          if (g.getroute(i).start == dis[start][end][index] || g.getroute(i).end == dis[start][end][index])
            subways[g.getroute(i).subway] = 1;
        }
        for (var i = 0; i < 20; i++) {
          if (i % 2 == 1) {
            subways[i] = 0;
          }
          if (subways[i] == 1) {
            stationsubways.push(i);
          }
        }
        console.log(stationsubways);
        var theword = "";
        for (var i = 0; i < stationsubways.length; i++) {
          if (i == 0 && stationsubways.length>=2) {
            theword += "可换乘："
          }
          theword += (g.getsubway(stationsubways[i]).name + ' ')
        }
        stationssubways[index] = theword;
      }
      console.log(stationssubways)
      var waystations = new Array(dis[start][end].length)
      for (var i = 0; i < dis[start][end].length; i++) {
        waystations[i] = new Array()
      }
      for (var i = 0; i < dis[start][end].length; i++) {
        waystations[i] = { name: g.getstation(dis[start][end][i]).name, 
                           subwayname: stationssubways[i]};
      }
      this.setData({
        myway: waystations,
      })
    }
  }
})