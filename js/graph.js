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

topologicalSorting();
/**
 12345
 */