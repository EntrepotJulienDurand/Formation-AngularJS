'use strict';

var app=angular.module('collectify',['ngRoute','ngSanitize','ngCookies','ngStorage'])
    .config(['websiteconfig', function (websiteconfig) {
        console.log(websiteconfig);
    }])
    .run(['routingconfig', '$rootScope', function (routingconfig, $rootScope) {
        $rootScope.routingconfig = routingconfig;
    }]);
var elements=[
    {
        auteur:'foo',
        titre:'fooo',
        creeLe:'...'
    },
    {
        auteur:'bar',
        titre:'barrr',
        creeLe:'...'
    },
    {
        auteur:'baz',
        titre:'bazzz',
        creeLe:'...'
    }
];
