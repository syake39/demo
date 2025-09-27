// --- ハンバーガーメニューの開閉機能 ---

// HTMLからハンバーガーメニューのボタン要素を取得します。
const hamburger = document.getElementById('hamburger');
// HTMLからナビゲーションメニューの要素を取得します。
const spNav = document.getElementById('sp-nav');

// ハンバーガーボタンがクリックされた時の動作を設定します。
hamburger.addEventListener('click', () => {
    // ボタンに 'is-active' クラスを付けたり外したりします。(CSSで見た目を変更するため)
    hamburger.classList.toggle('is-active');
    // ナビゲーションメニューに 'is-active' クラスを付けたり外したりします。(CSSで表示/非表示を切り替えるため)
    spNav.classList.toggle('is-active');
});


// --- スプラッシュスクリーンの表示機能 ---

// ページのすべての要素（画像など）が読み込まれた後に実行します。
window.addEventListener('load', () => {
    // HTMLからスプラッシュスクリーンの要素を取得します。
    const splashScreen = document.getElementById('splash-screen');

    // 2秒後（2000ミリ秒後）に実行する処理を設定します。
    setTimeout(() => {
        // スプラッシュスクリーンを透明にする（フェードアウト開始）
        splashScreen.style.opacity = '0';
    }, 2000);

    // 2.5秒後（2500ミリ秒後）に実行する処理を設定します。
    setTimeout(() => {
        // スプラッシュスクリーンに 'is-hidden' クラスを追加して、完全に非表示にします。
        // これにより、下のコンテンツがクリックできるようになります。
        splashScreen.classList.add('is-hidden');
    }, 2500);
});

// --- 枯れ葉アニメーションの生成機能 ---

// HTMLの構造が読み込まれた直後に実行します。
document.addEventListener('DOMContentLoaded', () => {
    // 枯れ葉アニメーションを表示するためのコンテナ要素を取得します。
    const leavesContainer = document.getElementById('falling-leaves');
    
    // コンテナ要素が存在する場合のみ、以下の処理を実行します。
    if (leavesContainer) {
        // 画面に表示する葉の数を設定します。
        const numberOfLeaves = 20; 

        // 設定した数だけ、葉を生成する処理を繰り返します。
        for (let i = 0; i < numberOfLeaves; i++) {
            // 新しいdiv要素（これが1枚の葉になる）を作成します。
            const leaf = document.createElement('div');
            // 作成したdiv要素に 'leaf' というクラス名を設定します。(CSSでスタイルを適用するため)
            leaf.className = 'leaf';
            
            // 葉のプロパティをランダムに設定していきます。
            
            // 画面の左端からの位置をランダムに設定します。(0% ~ 100%)
            leaf.style.left = `${Math.random() * 100}vw`;
            
            // 葉が落ちきるまでの時間をランダムに設定します。(8秒 ~ 13秒)
            leaf.style.animationDuration = `${Math.random() * 5 + 8}s`;
            
            // 葉が落ち始めるまでの遅延時間をランダムに設定します。(0秒 ~ 5秒)
            leaf.style.animationDelay = `${Math.random() * 5}s`;
            
            // 葉の大きさをランダムに設定します。
            leaf.style.fontSize = `${Math.random() * 1 + 1}rem`;
            
            // 葉の種類（絵文字）をランダムに設定します。（もみじ or 枯れ葉）
            leaf.innerHTML = Math.random() > 0.5 ? '🍁' : '🍂';

            // 葉の色をランダムに設定します。
            const colors = ['#d4a24e', '#a45c26', '#d47b3b'];
            leaf.style.color = colors[Math.floor(Math.random() * colors.length)];
            
            // 設定が完了した葉を、コンテナ要素の中に追加します。
            leavesContainer.appendChild(leaf);
        }
    }
});

