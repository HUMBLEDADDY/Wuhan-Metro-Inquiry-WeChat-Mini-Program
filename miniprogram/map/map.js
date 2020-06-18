  var ROUTES = [
  [0, 0, 1, 2],  // 一号线西至东
  [0, 1, 2, 3],
  [0, 2, 3, 2],
  [0, 3, 4, 3],
  [0, 4, 5, 2],
  [0, 5, 6, 2],
  [0, 6, 7, 1],
  [0, 7, 8, 3],
  [0, 8, 9, 2],
  [0, 9, 10, 1],
  [0, 10, 11, 1],
  [0, 11, 12, 2],
  [0, 12, 13, 2],
  [0, 13, 14, 2],
  [0, 14, 15, 2],
  [0, 15, 16, 2],
  [0, 16, 17, 2],
  [0, 17, 18, 2],
  [0, 18, 19, 2],
  [0, 19, 20, 2],
  [0, 20, 21, 2],
  [0, 21, 22, 2],
  [0, 22, 23, 2],
  [0, 23, 24, 2],
  [0, 24, 25, 2],
  [0, 25, 26, 3],
  [0, 26, 27, 2],
  [0, 27, 28, 2],
  [0, 28, 29, 2],
  [0, 29, 30, 2],
  [0, 30, 31, 4],
  [1, 32, 33, 6],  //二号线西至东
  [1, 33, 34, 3],
  [1, 34, 35, 3],
  [1, 35, 36, 2],
  [1, 36, 37, 5],
  [1, 37, 38, 4],
  [1, 38, 39, 3],
  [1, 39, 40, 2],
  [1, 40, 41, 3],
  [1, 41, 42, 2],
  [1, 42, 43, 2],
  [1, 43, 44, 2],
  [1, 44, 45, 2],
  [1, 45, 46, 2],
  [1, 46, 19, 4],
  [1, 19, 47, 2],
  [1, 47, 48, 5],
  [1, 48, 49, 3],
  [1, 49, 50, 2],
  [1, 50, 51, 2],
  [1, 51, 52, 2],
  [1, 52, 53, 3],
  [1, 53, 54, 3],
  [1, 54, 55, 2],
  [1, 55, 56, 3],
  [1, 56, 57, 2],
  [1, 57, 58, 2],
  [1, 58, 59, 2],
  [1, 59, 60, 2],
  [1, 60, 61, 2],
  [1, 61, 62, 2],
  [1, 62, 63, 4],
  [1, 63, 64, 3],
  [1, 64, 65, 3],
  [1, 65, 66, 2],
  [1, 66, 67, 2],
  [1, 67, 68, 2],
  [2, 69, 70, 2], //三号线西至东
  [2, 70, 71, 2],
  [2, 71, 72, 2],
  [2, 72, 73, 2],
  [2, 73, 74, 2],
  [2, 74, 75, 2],
  [2, 75, 76, 2],
  [2, 76, 77, 3],
  [2, 77, 13, 5],
  [2, 13, 78, 2],
  [2, 78, 79, 2],
  [2, 79, 80, 2],
  [2, 80, 43, 2],
  [2, 43, 81, 3],
  [2, 81, 82, 2],
  [2, 82, 83, 2],
  [2, 83, 84, 2],
  [2, 84, 85, 2],
  [2, 85, 86, 2],
  [2, 86, 87, 2],
  [2, 87, 88, 3],
  [2, 88, 89, 3],
  [2, 89, 37, 3],
  [3, 90, 91, 2],//四号线西至东
  [3, 91, 92, 3],
  [3, 92, 93, 2],
  [3, 93, 94, 3],
  [3, 94, 95, 3],
  [3, 95, 96, 3],
  [3, 96, 97, 2],
  [3, 97, 98, 2],
  [3, 98, 99, 4],
  [3, 99, 100, 3],
  [3, 100, 101, 2],
  [3, 101, 102, 2],
  [3, 102, 77, 2],
  [3, 77, 103, 2],
  [3, 103, 104, 2],
  [3, 104, 105, 2],
  [3, 105, 106, 2],
  [3, 106, 107, 2],
  [3, 107, 108, 1],
  [3, 108, 109, 4],
  [3, 109, 110, 1],
  [3, 110, 111, 3],
  [3, 111, 112, 2],
  [3, 112, 52, 2],
  [3, 52, 51, 2],
  [3, 51, 113, 3],
  [3, 113, 114, 2],
  [3, 114, 115, 2],
  [3, 115, 116, 2],
  [3, 116, 117, 2],
  [3, 117, 118, 2],
  [3, 118, 119, 2],
  [3, 119, 120, 2],
  [3, 120, 121, 2],
  [3, 121, 122, 2],
  [3, 122, 123, 1],
  [4, 70, 124, 2],  //六号线西至东
  [4, 124, 125, 3],
  [4, 125, 126, 4],
  [4, 126, 127, 3],
  [4, 127, 128, 2],
  [4, 128, 129, 2],
  [4, 129, 130, 2],
  [4, 130, 131, 3],
  [4, 131, 107, 3],
  [4, 107, 132, 2],
  [4, 132, 133, 3],
  [4, 133, 134, 2],
  [4, 134, 135, 2],
  [4, 135, 47, 2],
  [4, 47, 20, 3],
  [4, 20, 136, 2],
  [4, 136, 82, 3],
  [4, 82, 137, 2],
  [4, 137, 138, 2],
  [4, 138, 139, 2],
  [4, 139, 140, 3],
  [4, 140, 40, 3],
  [4, 40, 141, 2],
  [4, 141, 142, 2],
  [4, 142, 143, 3],
  [4, 143, 144, 3],
  [5, 142, 145, 3],  //七号线西至东
  [5, 145, 146, 3],
  [5, 146, 79, 3],
  [5, 79, 44, 2],
  [5, 44, 147, 2],
  [5, 147, 82, 3],
  [5, 82, 21, 3],
  [5, 21, 148, 4],
  [5, 148, 149, 2],
  [5, 149, 150, 2],
  [5, 150, 49, 2],
  [5, 49, 151, 2],
  [5, 151, 111, 2],
  [5, 111, 152, 3],
  [5, 152, 153, 2],
  [5, 153, 154, 3],
  [5, 154, 155, 2],
  [5, 155, 156, 2],
  [5, 156, 157, 3],
  [5, 157, 158, 3],
  [5, 158, 159, 3],
  [5, 159, 160, 2],
  [5, 160, 161, 2],
  [5, 161, 162, 2],
  [5, 162, 163, 3],
  [6, 164, 37, 2],  //八号线西至东
  [6, 37, 165, 3],
  [6, 165, 166, 2],
  [6, 166, 167, 3],
  [6, 167, 84, 2],
  [6, 84, 22, 3],
  [6, 22, 148, 4],
  [6, 148, 168, 3],
  [6, 168, 169, 2],
  [6, 169, 116, 3],
  [6, 116, 170, 2],
  [7, 171, 172, 2],  //八号线三期西至东
  [7, 172, 156, 4],
  [8, 63, 173, 3],  //十一号线西至东
  [8, 173, 174, 2],
  [8, 174, 175, 3],
  [8, 175, 176, 2],
  [8, 176, 177, 2],
  [8, 177, 178, 1],
  [8, 178, 179, 3],
  [8, 179, 180, 2],
  [8, 180, 181, 3],
  [8, 181, 182, 3],
  [8, 182, 183, 2],
  [8, 183, 184, 2],
  [9, 88, 185, 2],  //二十一号线西至东
  [9, 185, 186, 2],
  [9, 186, 187, 3],
  [9, 187, 188, 3],
  [9, 188, 189, 2],
  [9, 189, 190, 3],
  [9, 190, 191, 3],
  [9, 191, 192, 3],
  [9, 192, 193, 4],
  [9, 193, 194, 4],
  [9, 194, 195, 2],
  [9, 195, 196, 3],
  [9, 196, 197, 2],
  [9, 197, 198, 3],
  [9, 198, 199, 3]
]

