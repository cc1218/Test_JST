define(function(){
this["JST"] = this["JST"] || {};
this["JST"]["templates/people/test_people.js"] = function (obj) {
    obj || (obj = {});
    var __t, __p = '', __e = _.escape, __j = Array.prototype.join;

    function print() {
        __p += __j.call(arguments, '')
    }

    with (obj) {
            __p += '<button id="add">添加</button><button id="clear">清空</button><h3>队列</h3><ul id="list"></ul>';
    }
    return __p
};
    return this["JST"];

});