// ハンバーガーメニューの開閉
const hamburger = document.getElementById('hamburger');
const spNav = document.getElementById('sp-nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    spNav.classList.toggle('is-active');
});

// スプラッシュスクリーンの制御
window.addEventListener('load', () => {
    const splashScreen = document.getElementById('splash-screen');
    const siteWrapper = document.querySelector('.site-wrapper');

    // 2秒後にスプラッシュスクリーンを非表示にする
    setTimeout(() => {
        if (splashScreen) {
            splashScreen.classList.add('is-hidden');
        }
        if (siteWrapper) {
            siteWrapper.classList.remove('is-hidden');
        }
    }, 2000); 
});

