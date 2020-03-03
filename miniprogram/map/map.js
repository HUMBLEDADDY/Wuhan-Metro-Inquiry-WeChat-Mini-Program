var ROUTES = [
  [0, 0, 1],  // 一号线西至东
  [0, 1, 2],
  [0, 2, 3],
  [0, 3, 4],
  [0, 4, 5],
  [0, 5, 6],
  [0, 6, 7],
  [0, 7, 8],
  [0, 8, 9],
  [0, 9, 10],
  [0, 10, 11],
  [0, 11, 12],
  [0, 12, 13],
  [0, 13, 14],
  [0, 14, 15],
  [0, 15, 16],
  [0, 16, 17],
  [0, 17, 18],
  [0, 18, 19],
  [0, 19, 20],
  [0, 20, 21],
  [0, 21, 22],
  [0, 22, 23],
  [0, 23, 24],
  [0, 24, 25],
  [0, 25, 26],
  [0, 26, 27],
  [0, 27, 28],
  [0, 28, 29],
  [0, 29, 30],
  [0, 30, 31],
  [2, 32, 33],  //二号线西至东
  [2, 33, 34],
  [2, 34, 35],
  [2, 35, 36],
  [2, 36, 37],
  [2, 37, 38],
  [2, 38, 39],
  [2, 39, 40],
  [2, 40, 41],
  [2, 41, 42],
  [2, 42, 43],
  [2, 43, 44],
  [2, 44, 45],
  [2, 45, 46],
  [2, 46, 19],
  [2, 19, 47],
  [2, 47, 48],
  [2, 48, 49],
  [2, 49, 50],
  [2, 50, 51],
  [2, 51, 52],
  [2, 52, 53],
  [2, 53, 54],
  [2, 54, 55],
  [2, 55, 56],
  [2, 56, 57],
  [2, 57, 58],
  [2, 58, 59],
  [2, 59, 60],
  [2, 60, 61],
  [2, 61, 62],
  [2, 62, 63],
  [2, 63, 64],
  [2, 64, 65],
  [2, 65, 66],
  [2, 66, 67],
  [2, 67, 68],
  [4, 69, 70], //三号线西至东
  [4, 70, 71],
  [4, 71, 72],
  [4, 72, 73],
  [4, 73, 74],
  [4, 74, 75],
  [4, 75, 76],
  [4, 76, 77],
  [4, 77, 13],
  [4, 13, 78],
  [4, 78, 79],
  [4, 79, 80],
  [4, 80, 43],
  [4, 43, 81],
  [4, 81, 82],
  [4, 82, 83],
  [4, 83, 84],
  [4, 84, 85],
  [4, 85, 86],
  [4, 86, 87],
  [4, 87, 88],
  [4, 88, 89],
  [4, 89, 37],
  [6, 90, 91],//四号线西至东
  [6, 91, 92],
  [6, 92, 93],
  [6, 93, 94],
  [6, 94, 95],
  [6, 95, 96],
  [6, 96, 97],
  [6, 97, 98],
  [6, 98, 99],
  [6, 99, 100],
  [6, 100, 101],
  [6, 101, 102],
  [6, 102, 77],
  [6, 77, 103],
  [6, 103, 104],
  [6, 104, 105],
  [6, 105, 106],
  [6, 106, 107],
  [6, 107, 108],
  [6, 108, 109],
  [6, 109, 110],
  [6, 110, 111],
  [6, 111, 112],
  [6, 112, 52],
  [6, 52, 51],
  [6, 51, 113],
  [6, 113, 114],
  [6, 114, 115],
  [6, 115, 116],
  [6, 116, 117],
  [6, 117, 118],
  [6, 118, 119],
  [6, 119, 120],
  [6, 120, 121],
  [6, 121, 122],
  [6, 122, 123],
  [8, 70, 124],  //六号线西至东
  [8, 124, 125],
  [8, 125, 126],
  [8, 126, 127],
  [8, 127, 128],
  [8, 128, 129],
  [8, 129, 130],
  [8, 130, 131],
  [8, 131, 107],
  [8, 107, 132],
  [8, 132, 133],
  [8, 133, 134],
  [8, 134, 135],
  [8, 135, 47],
  [8, 47, 20],
  [8, 20, 136],
  [8, 136, 82],
  [8, 82, 137],
  [8, 137, 138],
  [8, 138, 139],
  [8, 139, 140],
  [8, 140, 40],
  [8, 40, 141],
  [8, 141, 142],
  [8, 142, 143],
  [8, 143, 144],
  [10, 142, 145],  //七号线西至东
  [10, 145, 146],
  [10, 146, 79],
  [10, 79, 44],
  [10, 44, 147],
  [10, 147, 82],
  [10, 82, 21],
  [10, 21, 148],
  [10, 148, 149],
  [10, 149, 150],
  [10, 150, 49],
  [10, 49, 151],
  [10, 151, 111],
  [10, 111, 152],
  [10, 152, 153],
  [10, 153, 154],
  [10, 154, 155],
  [10, 155, 156],
  [10, 156, 157],
  [10, 157, 158],
  [10, 158, 159],
  [10, 159, 160],
  [10, 160, 161],
  [10, 161, 162],
  [10, 162, 163],
  [12, 164, 37],  //八号线西至东
  [12, 37, 165],
  [12, 165, 166],
  [12, 166, 167],
  [12, 167, 84],
  [12, 84, 22],
  [12, 22, 148],
  [12, 148, 168],
  [12, 168, 169],
  [12, 169, 116],
  [12, 116, 170],
  [14, 171, 172],  //八号线三期西至东
  [14, 172, 156],
  [16, 63, 173],  //十一号线西至东
  [16, 173, 174],
  [16, 174, 175],
  [16, 175, 176],
  [16, 176, 177],
  [16, 177, 178],
  [16, 178, 179],
  [16, 179, 180],
  [16, 180, 181],
  [16, 181, 182],
  [16, 182, 183],
  [16, 183, 184],
  [18, 88, 185],  //阳逻线西至东
  [18, 185, 186],
  [18, 186, 187],
  [18, 187, 188],
  [18, 188, 189],
  [18, 189, 190],
  [18, 190, 191],
  [18, 191, 192],
  [18, 192, 193],
  [18, 193, 194],
  [18, 194, 195],
  [18, 195, 196],
  [18, 196, 197],
  [18, 197, 198],
  [18, 198, 199],
  [1, 1, 0],  //一号线东至西
  [1, 2, 1],
  [1, 3, 2],
  [1, 4, 3],
  [1, 5, 4],
  [1, 6, 5],
  [1, 7, 6],
  [1, 8, 7],
  [1, 9, 8],
  [1, 10, 9],
  [1, 11, 10],
  [1, 12, 11],
  [1, 13, 12],
  [1, 14, 13],
  [1, 15, 14],
  [1, 16, 15],
  [1, 17, 16],
  [1, 18, 17],
  [1, 19, 18],
  [1, 20, 19],
  [1, 21, 20],
  [1, 22, 21],
  [1, 23, 22],
  [1, 24, 23],
  [1, 25, 24],
  [1, 26, 25],
  [1, 27, 26],
  [1, 28, 27],
  [1, 29, 28],
  [1, 30, 29],
  [1, 31, 30],
  [3, 33, 32],  //二号线东至西
  [3, 34, 33],
  [3, 35, 34],
  [3, 36, 35],
  [3, 37, 36],
  [3, 38, 37],
  [3, 39, 38],
  [3, 40, 39],
  [3, 41, 40],
  [3, 42, 41],
  [3, 43, 42],
  [3, 44, 43],
  [3, 45, 44],
  [3, 46, 45],
  [3, 19, 46],
  [3, 47, 19],
  [3, 48, 47],
  [3, 49, 48],
  [3, 50, 49],
  [3, 51, 50],
  [3, 52, 51],
  [3, 53, 52],
  [3, 54, 53],
  [3, 55, 54],
  [3, 56, 55],
  [3, 57, 56],
  [3, 58, 57],
  [3, 59, 58],
  [3, 60, 59],
  [3, 61, 60],
  [3, 62, 61],
  [3, 63, 62],
  [3, 64, 63],
  [3, 65, 64],
  [3, 66, 65],
  [3, 67, 66],
  [3, 68, 67],
  [5, 70, 69],  //三号线东至西
  [5, 71, 70],
  [5, 72, 71],
  [5, 73, 72],
  [5, 74, 73],
  [5, 75, 74],
  [5, 76, 75],
  [5, 77, 76],
  [5, 13, 77],
  [5, 78, 13],
  [5, 79, 78],
  [5, 80, 79],
  [5, 43, 80],
  [5, 81, 43],
  [5, 82, 81],
  [5, 83, 82],
  [5, 84, 83],
  [5, 85, 84],
  [5, 86, 85],
  [5, 87, 86],
  [5, 88, 87],
  [5, 89, 88],
  [5, 37, 89],
  [7, 91, 90],  //四号线东至西
  [7, 92, 91],
  [7, 93, 92],
  [7, 94, 93],
  [7, 95, 94],
  [7, 96, 95],
  [7, 97, 96],
  [7, 98, 97],
  [7, 99, 98],
  [7, 100, 99],
  [7, 101, 100],
  [7, 102, 101],
  [7, 77, 102],
  [7, 103, 77],
  [7, 104, 103],
  [7, 105, 104],
  [7, 106, 105],
  [7, 107, 106],
  [7, 108, 107],
  [7, 109, 108],
  [7, 110, 109],
  [7, 111, 110],
  [7, 112, 111],
  [7, 52, 112],
  [7, 51, 52],
  [7, 113, 51],
  [7, 114, 113],
  [7, 115, 114],
  [7, 116, 115],
  [7, 117, 116],
  [7, 118, 117],
  [7, 119, 118],
  [7, 120, 119],
  [7, 121, 120],
  [7, 122, 121],
  [7, 123, 122],
  [9, 124, 70],  //六号线东至西
  [9, 125, 124],
  [9, 126, 125],
  [9, 127, 126],
  [9, 128, 127],
  [9, 129, 128],
  [9, 130, 129],
  [9, 131, 130],
  [9, 107, 131],
  [9, 132, 107],
  [9, 133, 132],
  [9, 134, 133],
  [9, 135, 134],
  [9, 47, 135],
  [9, 20, 47],
  [9, 136, 20],
  [9, 82, 136],
  [9, 137, 82],
  [9, 138, 137],
  [9, 139, 138],
  [9, 140, 139],
  [9, 40, 140],
  [9, 141, 40],
  [9, 142, 141],
  [9, 143, 142],
  [9, 144, 143],
  [11, 145, 142],  //七号线东至西
  [11, 146, 145],
  [11, 78, 146],
  [11, 44, 78],
  [11, 147, 44],
  [11, 82, 147],
  [11, 21, 82],
  [11, 148, 21],
  [11, 149, 148],
  [11, 150, 149],
  [11, 49, 150],
  [11, 151, 49],
  [11, 111, 151],
  [11, 152, 111],
  [11, 153, 152],
  [11, 154, 153],
  [11, 155, 154],
  [11, 156, 155],
  [11, 157, 156],
  [11, 158, 157],
  [11, 159, 158],
  [11, 160, 159],
  [11, 161, 160],
  [11, 162, 161],
  [11, 163, 162],
  [13, 37, 164],  //八号线东至西
  [13, 165, 37],
  [13, 166, 165],
  [13, 167, 166],
  [13, 84, 167],
  [13, 22, 84],
  [13, 148, 22],
  [13, 168, 148],
  [13, 169, 168],
  [13, 116, 169],
  [13, 170, 116],
  [15, 172, 171],  //八号线三期东至西
  [15, 156, 172],
  [17, 173, 63],  //十一号线东至西
  [17, 174, 173],
  [17, 175, 174],
  [17, 176, 175],
  [17, 177, 176],
  [17, 178, 177],
  [17, 179, 178],
  [17, 180, 179],
  [17, 181, 180],
  [17, 182, 181],
  [17, 183, 182],
  [17, 184, 183],
  [19, 185, 88],  //阳逻线东至西
  [19, 186, 185],
  [19, 187, 186],
  [19, 188, 187],
  [19, 189, 188],
  [19, 190, 189],
  [19, 191, 190],
  [19, 192, 191],
  [19, 193, 192],
  [19, 194, 193],
  [19, 195, 194],
  [19, 196, 195],
  [19, 197, 196],
  [19, 198, 197],
  [19, 199, 198]
]

