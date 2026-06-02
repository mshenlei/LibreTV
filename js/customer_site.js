const CUSTOMER_SITES = {
      iqiyizyapi: {
        name: '🎬-爱奇艺-',
        api: 'https://iqiyizyapi.com/api.php/provide/vod',
        detail: 'https://iqiyizyapi.com',
    }
};
// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
