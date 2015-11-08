angular.module('MyControllers', [])

    .controller('firstController', ['$scope', '$http', function($scope, $http){
        console.log("i am fired");
        $http.get('/displayMessage').success(function(data){
            console.log(data);
        })
    }])
