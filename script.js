// --- ハンバーガーメニューの機能 --- //

// HTMLからハンバーガーメニューボタン（三本線のアイコン）の要素を取得します。
const hamburger = document.getElementById('hamburger');
// HTMLからナビゲーションメニュー本体の要素を取得します。
const spNav = document.getElementById('sp-nav');

// ハンバーガーメニューボタンがクリックされた時の処理を設定します。
hamburger.addEventListener('click', () => {
    // ボタンに 'is-active' というクラスを追加・削除します。これにより、CSSで見た目を「×」印に変更できます。
    hamburger.classList.toggle('is-active');
    // ナビゲーションメニューに 'is-active' というクラスを追加・削除します。これにより、CSSでメニューを表示・非表示にできます。
    spNav.classList.toggle('is-active');
});

// ナビゲーションメニュー内のリンクがクリックされた時の処理を設定します。
spNav.addEventListener('click', () => {
    // メニューを閉じるために、ボタンとメニューから 'is-active' クラスを削除します。
    hamburger.classList.remove('is-active');
    spNav.classList.remove('is-active');
});


// --- スプラッシュスクリーン（一枚絵）の機能 --- //

// ページのすべての要素（画像など）が読み込まれた後に、以下の処理を開始します。
window.addEventListener('load', () => {
    // HTMLからスプラッシュスクリーン（一枚絵）の要素を取得します。
    const splashScreen = document.getElementById('splash-screen');
    // HTMLからサイト本体を囲んでいる要素を取得します。
    const siteWrapper = document.querySelector('.site-wrapper');

    // スプラッシュスクリーンとサイト本体の要素が両方存在する場合のみ、処理を続けます。
    if (splashScreen && siteWrapper) {
        // 2秒後（2000ミリ秒後）に、以下の処理を実行します。
        setTimeout(() => {
            // スプラッシュスクリーンを透明にする（フェードアウトを開始する）。
            splashScreen.style.opacity = '0';
            // サイト本体から 'is-hidden' クラスを削除して、表示されるようにします。
            siteWrapper.classList.remove('is-hidden');

            // フェードアウトのアニメーションが終わる0.5秒後（500ミリ秒後）に、以下の処理を実行します。
            setTimeout(() => {
                // スプラッシュスクリーンを完全に非表示にし、下のコンテンツが操作できるようにします。
                splashScreen.style.display = 'none';
            }, 500); // この時間は、CSSの transition の時間と一致させる必要があります。
            
        }, 2000); // 2秒間スプラッシュスクリーンを表示します。
    }
});

