// pages/station/station.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stationname: '',
    stationsubway: '',
  },
  stationname: function (e) {
    this.setData({
      stationname: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  searchStation: function () {
    var map = require('../../map/map.js');
    var g = new map.SubwayMap();
    console.log(g.getstation(0).name);
    var stationnum = map.findstation(this.data.stationname);
    console.log(this.data.stationname);
    var stationsubways = new Array();
    var count = 0;
    var subways = new Array(20);
    for(var i=0;i<20;i++){
      subways[i]=0;
    }
    for (var i = 0; i < 436; i++) {
      if (g.getroute(i).start == stationnum)
        subways[g.getroute(i).subway]=1;
    }
    for (var i = 0; i < 20; i++){
      if(i%2==1){
        subways[i]=0;
      }
      if (subways[i]==1){
        stationsubways[count]=i;
        count++;
      }
    }
    console.log(subways)
    console.log(stationsubways)
    var Subways = new Array();
    for (var i = 0; i < stationsubways.length; i++) {
      Subways[i] = { name: g.getsubway(stationsubways[i]).name }
    }
    console.log(Subways)
    this.setData({
      resault_height: 20 + 'px',
      stationsubway: Subways,
    })
  }
})