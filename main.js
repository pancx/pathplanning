const Map = require('./ppmLib').PpmLib; //import{PpmLib} from './ppmLib'

var map = new Map();
map.loadMap('obs2.ppm');

console.log('Width: ' + map.WIDTH + ', Hight: ' + map.HEIGHT);

//map.toPbm();


//map.saveAsPgmMap('obs2.pgm');
//var res = map.dijkstra([65, 100], [276, 100], 'path5_d_10.ppm');

//var res = map.dijkstra([25, 50], [76, 50], 'path0_dilate.ppm');
//var res = map.AStar([25, 50], [76, 50], 'path0_AStar.ppm');

//var res = map.dijkstra([150, 150], [350, 350], 'path1_dilate.ppm');
//var res = map.AStar([150, 150], [350, 350], 'path1_AStar_dilate_.ppm');
//var res = map.dijkstra([215, 167], [270, 310], 'path2_erode2_dilate_.ppm');
var res = map.AStar([215, 167], [270, 310], 'path2_AStar_heap.ppm');
//var res = map.AStar([100, 120], [330, 410], 'path3_AStar');//[460, 410]
//var res = map.AStar([180, 90], [320, 63], 'path4_AStar_200.ppm');

console.log(res[0].length);