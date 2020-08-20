import 'reset-css/sass/_reset.scss';
import '../scss/main.scss';
import '../scss/header.scss';
import '../scss/index.scss';
import '../scss/serial.scss';
import '../scss/record.scss';
import '../scss/rule.scss';
import '../scss/warnings.scss';
import '../scss/menu.scss';
import '../scss/loading.scss';
import '../scss/fetching.scss';

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
    _data: {
        duration: 750
    },
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
            var self = this;
            $('#btn-serial-send').click(function(e) {
                e.preventDefault();
                if ($('#serialNumber').val() == '') {
                    alert('請輸入序號');
                    $('#serialNumber').focus();
                    return false;
                }
                var serialNumber = $('#serialNumber').val();
                self.Send(serialNumber);
            });
            $('.btn-serial-continue').click(function(e) {
                e.preventDefault();
                $('#serialNumber').val('');
                $('#serial .part:visible').fadeOut(Page._data.duration, function() {
                    $('body').addClass('part-intro');
                    $('#part-home').fadeIn(Page._data.duration);
                });
            });
        },
        Loaded: function() {
            var self = this;
            setTimeout(function() {
                self.Check();
            }, 100);
        },
        Check: function() {
            var self = this;
            // 假資料
            // var resp = 'loggedIn';
            $.ajax({
                type: 'POST',
                cache: false,
                // dataType: 'json',
                // data: data,
                url: 'api/checkAuth.php',
                success: function(resp) {
                    if (resp == 'notLoggedIn') {
                        alert('您尚未登入KIRIN會員');
                        location.href = './';
                    } else if (resp == 'loggedIn') {
                        // setTimeout(function() {
                            $('body').removeClass('page-intro');
                        // }, 750);
                    }
                },
                error: function() {
                    alert('網路發生錯誤，請稍後再試。');
                }
            });
        },
        Send: function(serialNumber) {
            $('#fetching').fadeIn(Page._data.duration);
            // 假資料
            // var resp = {
            //     status: 'success',        // (狀態，字串，success 送出成功、used 有序號已被使用過、fail 無效token等因素、invalid 無效的序號、notLoggedIn 未登入)
            //     data: {
            //         serial: 'L42YOTAQ',  // (line points序號，字串)
            //         result: 'true',      // (中獎結果，字串，true 中獎、false 沒中獎),
            //         point:  '5'          // (中獎點數，字串)
            //     }
            // }
            $.ajax({
                type: 'POST',
                cache: false,
                dataType: 'json',
                data: {serial: serialNumber},
                url: 'api/sendSerial.php',
                success: function(resp) {
                    $('#fetching').fadeOut(Page._data.duration);
                    if (typeof(resp) == 'object' || typeof(resp) == 'Object') {
                        if (resp.status == 'used') {
                            alert('序號已使用');
                        } else if (resp.status == 'invalid') {
                            alert('無效的序號');
                        } else if (resp.status == 'notLoggedIn') {
                            alert('您尚未登入KIRIN會員');
                            location.href = './';
                        } else if (resp.status == 'fail') {
                            alert('發生錯誤');
                        } else if (resp.status == 'success') {
                            $('#part-home').fadeOut(Page._data.duration, function() {
                                if (resp.data.result == 'true' || resp.data.result == true) {
                                    $('#part-congrats').show();
                                    $('#part-congrats .points .value').text(resp.data.point);
                                    $('#linePointsSerial').val(resp.data.serial);
                                    $('#part-congrats #serial-list .link').attr('href', 'https://points.line.me/pointcode?pincode=' + resp.data.serial);
                                } else if (resp.data.result == 'false' || resp.data.result == false) {
                                    $('#part-loss').show();
                                }
                                setTimeout(function() {
                                    $('body').removeClass('part-intro');
                                }, 500);
                            });
                        }
                    }
                },
                error: function() {
                    alert('網路發生錯誤，請稍後再試。');
                }
            });
        }
    },
    Record: {
        Element: $('#record'),
        Init: function() {
            echo('::::: Record :::::');
        },
        Loaded: function() {
            var self = this;
            setTimeout(function() {
                self.Check();
            }, 100);
        },
        Check: function() {
            var self = this;
            // 假資料
            // var resp = 'loggedIn';
            // if (resp == 'notLoggedIn') {
            //     alert('您尚未登入KIRIN會員');
            //     location.href = './';
            // } else if (resp == 'loggedIn') {
            //     self.Fetch();
            // }
            $.ajax({
                type: 'POST',
                cache: false,
                // dataType: 'json',
                // data: data,
                url: 'api/checkAuth.php',
                success: function(resp) {
                    if (resp == 'notLoggedIn') {
                        alert('您尚未登入KIRIN會員');
                        location.href = './';
                    } else if (resp == 'loggedIn') {
                        self.Fetch();
                    }
                },
                error: function() {
                    alert('網路發生錯誤，請稍後再試。');
                }
            });
        },
        Fetch: function() {
            var self = this;
            // 假資料
            // var resp = {
            //     status: 'success',    // (狀態，字串，success 送出成功、fail 無效token等因素、notLoggedIn 未登入)
            //     data: {
            //         point: 25,        // (LINE Points 點數總計，字串)
            //         list: [           // (得獎的序號，陣列)
            //             'AL42YOTAQ',
            //             'BL42YOTAW',
            //             'CL42YOTAE',
            //             'DL42YOTAR',
            //             'EL42YOTAT'
            //         ]
            //     }
            // }
            $.ajax({
                type: 'POST',
                cache: false,
                dataType: 'json',
                // data: null,
                url: 'api/getRecords.php',
                success: function(resp) {
                    $('#fetching').fadeOut(Page._data.duration);
                    if (typeof(resp) == 'object' || typeof(resp) == 'Object') {
                        if (resp.status == 'notLoggedIn') {
                            alert('您尚未登入KIRIN會員');
                            location.href = './';
                        } else if (resp.status == 'fail') {
                            alert('發生錯誤');
                        } else if (resp.status == 'success') {
                            if (resp.data.point == 0) {
                                $('#part-no-result').fadeIn(Page._data.duration);
                                $('body').removeClass('page-intro');
                            } else if (resp.data.point > 0) {
                                $('#part-result').fadeIn(Page._data.duration);
                                self.Set(resp);
                            }
                        }
                    }
                },
                error: function() {
                    alert('網路發生錯誤，請稍後再試。');
                }
            });
        },
        Set: function(resp) {
            $('#part-result .points .value').text(resp.data.point);
            for (var i = 0; i < resp.data.list.length; i++) {
                echo(i);
                var template = $('#serial-list .template').clone();
                template.find('.input-text').val(resp.data.list[i]);
                template.find('.link').attr('href', 'https://points.line.me/pointcode?pincode=' + resp.data.list[i]);
                template.removeClass('template');
                $('#serial-list ul').append(template);
            }
            var delay = 0.3;
            $(this.Element.find('#serial-list li')).each(function(index, ele) {
                $(ele).css('transition-delay', delay + 's');
                delay += 0.1;
            });
            setTimeout(function() {
                $('body').removeClass('page-intro');
            }, 750);
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
