<!DOCTYPE html>
<html lang="zh-Hant-TW">
<head>

<title>旅向世界Cheers！貼紙序號抽獎活動 | 台灣麒麟 KIRIN</title>
<meta property="og:site_name" content="旅向世界Cheers！貼紙序號抽獎活動 | 台灣麒麟 KIRIN">
<meta property="og:title" content="旅向世界Cheers！貼紙序號抽獎活動 | 台灣麒麟 KIRIN">

<?php include('include/head.php'); ?>
<style>

.page-intro #index #banner .top .plants > div {
    opacity: 0;
    bottom: -30px;
    transform: scale(0.5);
}
.page-transition-end #index #banner div .plants > div {
    transition: none;
}
.page-transition-end.mobile.ios #index #banner div .plants > div {
    transition: .15s linear 0s;
}
.page-intro #index #banner .right {
    transform: translate(425px, -339px) rotate(45deg);
}
.page-intro #index #banner .right .plants > div {
    opacity: 0;
    left: -169px;
    transform: scale(0.5);
}
.page-intro #index #banner .left {
    transform: translate(-925px, -339px) rotate(45deg);
}
.page-intro #index #banner .left .plants > div {
    opacity: 0;
    right: -163px;
    transform: scale(0.5);
}
.page-intro #index .caption {
    opacity: 0;
    background-position: 0 144px;
}
.page-intro #index .caption::after {
    opacity: 0;
    background-position: 0 30px;
}
.page-intro #index .products li .image {
    opacity: 0;
    transform: translateY(-50px);
}
.page-intro #index .products li .name {
    opacity: 0;
}
.page-intro #index .text,
.page-intro #index .btns {
    opacity: 0;
}

</style>
</head>
<body id="page-index" class="page-intro" data-page="Index">
    <?php include('include/loading.php'); ?>
    <?php include('include/fetching.php'); ?>
    <?php include('include/header.php'); ?>
    <div id="wrap">
        <div id="wrap2">
            <main id="main">
                <section id="index" class="section">
                    <div class="inner">
                        <div id="banner">
                            <div class="top">
                                <div class="plants"><div></div></div>
                            </div>
                            <div class="right">
                                <div class="plants"><div></div></div>
                            </div>
                            <div class="left">
                                <div class="plants"><div></div></div>
                            </div>
                        </div>
                        <h1 class="caption pos-a text-hide">旅向世界</h1>
                        <ul class="products">
                            <li class="pos-a">
                                <div class="image"><img src="./src/images/index/product-1.png" width="122"></div>
                                <div class="name">莫希托</div>
                            </li>
                            <li class="pos-a">
                                <div class="image"><img src="./src/images/index/product-2.png" width="121.5"></div>
                                <div class="name">檸檬可樂</div>
                            </li>
                        </ul>
                        <p class="text pos-a">
                            KIRIN會員至「全家便利商店」<br>
                            購買冰結旅途調酒<br>
                            <strong>RIMOWA</strong>旅行箱與<strong>LINE POINTS</strong>等你帶回家！
                        </p>
                        <div class="btns pos-a">
                            <a id="btn-index-join" class="btn" href="https://www.kirin.com.tw/member/?proc=connect&i=12089&s=45ce8bf8b8482d0184e8804c1cbdd5a8d2fb4050415b11963f44f8e9f2de9509&r=https://www.kirin.com.tw/hyoketsu/event/tabisuru2020/serial.php">立即參加</a>
                            <a id="btn-index-award-list" class="btn" href="#">前往中獎公告</a>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    </div>
    <div id="warnings"></div>
    <?php include('include/pop.php'); ?>
    <?php include('include/menu.php'); ?>
    <script src="./dist/bundle.js?v=20201012"></script>
</body>
</html>