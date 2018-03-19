var async = require('async');

var concurrencyCount = 0;
//fab返回
var fetchUrl = function (url, callback) {
    // do something with `content`
    var delay = parseInt((Math.random() * 10000000) % 2000, 10);
    concurrencyCount++;
    console.log('现在的并发数为：', concurrencyCount, '，正在抓取的是', url, '，耗时' + delay + '毫秒');
    setTimeout(function() {
        concurrencyCount--;
        callback(null, url + ' html content');
    },delay)
};
var urls = [];
for(var i = 0; i < 30; i++) {
    urls.push('http://datasource_' + i);
}
async.mapLimit(urls, 5, function(url, callback) {
    fetchUrl(url, callback);
}, function(err, res) {
    console.log('final: ');
    console.log(res);
})