import './assets/scss/all.scss';


console.log("Hello world!");

// footer
$(function() {
    // 在這裡放置你的 jQuery 代碼
    // $('.footer__item__title').click(function () {
      
    //   var targetListId = $(this).data('target');
    //   $('#' + targetListId).toggleClass('footer__item__contents--open');
    //   $(this).toggleClass('footer__item__title--close')
    // });
    $('.footer__item__title').click(function () {
      // 檢查螢幕寬度是否小於1024
      if (window.innerWidth < 1024) {
          var targetList = $(this).next('.footer__item__contents');
  
          if (targetList.hasClass('--close')) {
              // 滑入效果
              targetList.animate({
                  maxHeight: targetList[0].scrollHeight
              }, 300, function() {
                  targetList.removeClass('--close');
                  // 延遲 1 秒後移除 inline style
                  // setTimeout(function() {
                  //     targetList.removeAttr('style');
                  // }, 1000);
              });
          } else {
              // 滑出效果
              targetList.animate({
                  maxHeight: 0
              }, 300, function() {
                  targetList.addClass('--close');
                  // 延遲 1 秒後移除 inline style
                  setTimeout(function() {
                      targetList.removeAttr('style');
                  }, 1000);
              });
          }
  
          $(this).toggleClass('footer__item__title--close');
      }
  });
  
  
    // 其他的 jQuery 操作...
});
