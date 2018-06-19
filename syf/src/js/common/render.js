define(['jquery', 'handlebars'], function($, handlebars) {
    var render = function(cource, target, data, isTure) {
        var tmp = $(cource).html();

        var template = handlebars.compile(tmp);

        var html = template(data);
        if (isTure) {
            $(target).html(html);
        } else {
            $(target).append(html);
        }
    }
    return render;
});