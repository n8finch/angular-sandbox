/// <reference path="angular.js" />

var AuthorApp = angular.module('AuthorApp', []);

AuthorApp.controller("MyController", function($scope) {
	$scope.authors = [
		{ 'name': 'Nate Finch'},
		{ 'name': 'Megan Finch'},
		{ 'name': 'Olivia Finch'},
		{ 'name': 'Zach Finch'}
	];
});