
var myApp = angular.module("myModule", [])
               .controller("myController", function ($scope) {

                   var country = {
                       Name: "USA",
                       Capital: "Washington, DC",
                       Flag: "/images/usa-flag.png"
                   }
                   $scope.Country = country;
               })