var SUBWAYS = [
  ["一号线", "泾河", "汉口北"],

  ["二号线", "天河机场", "佛祖岭"],

  ["三号线", "沌阳大道", "宏图大道"],

  ["四号线", "柏林", "武汉火车站"],
  // ["四号线", "武汉火车站", "柏林"],
  ["六号线", "东风公司", "金银潭公园"],
  // ["六号线", "金银潭公园", "东风公司"],
  ["七号线", "园博园北", "青龙山地铁小镇"],
  // ["七号线", "青龙山地铁小镇", "园博园北"],
  ["八号线", "金潭路", "梨园"],
  // ["八号线", "梨园", "金潭路"],
  ["八号线三期", "军运村", "野芷湖"],
  // ["八号线三期", "野芷湖", "军运村"],
  ["十一号线", "光谷火车站", "左岭"],
  // ["十一号线", "左岭", "光谷火车站"],
  ["二十一号线", "后湖大道", "金台"],
  // ["二十一号线", "金台", "后湖大道"]
]


var STATIONS = [
  "泾河", "三店", "码头潭公园", "东吴大道", "五环大道",//1
  "额头湾", "竹叶海", "舵落口", "古田一路", "古田二路",//2
  "古田三路", "古田四路", "汉西一路", "宗关", "太平洋",//3
  "硚口路", "崇仁路", "利济北路", "友谊路", "循礼门",//4
  "大智路", "三阳路", "黄浦路", "头道路", "二七路",//5
  "徐州新村", "丹水池", "新荣", "堤角", "藤子岗",//6
  "滠口新城", "汉口北", "天河机场", "航空总部", "宋家岗",//7
  "巨龙大道", "盘龙城", "宏图大道", "常青城", "金银潭",//8
  "常青花园", "长港路", "汉口火车站", "范湖", "王家墩东",//9
  "青年路", "中山公园", "江汉路", "积玉桥", "螃蟹岬",//10
  "小龟山", "洪山广场", "中南路", "宝通寺", "街道口",//11
  "广埠屯", "虎泉", "杨家湾", "光谷广场", "珞雄路",//12
  "华中科技大学", "光谷大道", "佳园路", "光谷火车站", "黄龙山路",//13
  "金融港北", "秀湖", "藏龙东街", "佛祖岭", "沌阳大道",//14
  "东风公司", "体育中心", "三角湖", "汉阳客运站", "四新大道",//15
  "陶家岭", "龙阳村", "王家湾", "双墩", "武汉商务区",//16
  "云飞路", "菱角湖", "香港路", "惠济二路", "赵家条",//17
  "罗家庄", "二七小路", "兴业路", "后湖大道", "市民之家",//18
  "柏林", "新庙村", "临嶂大道", "蔡甸广场", "凤凰路",//19
  "新农", "知音", "集贤", "新天", "黄金口",//20
  "孟家铺", "永安堂", "玉龙路", "十里铺", "七里庙",//21
  "五里墩", "汉阳火车站", "钟家村", "拦江路", "复兴路",//22
  "首义路", "武昌火车站", "梅苑小区", "楚河汉街", "青鱼嘴",//23
  "东亭", "岳家嘴", "铁机路", "罗家港", "园林路",//24
  "仁和路", "工业四路", "杨春湖", "武汉火车站", "车城东路",//25
  "江城大道", "老关村", "国博中心南", "国博中心北", "前进村",//26
  "建港", "马鹦路", "琴台", "武胜路", "汉正街",//27
  "六渡桥", "苗栗路", "三眼桥", "唐家墩", "石桥",//28
  "杨汊湖", "轻工大学", "园博园北", "金银湖", "金银湖公园",//29
  "园博园", "常码头", "取水楼", "徐家棚", "湖北大学",//30
  "新河街", "小东门", "瑞安街", "建安街", "湖工大",//31
  "板桥", "野芷湖", "新路村", "大花岭", "江夏客厅",//32
  "谭鑫培公园", "北华街", "纸坊大街", "青龙山地铁小镇", "金潭路",//33
  "塔子湖", "中一路", "竹叶山", "徐东", "汪家墩",//34
  "梨园", "军运村", "黄家湖地铁小镇", "湖口", "光谷同济医院",//35
  "光谷生物园", "光谷四路", "光谷五路", "光谷六路", "豹澥",//36
  "光谷七路", "长岭山", "未来一路", "未来三路", "左岭",//37
  "百步亭花园路", "新荣客运站", "幸福湾", "朱家河", "堪家矶",//38
  "青龙", "高车", "武湖", "沙口", "军民村",//39
  "武生院", "阳逻", "阳逻开发区", "施岗", "金台"//40
]



