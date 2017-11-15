$(function () {
    $(document).on("click", '.js-toggle-code', function (e) {
        e.preventDefault();
        e.stopPropagation;
        var link = $(this),
            pre = link.next('pre');
        if(link.hasClass('collapsed')){
            link.removeClass('collapsed').html('- Collapse');
            pre.slideDown(300);
        }
        else {
            link.addClass('collapsed').html('+ Expand');
            pre.slideUp(300);
        }
    });
});