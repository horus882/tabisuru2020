<!DOCTYPE html>
<html lang="zh-Hant-TW">
<?php include('include/head.php'); ?>
<body id="page-serial" class="page-intro part-intro" data-page="Serial">
    <?php include('include/loading.php'); ?>
    <?php include('include/fetching.php'); ?>
    <?php include('include/header.php'); ?>
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
                                    獲得<img src="src/images/serial/line_points-logo.png" width="186"><span class="value"></span> 點
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
                                            <input id="linePointsSerial" type="text" class="input-text" value="" readonly>
                                            <a class="link" href="#" target="_blank">前往兌換</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="btns">
                                    <a id="btn-serial-record" class="btn" href="record.php">中獎查詢</a>
                                    <a id="" class="btn btn-serial-continue" href="#">繼續輸入序號</a>
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
                                    <a id="btn-serial-record" class="btn" href="record.php">中獎查詢</a>
                                    <a id="" class="btn btn-serial-continue" href="#">繼續輸入序號</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    </div>
    <div id="warnings"></div>
    <?php include('include/pop.php'); ?>
    <?php include('include/menu.php'); ?>
    <script src="./dist/bundle.js"></script>
</body>
</html>