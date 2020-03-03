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
  searchway: function(){
    var map = require('../../map/map.js');
    var g = new map.SubwayMap();
    var dis = new Array(200);
    var start = map.findstation(this.data.waystart);
    var end = map.findstation(this.data.wayend);
    console.log(start)
    for(var i=0;i<200;i++){
      dis[i] = new Array(200);
    }
    for (var i = 0; i < 200; i++) {
      for(var j = 0;j < 200; j++){
        dis[i][j] = new Array(100);
      }
    }
    for(var i=0;i<200;i++){
      dis[i][i]=[];
    }
    for(var i=0;i<436;i++){
      dis[g.getroute(i).start][g.getroute(i).end] = [g.getroute(i).start, g.getroute(i).end]
    }
    for(var k=0;k<200;k++){
      for (var i = 0; i < 200; i++) {
        for (var j = 0; j < 200; j++) {
          if (dis[i][k].length + dis[k][j].length < dis[i][j].length){
            var way = new Array(100);
            var l=0;
            for (var index = 0; dis[i][k][index]!=null ;index++){
              way[index] = dis[i][k][index];
              l++
            }
            for (var index = 1; dis[k][j][index] != null; index++){
              way[l] = dis[k][j][index];
              l++;
            }
            var way1 = new Array(l)
            for(var index = 0;index<l;index++){
              way1[index] = way [index];
            }
            dis[i][j] = way1;
          }
        }
      }
    }
    console.log(dis)
    var waystations = new Array(dis[start][end].length)
    for (var i = 0; i < dis[start][end].length;i++){
      waystations[i] = new Array()
    }
    for (var i = 0; i < dis[start][end].length;i++){
      waystations[i] ={ name:g.getstation(dis[start][end][i]).name};
    }
    this.setData({
      myway: waystations,
    })
  }
})