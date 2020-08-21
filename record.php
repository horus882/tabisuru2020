<!DOCTYPE html>
<html lang="zh-Hant-TW">
<?php include('include/head.php'); ?>
<body id="page-record" class="page-intro" data-page="Record">
    <?php include('include/loading.php'); ?>
    <?php include('include/fetching.php'); ?>
    <?php include('include/header.php'); ?>
    <div id="wrap">
        <div id="wrap2">
            <main id="main">
                <section id="record" class="section">
                    <div class="inner">
                        <div class="campaign-name"></div>
                        <h2 class="caption">中獎查詢</h2>
                        <div class="content">
                            <div id="part-result" class="part">
                                <div class="points">
                                    共 <span class="value"></span> 點
                                </div>
                                <div id="serial-list" class="list">
                                    <p class="text">以下是您的中獎序號，請至Line兌換頁面兌換</p>
                                    <ul>
                                        <li class="template">
                                            <input type="text" class="input-text" value="" readonly>
                                            <a class="link" href="#" target="_blank">前往兌換</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div id="part-no-result" class="part">
                                <div class="coin"></div>
                                <p class="text">目前尚未得獎</p>
                                <div class="bubbles">
                                    <div class="bubble-1 bubble-solid bubble"></div>
                                    <div class="bubble-2 bubble-solid bubble"></div>
                                    <div class="bubble-3 bubble-dashed bubble"></div>
                                    <div class="bubble-4 bubble-solid bubble"></div>
                                    <div class="bubble-5 bubble-dashed bubble"></div>
                                    <div class="bubble-6 bubble-dashed bubble"></div>
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