var SUBWAYS = [
  ["一号线", "泾河", "汉口北"],
  ["一号线", "汉口北", "泾河"],
  ["二号线", "天河机场", "佛祖岭"],
  ["二号线", "佛祖岭", "天河机场"],
  ["三号线", "沌阳大道", "宏图大道"],
  ["三号线", "宏图大道", "沌阳大道"],
  ["四号线", "柏林", "武汉火车站"],
  ["四号线", "武汉火车站", "柏林"],
  ["六号线", "东风公司", "金银潭公园"],
  ["六号线", "金银潭公园", "东风公司"],
  ["七号线", "园博园北", "青龙山地铁小镇"],
  ["七号线", "青龙山地铁小镇", "园博园北"],
  ["八号线", "金潭路", "梨园"],
  ["八号线", "梨园", "金潭路"],
  ["八号线三期", "军运村", "野芷湖"],
  ["八号线三期", "野芷湖", "军运村"],
  ["十一号线", "光谷火车站", "左岭"],
  ["十一号线", "左岭", "光谷火车站"],
  ["阳逻线", "后湖大道", "金台"],
  ["阳逻线", "金台", "后湖大道"]
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

var subway_num = 20;
var station_num = 200;
var route_num = 436;

var Queue = function () {
  var items = [];
  //入队
  this.enqueue = function (el) {
    items.push(el)
  }
  //出队
  this.dequeue = function () {
    return items.shift();
  }
  // 队头
  this.front = function () {
    return items[0]
  }
  //队是否为空
  this.isEmpty = function () {
    return items.length === 0;
  }
  //队的长度
  this.size = function () {
    return items.length;
  }
}
var Stations = function(name) {
  this.name = name;
}

function Routes(subway,start,end){
  this.subway = subway;
  this.start=start;
  this.end=end;
}

function Subways(name,start,end){
  this.name=name;
  this.start=start;
  this.end=end;
}

var SubwayMap = function(){
  var a=0;
  var stations = new Array()
  var routes = new Array()
  var subways = new Array()

  for (var i = 0; i < station_num; i++) {
    var thestation = new Stations(STATIONS[i]);
    stations.push(thestation);
  }

  for (var i = 0; i < route_num; i++){
    var theroute = new Routes(ROUTES[i][0], ROUTES[i][1], ROUTES[i][2]);
    routes.push(theroute);
  }
  for (var i = 0; i < subway_num; i++) {
    var thesubway = new Subways(SUBWAYS[i][0], SUBWAYS[i][1], SUBWAYS[i][2]);
    subways.push(thesubway);
  }
  this.getstation = function (a) {
    return stations[a];
  }
  this.getroute = function (a) {
    return routes[a];
  }
  this.getsubway = function (a) {
    return subways[a];
  }
  var initColor = function () {
    var color = {}
    for (var i = 0; i < station_num; i++) {
      color[station[i]] = 'white'
    }
    return color
  }
}

var findsubway = function (a){
  for(var i=0;i<subway_num;i++){
    if(SUBWAYS[i][0]==a)
      return i;
  }
}

var findstation = function (a) {
  for (var i = 0; i < station_num; i++) {
    if (STATIONS[i] == a)
      return i;
  }
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