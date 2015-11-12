(function () {
    var app = angular.module('modone', []);
    app.controller('plan_control', 
    function($scope,$http){
        $scope.nombres = [];
         $scope.nombrePlano;
         $scope.http;
        $scope.loadData = function() {             
            var configList = {
                method: "GET",
                url: "blueprints"
            };

            var response=$http(configList);

            response.success(function(data, status, headers, config) {
                $scope.nombres = data;
            });

            response.error(function(data, status, headers, config) {
                alert("The petition has failed. HTTP Status:"+status);
            });
};
        $scope.cargarCanvas = function() {             
                   var configList = {
                       method: "GET",
                       url: "blueprints/" +  $scope.nombrePlano
                   };
                    
                   var response=$http(configList);
                    $scope.http="blueprints/" +  $scope.nombrePlano;  
                   response.success(function(data, status, headers, config) {              
                       var cnv = document.getElementById("myCanvas");
                       var ctx = cnv.getContext("2d");
                       
                       var puntos = data;
                      
                      svg.setAttribute('width','800');
                       svg.setAttribute('height','600');
                       for(i=0; i< puntos.points.length ; i++){
                           //alert(puntos.points[i].x+ "," +puntos.points[i].y);
                           var svg = document.createElementNS("http://www.w3.org/2000/svg","line");
                           svg.setAttribute('x' + i, puntos.points[i].x);
                           svg.setAttribute('y' + i, puntos.points[i].y);
                       }
                   });

                   response.error(function(data, status, headers, config) {
                       alert("The petition has failed. HTTP Status:"+status);
                   });
       };
    }            
);

 
})();





