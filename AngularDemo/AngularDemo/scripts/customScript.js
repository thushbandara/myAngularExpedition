﻿/// <reference path="angular.min.js" />

//method chaining to create a module and a controller and attach the controller with the module.
var myApp = angular
                .module("myModule", [])
                .controller("myController", function ($scope) {

                    var country = {
                        Name: "USA",
                        Capital: "Washington, DC",
                        Flag: "/images/usa-flag.png"
                    }
                    $scope.Country = country;
                })
                .controller("twowaybind", function ($scope) {

                    var country = {
                        Name: "SL",
                        Capital: "Colombo"
                    }
                    $scope.Country = country;
                })
                .controller("ngrepeat", function ($scope) {
                    var employees = [
                        { firstName: "Tharaka", lastName: "Herath", Gender: "Male", Salary: 35000 },
                        { firstName: "Thushara", lastName: "Bandara", Gender: "Male", Salary: 35000 },
                        { firstName: "Eranda", lastName: "Liyanage", Gender: "Male", Salary: 35000 },
                        { firstName: "Gihan", lastName: "Chanaka", Gender: "Male", Salary: 25000 },
                        { firstName: "Sharaniya", lastName: "Jayasekaran", Gender: "Female", Salary: 45345 },
                    ];

                    var countries = [
                        {
                            name: "Sri lanka",
                            cities: [
                              { name: "Colombo" },
                              { name: "Kandy" },
                              {name : "Trinco"}
                            ]
                        },
                        {
                            name: "Australia",
                            cities: [
                              { name: "Victoria" },
                              { name: "Melbourn" },
                              { name: "Sydney" }
                            ]
                        },
                        {
                            name: "UK",
                            cities: [
                              { name: "Chelsey" },
                              { name: "Birmingham" },
                              { name: "London" }
                            ]
                        },
                    ]

                    $scope.employees = employees;
                    $scope.countries = countries;
                })
                .controller("ngevents", function ($scope) {
                    var technologies = [
                        { Name: "C#", Likes: 0, Dislikes : 0},
                        { Name: "ASP Web API", Likes: 0, Dislikes: 0 },
                        { Name: "AngularJS", Likes: 0, Dislikes: 0 },
                        { Name: "SignalR", Likes: 0, Dislikes: 0 }
                    ];

                    $scope.technologies = technologies;

                    $scope.increaseLikes = function (technology) {
                        technology.Likes++;
                    }

                    $scope.increaseDislikes = function (technology) {
                        technology.Dislikes++;
                    }
                });

