// pages/station/station.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    display: 'none',
    thisstationname: '',
    stationname: '',
    stationsubway: '',
  },
  stationname: function (e) {
    this.setData({
      stationname: e.detail.value
    })
  },

  searchStation: function () {
    var map = require('../../map/map.js');
    var g = new map.SubwayMap();//获得当前线路图
    var stationnum = map.findstation(this.data.stationname);//获得查询线路的id
    if(stationnum==-1){//判断查询的站点是否存在,不存在则提示用户"查无此站"
      wx.showModal({
        title: '提示',
        content: '查无此站！',
      })
    }
    else{//查询的站点存在,正式查询
      var stationsubways = new Array();//用于存放经过查询站点的地铁
      var count = 0;
      var subways = new Array(10);//判断地铁是否经过查询的站点
      for (var i = 0; i < 10; i++) {
        subways[i] = 0;
      }//初始化
      for (var i = 0; i < 218; i++) {
        if (g.getroute(i).start == stationnum || g.getroute(i).end == stationnum)
          subways[g.getroute(i).subway] = 1;
      }//遍历线路图中的路径
      for (var i = 0; i < 10; i++) {
        if(subways[i]==1){
          stationsubways[count] = i;
          count++;
        }
      }//subways转化为stationsubways
      console.log(subways)
      console.log(stationsubways)
      var Subways = new Array();
      for (var i = 0; i < stationsubways.length; i++) {
        Subways[i] = { name: g.getsubway(stationsubways[i]).name }
      }//获得查询出的线路的名字
      this.setData({
        resault_height: 20 + 'px',
        stationsubway: Subways,
        thisstationname: this.data.stationname,
        display: 'block',
      })
    }
  }
})