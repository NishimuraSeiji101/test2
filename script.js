/*ホームページが最初に表示されたときにmasonryを一回だけ実行。整列させる*/
var $container = $('#contents'); //タイトル状に配置するコンテンツの親要素の指定
 
$container.imagesLoaded(function(){ 
  $container.masonry({
    itemSelector: '.grid-item', //タイトル状に配置する要素のclassの指定
    columnWidth: 250,
    gutterWidth: 25,
	//isFitWidth: true,　//親要素の幅に合わせてタイル状のコンテンツ数を自動調整
	//isAnimated: true,　//伸縮時のアニメーションの設定
    //percentPosition: true,
    isResizable: true,
    horizontalOrder: true,
    transitionDuration: '1.5s'
  });
});


const categoryLabel = '.js-category-label';
const categoryItem = '.grid-item';
const hideClass = 'is-hide';
const activeClass = 'is-active';

document.addEventListener('DOMContentLoaded', function () {
    const categoryLabels = document.querySelectorAll(categoryLabel);
    // 絞り込みを変更した時
    categoryLabels.forEach(function (item) {
        item.addEventListener('click', function () {
            categoryLabels.forEach(function (item) {
                item.classList.remove(activeClass);
            });
            this.classList.add(activeClass);
            const category = this.dataset.category;
            search_filter(category);
        
        var $container = $('#contents'); //タイトル状に配置するコンテンツの親要素の指定

        $container.masonry()

        $container.imagesLoaded(function(){ 
            $container.masonry({
            itemSelector: '.grid-item', //タイトル状に配置する要素のclassの指定
            columnWidth: 250,
            gutterWidth: 25,
            //isFitWidth: true,　//親要素の幅に合わせてタイル状のコンテンツ数を自動調整
            //isAnimated: true,　//伸縮時のアニメーションの設定
            //percentPosition: true,
            isResizable: true,
            originLeft: true,
            horizontalOrder: true,
            transitionDuration: '1.5s',
          });
        });
    });
    });
});

function search_filter(category) {
    const categoryItems = document.querySelectorAll(categoryItem);
    // 非表示状態を解除
    categoryItems.forEach(function (item) {
        item.classList.remove(hideClass);
    });

    // 値が空の場合はすべて表示
    if (category === '') {    
        $container.masonry({
            itemSelector: '.grid-item', //タイトル状に配置する要素のclassの指定
            columnWidth: '.grid-item',
            gutterWidth: 0,
            //isFitWidth: true,　//親要素の幅に合わせてタイル状のコンテンツ数を自動調整
            isAnimated: true,　//伸縮時のアニメーションの設定
            percentPosition: true,
            isResizable: true,
            originLeft: true,
            transitionDuration: '1.5s'
          });
        return;
    }
    // リスト内の各アイテムをチェック
    categoryItems.forEach(function (item) {
        const itemData = item.dataset.category;
        // 絞り込み対象かどうかを調べる
        if (itemData !== category) {
            item.classList.add(hideClass);
        }
    });
}
