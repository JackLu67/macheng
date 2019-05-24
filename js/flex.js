(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      /*设置一个屏幕最大宽度临界值，当大于这个宽度时，字体也不放大了*/
      if (clientWidth >= 640) {
        docEl.style.fontSize = '85px';
      } else {
        /*750是设计稿的宽度，100是基数为了方便换算，也可以为20，或者浏览器默认值16(px)*/
        docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
      }
    };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);