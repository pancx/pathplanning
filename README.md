# JavaScript Path Planning
This project aims to do the path planning for the map generated by [Intel® RealSense™ SLAM Library](https://software.intel.com/sites/products/realsense/slam/developer_guide.html)

# Functions
**loadMap**<br>
**saveAsPgmMap**<br>
**AStar**<br>
**dijkstra**<br>
**drawPath**<br>
**erode**<br>
**dilate**<br>

# Demo
```
node main.js
```
Test case,</br>
Map size: 300*200, start [65, 100], goal[276, 100]</br>
Red: obstacles or unknown cells</br>
White: accessible cells</br>
Green: visited cells when path searching</br>
Black: start, goal, path</br></br>
**dijkstra algorithm**</br>
![dijkstra](https://github.com/pancx/pathplanning/blob/master/pic/dijkstra.png "dijkstra")
</br></br>
**A * algorithm**</br>
![A*](https://github.com/pancx/pathplanning/blob/master/pic/AStar.png "A*")
</br></br>
Real map,</br>
![map](https://github.com/pancx/pathplanning/blob/master/pic/lab_map.png "map")
</br>
Map size: 430*462</br>
Start [215, 167],  goal [270, 310]</br>
</br></br>
**real map path planning**</br>
![path](https://github.com/pancx/pathplanning/blob/master/pic/wrong_path.png "path")
</br></br>
**eroded & dilated map path planning**</br>
![erode&dilate](https://github.com/pancx/pathplanning/blob/master/pic/erode_dilate_path.png "erode&dilate")
</br>
