<?php
    if (isset($_COOKIE['lang'])) {
        $lang = $_COOKIE['lang'];
    } else if (isset($_SERVER['HTTP_ACCEPT_LANGUAGE'])) {
        $prefLangs = explode(',', $_SERVER['HTTP_ACCEPT_LANGUAGE']);
        $prefLang = strtolower(substr($prefLangs[0], 0, 2));
        $lang = $prefLang === 'uk' ? 'uk' : 'en';
        setcookie('lang', $lang, time() + 3600 * 24 * 30, '/');
    } else {
        $lang = 'en';
    }
?>

<!DOCTYPE html>
<html lang="<?php echo $lang ?>">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="index, follow">
    <meta property="og:image" content="./img/logo.jpg">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:image" content="./img/logo.jpg">

    <?php if ($lang === 'en'): ?>
        <meta name="description" content="Creating websites that are imprinted into peoples’ minds; Impreent">
        <meta name="keywords" content="develop, development, web dev, website, site, get a website, web dev agency">
        <meta property="og:title" content=" Imprint Yourself Into Minds; Impreent">
        <meta property="og:description" content="Creating websites that are imprinted into peoples’ minds; Impreent">
        <meta name="twitter:title" content="Imprint Yourself Into Minds; Impreent">
        <meta name="twitter:description" content="Creating websites that are imprinted into peoples’ minds; Impreent">
        <title>Imprint Yourself Into Minds; Impreent</title>
    <?php else: ?>
        <meta name="description" content="Створюємо сайти, що закарбовуються в памʼяті людей; Impreent">
        <meta name="keywords" content="розробити, розробка, веб-розробка, вебсайт, сайт, отримати сайт">
        <meta property="og:title" content="Закарбуй Себе в Памʼяті Людей; Impreent">
        <meta property="og:description" content="Створюємо сайти, що закарбовуються в памʼяті людей; Impreent">
        <meta name="twitter:title" content="Закарбуй Себе в Памʼяті Людей; Impreent">
        <meta name="twitter:description" content="Створюємо сайти, що закарбовуються в памʼяті людей; Impreent">
        <title>Закарбуй Себе в Памʼяті Людей; Impreent</title>
    <?php endif; ?>

    <link rel="stylesheet" href="static/global.css?v=<?php echo time() ?>">
    <link rel="stylesheet" href="static/index.css?v=<?php echo time() ?>">
    <link rel="shortcut icon" href="img/logo1080.png" type="image/png">
    <script src="static/index.js?v=<?php echo time() ?>" defer></script>
