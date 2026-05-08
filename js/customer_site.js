const CUSTOMER_SITES = {
    apiwwzytv: {
      name: '🎬旺旺资源',
      api: 'https://api.wwzy.tv/api.php/provide/vod',
      detail: 'https://api.wwzy.tv',
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
