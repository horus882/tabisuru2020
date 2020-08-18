import 'reset-css/sass/_reset.scss';
import '../scss/main.scss';
import '../scss/header.scss';
import '../scss/index.scss';
import '../scss/warnings.scss';
import '../scss/menu.scss';

import 'jquery';
// import Parallax from 'parallax-js';
import {func, sendEvent, sendEventRdr, sendPage, echo} from './func';

// 載入完成，移除 class: page-intro
$(window).on('load', function() {
    setTimeout(function() {
        $('body').removeClass('page-intro');
    }, 750);
});

// 點擊漢堡
$('#menu-toggle').click(function() {

    if ($(this).hasClass('open')) {

        $('#menu').removeClass('show');

        setTimeout(function() {

            $('#menu').hide(0, function() {
                var scrollY = parseInt($('#wrap').css('top').replace('px', '')) * -1 + $('#header').height();
                $('#wrap').css({'position': 'relative', 'top': '0'});
                $(window).scrollTop(scrollY);
            })

        }, 350);

        $(this).removeClass('open');

    } else {

        $(this).addClass('open');

        $('#wrap').css({ 'position': 'fixed', 'top': $(window).scrollTop() * -1 + $('#header').height() });

        $('#menu').show(0, function() {
            $('#menu').addClass('show');
        });

        $(window).scrollTop(0);

    }

});

// var scene = document.getElementById('scene');
// var parallaxInstance = new Parallax(scene);
