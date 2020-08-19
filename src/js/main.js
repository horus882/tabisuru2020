import 'reset-css/sass/_reset.scss';
import '../scss/main.scss';
import '../scss/header.scss';
import '../scss/index.scss';
import '../scss/serial.scss';
import '../scss/record.scss';
import '../scss/rule.scss';
import '../scss/warnings.scss';
import '../scss/menu.scss';

import 'jquery';
// import Parallax from 'parallax-js';
import {func, sendEvent, sendEventRdr, sendPage, echo} from './func';

var browser = {
    isMobile: (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) == true) ? true : false,
    isiOS: (/iPhone|iPad|iPod/i.test(navigator.userAgent) == true) ? true : false
}

if (browser.isMobile)   { $('body').addClass('mobile'); }
if (browser.isiOS)      { $('body').addClass('ios'); }

var Page = new Object();

Page = {
    Index: {
        Init: function() {
            echo('::::: Index :::::');
        },
        Loaded: function() {
            setTimeout(function() {
                $('body').removeClass('page-intro');
            }, 750);
        }
    },
    Serial: {
        Init: function() {
            echo('::::: Serial :::::');
        },
        Loaded: function() {
            setTimeout(function() {
                $('body').removeClass('page-intro');
            }, 750);
        }
    },
    Record: {
        Element: $('#record'),
        Init: function() {
            echo('::::: Record :::::');
            this.Set();
        },
        Loaded: function() {
            setTimeout(function() {
                $('body').removeClass('page-intro');
            }, 750);
        },
        Fetch: function() {

        },
        Set: function() {
            var delay = 0.3;
            $(this.Element.find('#serial-list li')).each(function(index, ele) {
                $(ele).css('transition-delay', delay + 's');
                delay += 0.1;
            });
        }
    },
    Rule: {
        Init: function() {
            echo('::::: Rule :::::');
        },
        Loaded: function() {
            setTimeout(function() {
                $('body').removeClass('page-intro');
            }, 750);
        }
    },
}

var currentPage = $('body').data('page');

Page[currentPage].Init();

$(window).on('load', function() {
    Page[currentPage].Loaded();
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
