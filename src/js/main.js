import 'reset-css/sass/_reset.scss';
import '../scss/main.scss';
import '../scss/header.scss';
import '../scss/index.scss';
import '../scss/warnings.scss';

import 'jquery';
import {func, sendEvent, sendEventRdr, sendPage, echo} from './func';

$(window).on('load', function() {
    setTimeout(function() {
        $('body').removeClass('page-intro');
    }, 750);
});

$('#menu-toggle').click(function() {

    if ($(this).hasClass('open')) {

        $('#menu').fadeOut(350, function() {
            var scrollY = parseInt($('#wrap').css('top').replace('px', '')) * -1 + $('#header').height();
            $('#wrap').css({'position': 'relative', 'top': '0'});
            $(window).scrollTop(scrollY);
        })

        $(this).removeClass('open');

    } else {

        $(this).addClass('open');

        $('#wrap').css({ 'position': 'fixed', 'top': $(window).scrollTop() * -1 + $('#header').height() });

        $('#menu').fadeIn(350, function() {});

        $(window).scrollTop(0);

    }

});