/*
* @Author: pacino
* @Date:   2017-02-07 01:53:58
# @Email:  a30389@gmail.com
* @Last Modified by:    pacino
* @Last Modified time: 2017-02-07 02:16:45
*/

'use strict';
//一道微信的面试题

function _Lazyman() {
    this.task = [];
    var self = this;
    var fn = function(name) {
        console.log("Hi" + name);
        self.next();
    };
    this.task.push(fn);
    setTimeout(function() {
        self.next();
    }, 0);
};
_Lazyman.prototype = {
    next: function() {
        var fn = this.task.shift();
        fn && fn();
    },
    sleep: function(time) {
        var self = this;
        var fn = function() {
            setTimeout(function() {
                console.log("go sleep");
            }, time);
            self.next();
        };
        this.task.push(fn);
        return this;
    },
    sleepfirst: function(time) {
        var self = this;
        var fn = function() {
            setTimeout(function() {
                console.log("go sleep first");
            }, time);
            self.next();
        }
        this.task.unshift(fn);
        return this;
    },
    eat: function(food) {
        var self = this;
        var fn = function() {
            console.log("go eat" + food);
            self.next();
        };
        return this;
    }
};

function Lazyman(name) {
    return new _Lazyman();
};

Lazyman("jack").eat("apple").sleepfirst(1000);
