var app = angular.module('myApp', ['ngRoute','ngAnimate']);

app.config(function($routeProvider){
  $routeProvider
  .when('/input', {
    templateUrl: "./sections/homepage/input.tpl.html"
  })
  .when('/chat', {
    templateUrl: "./sections/homepage/chat.tpl.html"
  })
  .otherwise('./input');
});