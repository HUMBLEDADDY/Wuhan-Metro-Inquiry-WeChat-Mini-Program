// pages/way/way.js
Page({

  /**
   * 页面的初始数据
   */
  globalData: {

    dis : new Array(3),
    tim : new Array(3), 
  },
  onReady: function () {
   
  },

  data: {
    myway: '',
    myway1: '',
    myway2: '',
    wayend: '',
    waystart: '',
    display: 'none',
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
    var start = map.findstation(this.data.waystart); //this.data.waystart
    var end = map.findstation(this.data.wayend); //this.data.wayend
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
    if(start !=-1 && end !=-1)
    {
      if(this.globalData.dis.length==3){
        console.log(this.globalData.tim)
      }
      else{
    wx.showLoading({
      title: '首次加载需等待',
      mask: true
    })
    for (var i = 0; i < 3; i++) {
      this.globalData.dis[i] = new Array(200);
      this.globalData.tim[i] = new Array(200);
    }
    for (var r = 0; r < 3; r++) {//三种情况
      console.log(r)
      for (var i = 0; i < 200; i++) {//初始化dis和tim
        this.globalData.dis[r][i] = new Array(200);
        this.globalData.tim[r][i] = new Array(200);
      }
      for (var i = 0; i < 200; i++) {
        for (var j = 0; j < 200; j++) {
          this.globalData.dis[r][i][j] = new Array(100);
          this.globalData.tim[r][i][j] = 10000;
        }
      }
      for (var i = 0; i < 200; i++) {
        this.globalData.dis[r][i][i] = [];
        this.globalData.tim[r][i][i] = 0;
      }
      for (var i = 0; i < 218; i++) {
        this.globalData.dis[r][g.getroute(i).start][g.getroute(i).end] = [g.getroute(i).start, g.getroute(i).end];
        this.globalData.tim[r][g.getroute(i).start][g.getroute(i).end] = g.getroute(i).time;
        this.globalData.dis[r][g.getroute(i).end][g.getroute(i).start] = [g.getroute(i).end, g.getroute(i).start];
        this.globalData.tim[r][g.getroute(i).end][g.getroute(i).start] = g.getroute(i).time;
      }

      for (var k = 0; k < 200; k++) {//Floyd算法
        for (var i = 0; i < 200; i++) {
          for (var j = 0; j < 200; j++) {
            var change = 0;
            if (this.globalData.tim[r][i][k] + this.globalData.tim[r][k][j] - 10 < this.globalData.tim[r][i][j]) {//判断是否有需要换乘的可能
              var r1 = -1;
              var r1_start = (this.globalData.dis[r][i][k][this.globalData.dis[r][i][k].length - 2]);
              var r1_end = (this.globalData.dis[r][i][k][this.globalData.dis[r][i][k].length - 1]);
              var r2_start = (this.globalData.dis[r][k][j][0])
              var r2_end = (this.globalData.dis[r][k][j][1]);
              var flag = -1;
              for (var t = 0; t < 218; t++) {
                if (g.getroute(t).start == r1_start && g.getroute(t).end == r1_end || g.getroute(t).start == r1_end && g.getroute(t).end == r1_start) {
                  r1 = g.getroute(t).subway;
                  break;
                }
              }
              for (var t = 0; t < 218; t++) {
                if (g.getroute(t).start == r1_end || g.getroute(t).start == r1_end && g.getroute(t).subway == r1) {
                  if (g.getroute(t).end == r2_start || g.getroute(t).end == r2_end) {
                    flag = 1;
                    break;
                  }
                }
              }
              if (flag == -1) {//分三种情况
                if (r == 0) {
                  change = 4;
                }
                else if (r == 1) {
                  change = 10;
                }
                else if (r == 2) {
                  change = 0;
                }
              }
            }
            if (this.globalData.tim[r][i][k] + this.globalData.tim[r][k][j] + change < this.globalData.tim[r][i][j]) {//判断是否需要换乘
              var way = new Array(100);
              var l = 0;  
              for (var index = 0; this.globalData.dis[r][i][k][index] != null; index++) {
                way[index] = this.globalData.dis[r][i][k][index];
                l++
              }
              for (var index = 1; this.globalData.dis[r][k][j][index] != null; index++) {
                way[l] = this.globalData.dis[r][k][j][index];
                l++;
              }
              var way1 = new Array(l)
              for (var index = 0; index < l; index++) {
                way1[index] = way[index];
              }
              this.globalData.dis[r][i][j] = way1;//更新dis
              this.globalData.tim[r][i][j] = this.globalData.tim[r][i][k] + this.globalData.tim[r][k][j] + change;//更新tim
            }
            change  = 0
          }
        }
      }
    }
  }
  console.log(this.globalData.tim)
      var stationssubways = new Array(3);
      var waystations = new Array(3)
      for(var r=0;r<3;r++){
        stationssubways[r] = new Array(this.globalData.dis[r][start][end].length);
        for (var index = 0; index < this.globalData.dis[r][start][end].length; index++) {
          var stationsubways = new Array();
          var subways = new Array(10);
          for (var i = 0; i < 10; i++) {
            subways[i] = 0;
          }
          for (var i = 0; i < 218; i++) {
            if (g.getroute(i).start == this.globalData.dis[r][start][end][index] || g.getroute(i).end == this.globalData.dis[r][start][end][index])
              subways[g.getroute(i).subway] = 1;
          }
          for (var i = 0; i < 10; i++) {
            if (subways[i] == 1) {
              stationsubways.push(i);
            }
          }
          var theword = "";
          for (var i = 0; i < stationsubways.length; i++) {
            if (i == 0 && stationsubways.length >= 2) {
              theword += "可换乘："
            }
            theword += (g.getsubway(stationsubways[i]).name + ' ')
          }
          stationssubways[r][index] = theword;
        }
        waystations[r] = new Array(this.globalData.dis[r][start][end].length)
        wx.hideLoading()
        for (var i = 0; i < this.globalData.dis[r][start][end].length; i++) {
          waystations[r][i] = new Array()
        }
        for (var i = 0; i < this.globalData.dis[r][start][end].length; i++) {
          waystations[r][i] = {
            name: g.getstation(this.globalData.dis[r][start][end][i]).name,
            subwayname: stationssubways[r][i]
          };
        }
      }
     
      this.setData({
        display: 'block',
        myway: waystations[0],
        myway1: waystations[1],
        myway2: waystations[2]
      })
    }
  }
  
})