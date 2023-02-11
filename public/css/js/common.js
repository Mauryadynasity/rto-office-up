$(document).ready(function() {
    let height = $('header').height();
    $('#bannerSec').css('margin-top', height + 'px');

    $('.navbar-toggler').click(function() {
        $('.mobile-sidebar').animate({
            width: "toggle"
        }, 400, "linear");
        let ics = $(this).find('span').attr('class');
        if(ics == 'fa fa-bars') {
            $(this).find('span').attr('class', 'fa fa-close');
        } else {
            $(this).find('span').attr('class', 'fa fa-bars');
        }
    })

    let search_txt = window.location.search.replace('?', '');
    if(search_txt && search_txt != "") {
        let wd = search_txt.split('=')[1];
        let html = $('.tab-head li a[data-id="#' + wd + '"]');
        setTimeout(() => {
            set_tab_position(html);
        }, 1000);        
    }

    $('.tab-head li a').click(function() {
        set_tab_position($(this));
    })
});
function toggle_mobile_menu_drp(e) {
    let cls = $(e).find('a').find('span').attr('class');
    if(cls == 'fa fa-plus pull-right') {
        $(e).find('.dropdown-mg-menu').slideDown();
        $(e).find('a').find('span').attr('class', 'fa fa-minus pull-right');
    } else {
        $('.mobile-sidebar .dropdown-mg-menu').hide('slow');
        $(e).find('a').find('span').attr('class', 'fa fa-plus pull-right');
    }
}
function set_tab_position(e) {
    let header_height = $('header').height();
    let section = $(e).attr('data-id');
    if(!section)
        return;
    let section_offset = $(section).offset().top;
    $('html, body').animate({'scrollTop': (section_offset - header_height - 50)}, 'slow');
}
function ajax_call(url, type, async, data, success_callback, failure_callback) {
    let options = {
        type: type,
        Accept: 'application/json',
        ContentType: 'application/json;charset=utf-8',
        url: url,
        dataType: "json",
        async: async,
        headers: { 'X-Frappe-CSRF-Token': frappe.csrf_token },
        data: data,
    }
    if (success_callback) {
        options.success = success_callback;
    } else {
        options.success = function (r) { };
    }
    if (failure_callback)
        options.error = failure_callback;
    $.ajax(options);
}
function form_req_url(url) {
    return (window.location.origin + '/api/method/' + url);
}