Page({
  searchsubway: function () {
    wx.navigateTo({
      url: '../subway/subway',
    })
  },
  searchstation: function () {
    wx.navigateTo({
      url: '../station/station',
    })
  },
  searchway: function () {
    wx.navigateTo({
      url: '../way/way',
    })
  },
  feedback: function () {
    wx.navigateTo({
      url: '../feedback/feedback',
    })
  }
})