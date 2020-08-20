<!DOCTYPE html>
<html lang="zh-Hant-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=480, viewport-fit=cover">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="./dist/bundle.css">
</head>
<body class="page-intro part-intro" data-page="Serial"> <!---->
    <header id="header">
        <div class="inner">
            <div class="logo"><a href="./" class="text-hide">KIRIN</a></div>
        </div>
    </header>
    <div id="wrap">
        <div id="wrap2">
            <main id="main">
                <section id="serial" class="section">
                    <div class="inner">
                        <div class="content">
                            <div id="part-home" class="part" style="display: block;">
                                <div class="campaign-name"></div>
                                <div class="products">
                                    <img src="./src/images/serial/products.png" width="480">
                                </div>
                                <input id="serialNumber" type="text" class="input-text" placeholder="請輸入序號">
                                <div class="btns">
                                    <a id="btn-serial-send" class="btn" href="#">抽獎</a>
                                </div>
                            </div>
                            <div id="part-congrats" class="part">
                                <p class="caption"></p>
                                <p class="text">恭喜您中獎！</p>
                                <div class="points">
                                    獲得<img src="src/images/serial/line_points-logo.png" width="186"><span class="value">25</span>點
                                </div>
                                <div class="animation">
                                    <div class="coin-top coin"></div>
                                    <div class="coin-middle coin"></div>
                                    <div class="coin-bottom coin"></div>
                                    <div class="star-1 star"></div>
                                    <div class="star-2 star"></div>
                                    <div class="star-3 star"></div>
                                    <div class="star-4 star"></div>
                                    <div class="star-5 star"></div>
                                    <div class="star-6 star"></div>
                                </div>
                                <div id="serial-list" class="list">
                                    <p class="text">以下是您的中獎序號，請至Line兌換頁面兌換</p>
                                    <ul>
                                        <li>
                                            <input type="text" class="input-text" value="KWMHGAQRTYKWMHGAQRTY" readonly>
                                            <a class="link" href="#" target="_blank">前往兌換</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="btns">
                                    <a id="btn-serial-record" class="btn" href="record.html">中獎查詢</a>
                                    <a id="btn-serial-continue" class="btn" href="https://www.kirin.com.tw/member/?proc=connect&i=12089&s=45ce8bf8b8482d0184e8804c1cbdd5a8d2fb4050415b11963f44f8e9f2de9509&r=https://www.kirin.com.tw/hyoketsu/event/tabisuru2020/serial.php">繼續輸入序號</a>
                                </div>
                            </div>
                            <div id="part-loss" class="part">
                                <p class="caption"></p>
                                <p class="text">別氣餒！<br><span>這次可惜沒中獎</span></p>
                                <div class="animation">
                                    <div class="coin"></div>
                                    <div class="bubble-1 bubble-solid bubble"></div>
                                    <div class="bubble-2 bubble-solid bubble"></div>
                                    <div class="bubble-3 bubble-dashed bubble"></div>
                                    <div class="bubble-4 bubble-solid bubble"></div>
                                    <div class="bubble-5 bubble-dashed bubble"></div>
                                    <div class="bubble-6 bubble-dashed bubble"></div>
                                </div>
                                <div class="extra">
                                    還有機會抽<br><span>RIMOWA Classic Check-In L 30吋旅行箱</span> 乙個
                                </div>
                                <div class="btns">
                                    <a id="btn-serial-record" class="btn" href="record.html">中獎查詢</a>
                                    <a id="btn-serial-continue" class="btn" href="serial.html">繼續輸入序號</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    </div>
    <div id="warnings"></div>
    <div id="pop"></div>
    <div id="menu" class="">
        <div class="inner">
            <div class="title"></div>
            <div class="products"></div>
            <div class="btns">
                <a id="btn-menu-record" class="btn" href="record.html">中獎查詢</a>
                <a id="btn-menu-rule" class="btn" href="rule.html">活動辦法&獎項</a>
            </div>
        </div>
    </div>
    <a id="menu-toggle">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </a>
    <script src="./dist/bundle.js"></script>
</body>
</html>