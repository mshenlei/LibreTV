const CUSTOMER_SITES = {
      iqiyizyapi: {
        name: '🎬-爱奇艺-',
        api: 'https://iqiyizyapi.com/api.php/provide/vod',
        detail: 'https://iqiyizyapi.com',
    },
    dbzy: {
      name: '🎬豆瓣资源',
      api: 'https://caiji.dbzy5.com/api.php/provide/vod',
      detail: 'https://dbzy.tv',
    },
    tyyszy: {
      name: '🎬天涯影视',
      api: 'https://tyyszy.com/api.php/provide/vod',
      detail: 'https://tyyszy.com',
    },
    mtzyme: {
      name: '🎬茅台资源',
      api: 'https://caiji.maotaizy.cc/api.php/provide/vod',
      detail: 'https://mtzy.me',
    },
    wolongzywcom: {
      name: '🎬卧龙资源',
      api: 'https://wolongzyw.com/api.php/provide/vod',
      detail: 'https://wolongzyw.com',
    },
    ikunzycom: {
      name: '🎬iKun资源',
      api: 'https://ikunzyapi.com/api.php/provide/vod',
      detail: 'https://ikunzy.com',
    },
    dyttzyapicom: {
      name: '🎬电影天堂',
      api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
      detail: 'http://caiji.dyttzyapi.com',
    },
    wwwmaoyanzycom: {
      name: '🎬猫眼资源',
      api: 'https://api.maoyanapi.top/api.php/provide/vod',
      detail: 'https://www.maoyanzy.com',
    },
    cjlzcaijicom: {
      name: '🎬量子资源',
      api: 'https://cj.lzcaiji.com/api.php/provide/vod',
      detail: 'https://cj.lzcaiji.com',
    },
    360zycom: {
      name: '🎬360 资源',
      api: 'https://360zy.com/api.php/provide/vod',
      detail: 'https://360zy.com',
    },
    jszyapicom: {
      name: '🎬极速资源',
      api: 'https://jszyapi.com/api.php/provide/vod',
      detail: 'https://jszyapi.com',
    },
    wwwmoduzynet: {
      name: '🎬魔都资源',
      api: 'https://www.mdzyapi.com/api.php/provide/vod',
      detail: 'https://www.moduzy.net',
    },
    ffzyapicom: {
      name: '🎬非凡资源',
      api: 'https://api.ffzyapi.com/api.php/provide/vod',
      detail: 'https://cj.ffzyapi.com',
    },
    bfzytv: {
      name: '🎬暴风资源',
      api: 'https://bfzyapi.com/api.php/provide/vod',
      detail: 'https://bfzy.tv',
    },
    zuidaxyz: {
      name: '🎬最大资源',
      api: 'https://api.zuidapi.com/api.php/provide/vod',
      detail: 'https://zuida.xyz',
    },
    wujinzyme: {
      name: '🎬无尽资源',
      api: 'https://api.wujinapi.me/api.php/provide/vod',
      detail: 'https://wujinzy.com',
    },
    xinlangapicom: {
      name: '🎬新浪资源',
      api: 'https://api.xinlangapi.com/xinlangapi.php/provide/vod',
      detail: 'https://xinlangapi.com',
    },
    apiwwzytv: {
      name: '🎬旺旺资源',
      api: 'https://api.wwzy.tv/api.php/provide/vod',
      detail: 'https://api.wwzy.tv',
    },
    wwwsubozycom: {
      name: '🎬速播资源',
      api: 'https://subocaiji.com/api.php/provide/vod',
      detail: 'https://www.subozy.com',
    },
    jinyingzycom: {
      name: '🎬金鹰点播',
      api: 'https://jinyingzy.com/api.php/provide/vod',
      detail: 'https://jinyingzy.com',
    },
    p2100net: {
      name: '🎬飘零资源',
      api: 'https://p2100.net/api.php/provide/vod',
      detail: 'https://p2100.net',
    },
    apiukuapi88com: {
      name: '🎬U酷影视',
      api: 'https://api.ukuapi88.com/api.php/provide/vod',
      detail: 'https://www.ukuzy.com',
    },
    apiguangsuapicom: {
      name: '🎬光速资源',
      api: 'https://api.guangsuapi.com/api.php/provide/vod',
      detail: 'https://api.guangsuapi.com',
    },
    wwwhongniuzycom: {
      name: '🎬红牛资源',
      api: 'https://www.hongniuzy2.com/api.php/provide/vod',
      detail: 'https://www.hongniuzy.com',
    },
    caijimoduapicc: {
      name: '🎬魔都动漫',
      api: 'https://caiji.moduapi.cc/api.php/provide/vod',
      detail: 'https://caiji.moduapi.cc',
    },
    wwwryzywcom: {
      name: '🎬如意资源',
      api: 'https://pz.168188.dpdns.org/?url=https://cj.rycjapi.com/api.php/provide/vod',
      detail: 'https://www.ryzyw.com',
    },
    wwwhaohuazycom: {
      name: '🎬豪华资源',
      api: 'https://pz.168188.dpdns.org/?url=https://hhzyapi.com/api.php/provide/vod',
      detail: 'https://www.haohuazy.com',
    },
    bdzy1com: {
      name: '🎬百度云zy',
      api: 'https://pz.168188.dpdns.org/?url=https://api.apibdzy.com/api.php/provide/vod',
      detail: 'https://bdzy1.com',
    },
    lovedannet: {
      name: '🎬艾旦影视',
      api: 'https://pz.v88.qzz.io/?url=https://lovedan.net/api.php/provide/vod',
      detail: 'https://lovedan.net',
    },
    91mdme: {
      name: '🔞麻豆视频',
      api: 'https://91md.me/api.php/provide/vod',
      detail: 'https://91md.me',
    },
    91jpzywcom: {
      name: '🔞91-精品-',
      api: 'https://91jpzyw.com/api.php/provide/vod',
      detail: 'https://91jpzyw.com',
    },
    lbapibycom: {
      name: '🔞--AIvin-',
      api: 'http://lbapiby.com/api.php/provide/vod',
      detail: 'http://lbapiby.com',
    },
    apibwzym3u8com: {
      name: '🔞百万资源',
      api: 'https://api.bwzyz.com/api.php/provide/vod',
      detail: 'https://api.bwzym3u8.com',
    },
    apisouavzyvip: {
      name: '🔞souavZY',
      api: 'https://api.souavzy.vip/api.php/provide/vod',
      detail: 'https://api.souavzy.vip',
    },
    155zy2com: {
      name: '🔞155-资源',
      api: 'https://155api.com/api.php/provide/vod',
      detail: 'https://155zy2.com',
    },
    apiyutu.com: {
      name: '🔞玉兔资源',
      api: 'https://apiyutu.com/api.php/provide/vod',
      detail: 'https://apiyutu.com',
    },
    fhapi9com: {
      name: '🔞番号资源',
      api: 'http://fhapi9.com/api.php/provide/vod',
      detail: 'http://fhapi9.com',
    },
    wwwjingpinxcom: {
      name: '🔞精品资源',
      api: 'https://www.jingpinx.com/api.php/provide/vod',
      detail: 'https://www.jingpinx.com',
    },
    apilsbzy1com: {
      name: '🔞-老色逼-',
      api: 'https://apilsbzy1.com/api.php/provide/vod',
      detail: 'https://apilsbzy1.com',
    },
    thzy8me: {
      name: '🔞桃花资源',
      api: 'https://thzy1.me/api.php/provide/vod',
      detail: 'https://thzy8.me',
    },
    wwwyyzywcjcom: {
      name: '🔞优优资源',
      api: 'https://www.yyzywcj.com/api.php/provide/vod',
      detail: 'https://www.yyzywcj.com',
    },
    xiaojizylive: {
      name: '🔞小鸡资源',
      api: 'https://api.xiaojizy.live/provide/vod',
      detail: 'https://xiaojizy.live',
    },
    hsckzyxyz: {
      name: '🔞黄色仓库',
      api: 'https://hsckzy.xyz/api.php/provide/vod',
      detail: 'https://hsckzy.xyz',
    },
    apidanaizicom: {
      name: '🔞-大奶子-',
      api: 'https://apidanaizi.com/api.php/provide/vod',
      detail: 'https://apidanaizi.com',
    },
    jkunzyapicom: {
      name: '🔞jkun资源',
      api: 'https://jkunzyapi.com/api.php/provide/vod',
      detail: 'https://jkunzyapi.com',
    },
    lbapi9com: {
      name: '🔞乐播资源',
      api: 'https://lbapi9.com/api.php/provide/vod',
      detail: 'https://lbapi9.com',
    },
    Naixxzycom: {
      name: '🔞奶香资源',
      api: 'https://Naixxzy.com/api.php/provide/vod',
      detail: 'https://Naixxzy.com',
    },
    slapibf: {
      name: '🔞森林资源',
      api: 'https://beiyong.slapibf.com/api.php/provide/vod',
      detail: 'https://slapibf.com',
    },
    apilj: {
      name: '🔞辣椒资源',
      api: 'https://apilj.com/api.php/provide/vod',
      detail: 'https://apilj.com',
    },
    shayuapi: {
      name: '🔞鲨鱼资源',
      api: 'https://shayuapi.com/api.php/provide/vod',
      detail: 'https://shayuapi.com',
    },
    xzytv: {
      name: '🔞-幸资源-',
      api: 'https://xzybb2.com/api.php/provide/vod',
      detail: 'https://xzytv.com',
    },
    doudouzy: {
      name: '🔞豆豆资源',
      api: 'https://api.douapi.cc/api.php/provide/vod',
      detail: 'https://doudouzy.com',
    },
    didizycom: {
      name: '🔞滴滴资源',
      api: 'https://api.ddapi.cc/api.php/provide/vod',
      detail: 'https://didizy.com',
    },
    heiliaozy: {
      name: '🔞黑料资源',
      api: 'https://www.heiliaozyapi.com/api.php/provide/vod',
      detail: 'https://heiliaozy.cc',
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
