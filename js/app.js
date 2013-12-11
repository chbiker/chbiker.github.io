/**
 * Setup Module with `highlight` filter
 */

var app = angular.module('JekyllApp',[]);

app.filter('highlight', function () {
    return function (text, filter) {
        if (filter === '') {
            return text;
        }
        else {
            return text.replace(new RegExp(filter, 'gi'), '<span style="background-color: rgba(255,255,0,0.4)">$&</span>');
        }
    };
});


function JekyllSearchController($scope) {
    $scope.posts = app.posts;
}