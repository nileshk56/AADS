/*find out whether there is a route between two nodes in a directed graph*/
function DFS(){
    var graph = [[1,2], [], [1,3], []];

    var arrVisited = [];
    function doDFS(node, endNode){
        arrVisited.push(node);
        console.log(node);
        if(endNode == node){
            return true;
        } 
        
        var isExist = false;
        for(var i = 0; i< graph[node].length; i++){
            if(arrVisited.indexOf(graph[node][i])==-1){
                isExist=doDFS(graph[node][i], endNode);
            }
        }

        return isExist;
    }

    console.log(doDFS(0, 3));
}

function BFS(){
    var graph = [[1,2], [], [1,3], []];
    var q=[];
    var arrV = [];
    q.push(0);
    //console.log(q);
    while(q.length){
        var tmp = q.shift();
        console.log(tmp);
        arrV.push(tmp);
        for(var i = 0; i< graph[tmp].length; i++){
            if(arrV.indexOf(graph[tmp][i]) == -1) {
                q.push(graph[tmp][i]);
            }
        }
    }
}

function topologicalSorting() {
    var graph = {
        "a" : ["d"],
        "f" : ["b","a"],
        "b" : ["d"],
        "d" : ["c"]
    };
    var arrVisited = {};
    var stackBuildOrder = [];

    for(var key in graph){
        if(!arrVisited[key]){
            doDFS(key);
        }
    }
    console.log(stackBuildOrder.reverse());

    function doDFS(node) {
        //console.log(node);
        arrVisited[node] = true;

        var length = graph[node] ? graph[node].length : 0;
        for(var i=0; i<length; i++){
            if(!arrVisited[graph[node][i]]) {
                doDFS(graph[node][i]);
            }
        }
        stackBuildOrder.push(node);
    }
}

function dijkstras(){
    var INF = 100;
    
    var G = [
        [0, 2, INF, 4, INF],
        [INF, 0, 1, INF, INF],
        [INF, INF, 0, INF, 3],
        [INF, INF, INF, 0, 10],
        [INF, INF, INF, INF, 0]
    ];

    var dist = [INF, INF, INF, INF, INF];
    var sptSet = [];

    dist[0] = 0;
    for(var i = 0; i<G.length; i++) {

        var min = fetchMin() ;
        console.log(min)
        sptSet[min] = true;

        updateDistance(min);
        console.log('dist',dist)

    }

    function fetchMin() {
        
        var min = INF;
        var minKey = -1;
        
        for(var i = 0; i<G.length; i++) {

            if(dist[i] < min && !sptSet[i]) {
                min = dist[i];
                minKey = i
            }

        }

        return minKey;
    }

    function updateDistance(key) {
        for(var j = 0; j<G.length; j++) {
            if(!sptSet[j] && G[key][j] != INF && (G[key][j] + dist[key]) < dist[j]) {
                dist[j] = G[key][j] + dist[key];
            }
        }
    }

    console.log(dist)
}