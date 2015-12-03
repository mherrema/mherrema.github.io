var app = angular.module('app', []);



//    $scope.shuffleArray = function (d) {
//        for (var c = d.length - 1; c > 0; c--) {
//            var b = Math.floor(Math.random() * (c + 1));
//            var a = d[c];
//            d[c] = d[b];
//            d[b] = a;
//        }
//
//        return d
//    }
//
//
//    $scope.pick = function () {
//        $scope.pairs = [];
//
//        var firstArray = ["Sm9lbA==", "S2VudA==", "Sm9zaA==", "Sm9yZGFu", "TWl0Y2g=", "S3lsZQ=="];
//        var secondArray = ["S2VudA==", "TWl0Y2g=", "Sm9yZGFu", "Sm9lbA==", "S3lsZQ==", "Sm9zaA=="];
//        for (var i = 0; i < firstArray.length; i++) {
//            $scope.pairs[i] = {
//                first: firstArray[i],
//                second: secondArray[i]
//            };
//        }
//        console.log($scope.pairs);
//        
//    }
//
//    
//    $scope.getMyPerson = function(){
//        for(var i =0; i<$scope.pairs.length; i++){
//            if($scope.pairs[i].first == btoa($scope.currentPerson)){
//                console.log("found match");
//                $scope.myMatch = atob($scope.pairs[i].second);
//            }
//        }
//    }
//
//    $scope.pick();
//    $scope.checkWhoNeedsPayment();

app.controller('SecretSantaController', function($scope){
    $scope.person = ["S3lsZQ==","Sm9yZGFu","Sm9zaA==","TWl0Y2g=","Sm9lbA==", "QWx5c3Nh","QnJvb2tl","R2FiYnk=","U2Ft","TGluZHNleQ=="];
    $scope.givesTo = ["Sm9zaA==","Sm9lbA==","S3lsZQ==","Sm9yZGFu","TWl0Y2g=", "TGluZHNleQ==","U2Ft","QnJvb2tl","QWx5c3Nh","R2FiYnk="];
    
    $scope.getMyMatch = function(){
        for(var i = 0; i< $scope.person.length; i++){
            if(atob($scope.person[i]).toLowerCase() == $scope.textInput.toLowerCase()){
                $scope.yourMatch = atob($scope.givesTo[i]);
            }
        }
    };
    
});