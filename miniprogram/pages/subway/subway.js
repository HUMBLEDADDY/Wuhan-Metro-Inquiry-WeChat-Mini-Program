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
  searchSubway: function(){
    var map = require('../../map/map.js');
    var g = new map.SubwayMap();
    var subwaynum = map.findsubway(this.data.subwayname);
    var subwaystart = map.findsubwaystart(this.data.subwayname);
    var subwayend = map.findsubwaystart(g.getsubway(subwaynum).end)
    var subwaystations = new Array();
    subwaystations[0] = subwaystart;
    var index = 1;
    for(var i=0;i<436;i++){
      if (g.getroute(i).subway == subwaynum && g.getroute(i).start == subwaystart){
        subwaystations[index]=g.getroute(i).end;
        subwaystart = g.getroute(i).end;
        index++;
      }
    }
    var Stations = new Array();
    for (var i = 0; i < subwaystations.length;i++){
      Stations[i] = { name: g.getstation(subwaystations[i]).name}
    }
    this.setData({
      resault_height: 20+'px',
      subwaystation: Stations,
    })
  }
})