</head>
<body>
    <div class="top-bg-blur">
        <div class="blur"></div><div class="tint"></div>
    </div>
    <nav>
        <img src="img/logo1080.png" alt="Impreent: Creating Websites That Are Imprinted into peoples’ minds">
        <div class="menu">
            <?php if ($lang === 'en'): ?>
                <a href="#services">Services</a>
                <a href="#work">Work</a>
                <a href="#contact">Contact</a>
                </div>
            <?php else: ?>
                <a href="#services">Послуги</a>
                <a href="#work">Кейси</a>
                <a href="#contact">Контактувати</a>
            <?php endif; ?>
        </div>
    </nav>
    <section class="s-intro">
        <?php if ($lang === 'en'): ?>
            <h1>
                <span>Impr<span style="color: var(--brand1)">ee</span>nt</span> 
                your image into peoples’ minds; <span>through a website</span>
            </h1>
            <a href="#services" class="secondary-btn">Explore more</a>
        <?php else: ?>
            <h1>
                <span>Зака<span style="color: var(--brand1)">р</span>буй</span> 
                себе в памʼяті людей; <span>через вебсайт</span>
            </h1>
            <a href="#services" class="secondary-btn">Дізнатись більше</a>
        <?php endif; ?>
    </section>
    <section class="s-how">
        <img src="img/lines-bg.png" draggable="false"
            alt="Crafting websites that: Charm people; Scale bussinesses; Cultivate loyalty;">
        <div class="bullet-line"></div>
        <?php if ($lang === 'en'): ?>
            <h1 class="bulleted-text"><span class="bullet"></span> Crafting websites that</h1>
            <p class="bulleted-text"><span class="bullet"></span> Charm people</p>
            <p class="bulleted-text"><span class="bullet"></span> Scale bussinesses</p>
            <p class="bulleted-text"><span class="bullet"></span> Cultivate loyalty</p>
        <?php else: ?>
            <h1 class="bulleted-text"><span class="bullet"></span> Створюємо сайти, що</h1>
            <p class="bulleted-text"><span class="bullet"></span> Подобаються людям</p>
            <p class="bulleted-text"><span class="bullet"></span> Розвивають бізнеси</p>
            <p class="bulleted-text"><span class="bullet"></span> Збільшують довіру</p>
        <?php endif; ?>
    </section>
    <section class="s-stats">
        <div class="row">
            <div class="stat">
                <h6 class="title">3</h6>
                <p><?php echo $lang === 'en' ? 'Clients helped' : 'Клієнти задоволено' ?></p>
            </div>
            <div class="stat">
                <h6 class="title">11</h6>
                <p><?php echo $lang === 'en' ? 'Websites created' : 'Сайтів створено' ?></p>
            </div>
        </div>
        <div class="row">
            <div class="stat">
                <h6 class="title">1</h6>
                <p><?php echo $lang === 'en' ? 'Services offer' : 'Послуг' ?></p>
            </div>
            <div class="stat">
                <h6 class="title">0</h6>
                <p><?php echo $lang === 'en' ? 'People frustrated' : 'Людей розчаровано' ?></p>
            </div>
        </div>
    </section>
    <section class="s-services" id="services">
        <img class="bg-img" src="img/lines-bg.png" alt="We do only websites and we do it best">
        <?php if ($lang === 'en'): ?>
            <h1>We do <span class="l l1">only</span> <span class="l l2">the best</span> <span>websites</span></h1>
            <p class="subtitle">Supporting <span>you</span> the whole way</p>
        <?php else: ?>
            <h1>Робимо <span class="l l1">лише</span> <span class="l l2">найкращі</span> <span>вебсайти</span></h1>
            <p class="subtitle">Підтримуємо <span>тебе</span> на всьому шляху</p>
        <?php endif; ?>
        <div class="services-wrapper">
            <div class="item">
                <img src="./img/services/layout.png" alt="Crafting layout for your website">
                <h3>1. <?php echo $lang === 'en' ? 'Crafting layout' : 'Створюємо верстку' ?></h3>
            </div>
            <div class="item">
                <img src="./img/services/copywrite.png" alt="Copywriting for your website">
                <h3>2. <?php echo $lang === 'en' ? 'Copywriting' : 'Пишемо копірайт' ?></h3>
            </div>
            <div class="item">
                <img src="./img/services/design.png" alt="Designing your website">
                <h3>3. <?php echo $lang === 'en' ? 'Designing' : 'Робимо дизайн' ?></h3>
            </div>
            <div class="item">
                <img src="./img/services/code.png" alt="Embedding into code your website">
                <h3>4. <?php echo $lang === 'en' ? 'Embedding into code' : 'Вбудовуємо в код' ?></h3>
            </div>
            <div class="item">
                <img src="./img/services/maintain.png" alt="Maintaining your website">
                <h3>5. <?php echo $lang === 'en' ? 'Maintaining' : 'Обслуговуємо' ?></h3>
            </div>
        </div>
    </section>
    <section class="s-work" id="work">
        <h1>
            <div class="line"></div>
            <?php if ($lang === 'en'): ?>
                Let our <span>best</span> work speak for itself
            <?php else: ?>
                Нехай наша <span>найкраща</span> робота говорить за себе
            <?php endif; ?>
        </h1>
        <div class="cards-wrapper">
            <div class="card">
                <div class="textbox">
                    <img class="img" src="img/work/viknatern.png" alt="">
                    <p class="title">
                        <?php echo $lang === 'en' ? 'Window store\'s landing page' : 'Лендінг магазину вікон' ?>
                    </p>
                    <a href="https://viknatern.com" class="site-link" target="_blank">
                        vikantern.com <span class="arrow-icon">↗</span>
                    </a>
                </div>
                <a class="see-more-btn" href="https://viknatern.com" target="_blank">
                    <?php echo $lang === 'en' ? 'SEE IT' : 'ПЕРЕЙТИ' ?> <span class="arrow-icon">↗</span>
                </a>
            </div> 
            <div class="card card-order">
                <div class="textbox">
                    <img class="img" src="img/lines-bg.png" alt="Maybe this site will be yours?">
                    <p class="title">
                        <?php echo $lang === 'en' ? 'Maybe here will be your site?' : 'Може тут буде твій сайт?' ?>
                    </p>
                    <a class="site-link dummy">greatsite.com</a>
                </div>
                <a class="see-more-btn" href="#contact"><?php echo $lang === 'en' ? 'ORDER' : 'ЗАМОВИТИ' ?></a>
            </div>
        </div>
    </section>
    <footer id="contact">
        <div class="boxes-wrapper">
            <div class="box bussiness-box">
                <h3 class="title">
                <?php echo $lang === 'en' ? 'Have a bussiness or other inquiry?' : 'Маєш ділові або інші запити?' ?></h3>
                <a href="mailto:contact@impreent.com">contact@impreent.com</a>
            </div>
        </div>
        <div class="bottom-menu">
            <p class="copy">&copy; 2024 Impreent</p>
            <p class="lang">
                <a data-lang="en">en</a>|<a data-lang="uk">ua</a>
            </p>
        </div>
    </footer>
    <div id="bottom"></div>
    <div class="teleport-particles"></div>
</body>
</html>