var subway_num = 10;
var station_num = 200;
var route_num = 218;

var Stations = function(name) {
  this.name = name;//站点名
}

var Routes = function(subway,start,end,time){
  this.subway = subway;//经过改路径的地铁
  this.start=start;//路径起点
  this.end=end;//路径终点
  this.time=time;//该路径所需的时间
}

var Subways = function(name,start,end){
  this.name=name;//地铁名
  this.start=start;//地铁首发站
  this.end=end;//地铁终点
}

var SubwayMap = function(){//加载线路图
  var a=0;
  var stations = new Array()
  var routes = new Array()
  var subways = new Array()
  for (var i = 0; i < station_num; i++) {
    var thestation = new Stations(STATIONS[i]);
    stations.push(thestation);
  }//遍历数据,push站点信息
  for (var i = 0; i < route_num; i++){
    var theroute = new Routes(ROUTES[i][0], ROUTES[i][1], ROUTES[i][2], ROUTES[i][3]);
    routes.push(theroute);
  }//遍历数据,push路径信息
  for (var i = 0; i < subway_num; i++) {
    var thesubway = new Subways(SUBWAYS[i][0], SUBWAYS[i][1], SUBWAYS[i][2]);
    subways.push(thesubway);
  }//遍历数据,push地铁信息
  this.getstation = function (a) {
    return stations[a];
  }
  this.getroute = function (a) {
    return routes[a];
  }
  this.getsubway = function (a) {
    return subways[a];
  }
}

var findsubway = function (a){
  for(var i=0;i<subway_num;i++){
    if(SUBWAYS[i][0]==a)
      return i;
  }
  return -1;
}

var findstation = function (a) {
  for (var i = 0; i < station_num; i++) {
    if (STATIONS[i] == a)
      return i;
  }
  return -1;
}

var findsubwaystart = function (a) {
  for (var i = 0; i < subway_num; i++) {
    if (SUBWAYS[i][0] == a){
      var start=SUBWAYS[i][1];
      for(var j=0;j<200;j++){
        if(STATIONS[j]==start)
         return j; 
      }
    }
  }
}

module.exports = {
  SubwayMap: SubwayMap,
  Stations: Stations,
  Routes: Routes,
  Subways: Subways,
  findsubway: findsubway,
  findstation: findstation,
  findsubwaystart: findsubwaystart,
}