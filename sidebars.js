/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

  竹子后庭玩法教学系列: [
    'Home',
    '基本元器件-电阻1',
    '基本元器件-电容',
    '基本元器件-电感与磁珠',
    '基本元器件-二极管',
    '基本元器件-晶体三级管',
    '基本元器件-场效应管',

  ],


  竹子的专业绳缚教学: [

    {
      label: '双系统极简安装指南',
      link: {
        type: 'generated-index',
        slug: '/竹子的专业绳缚教学',
        //description: 'describtion to be updated',
        keywords: ['x', 'x'],
      },
    },

    '双系统极简安装指南',
    '网页版串口助手的开发',
    'Ubuntu配置笔记',
    'ROS入门笔记',
    '机器视觉入门',
    '使用R语言进行数据分析',
    'CSS学习笔记',
    'HTML学习笔记',
    'JavaScript学习笔记',
    'Docker简易指南',
  
  
  ],


  王竹子的SM教学: [
    
    {
    type: 'category',
    label: '机器人队行政',
    link: {
      type: 'generated-index',
      //description: 'describtion to be updated',
      keywords: ['x', 'x'],
    },
    items: [
      '四校交流-策划案',
      '四校交流-策划案-正式',
      '团队知识库的搭建-理论',
      '队内影像资源管理方法',
      '大扫除-经验模板',
      '校门口车辆放行-流程',
      '参观实验室-经验模板',
      '动员大会-经验总结',
      '换届大会-经验总结',
      '破冰活动-经验总结',
      '出展活动-经验总结',
    ],
  },

  {
    type: 'category',
    label: '产品相关',
    link: {
      type: 'generated-index',
      //description: 'describtion to be updated',
      keywords: ['x', 'x'],
    },
    items: [
      '产品经理的日常',
      '中台的概念',
      '画图基础',
      '智能硬件产品经理的技术要求',
      '如何撰写一份BRD',
      '软件开发中的注意事项',
      '专业与分工',
      '关于复盘',
    ],
  },

  {
    type: 'category',
    label: '小技巧',
    link: {
      type: 'generated-index',
      //description: 'describtion to be updated',
      keywords: ['x', 'x'],
    },
    items: [
      'Windows常用命令',
      'Windows11个人初始化配置',
      'VSCode的便携模式',
      '开启Chrome（Edge）多线程下载',
      '移除Chrome（Edge）由组织管理',
      '用群晖自带反向代理实现HTTPS访问',
      '解决Google相册导出时间信息丢失问题',
      '使用gitignore忽略特殊文件',
      '3D打印：ABS与PLA的区别',
      '如何批量拉取Git仓库更新',
      '如何用Markdown写公众号文章',
      '如何快速删除node_modules',
      '如何为公众号文章增加特效',
      '如何在Linux下使用微信',
      '如何打印出手写效果的文字',
      '如何从乐曲中分离音轨',
      '如何高效制作幻灯片',
      '卡片式写作',
      '用reveal.js制作幻灯片',
      'npm和Yarn换源加速国内访问',
      'Vue.js小技巧',
      '正则表达式实用语句',
      'GitHub改Host',
      'MSI主板开启虚拟化的方法',
      'Git配置代理',
      '删除GitHub仓库中某个文件夹',
      '定制SublimeText3',
      '用Vercel加速Pages服务',
      'Doxygen注释规范',
      'AltiumDesigner安装库文件',
      'CentOS配置OhMyZsh',
      '如何快速制作一个启动盘',
      '使用VSCode进行远程开发',
      'Node.js和npm的安装与卸载（MacOS）',
    ],
  },

  {
    type: 'category',
    label: '生活黑客',
    link: {
      //slug: '/生活',
      type: 'generated-index',
      //description: '一些生活相关的笔记。',
      keywords: ['life', 'lifestyle'],
    },
    items: [
      '如何调制一杯鸡尾酒',
      '太阳高度角计算',
      '如何准备一个逃生背包',
      '谈谈未来的职业选择',
      //'如何合理配置个人资产',
      '读《黑客与画家》',
      //'英语六级-备考',
      //'音乐相关',
      'THEHack2019黑客马拉松',
      'Hack.init()黑客马拉松',
      '焊接大赛培训及总结',
      //'为什么要「站在巨人的肩膀上」',
      '如何不被AI取代',
      //'一些观点',
    ],
  },

  {
    type: 'category',
    label: '高效工作',
    link: {
      slug: '/王竹子的SM教学',
      type: 'generated-index',
      //description: 'describtion to be updated',
      keywords: ['x', 'x'],
    },
    items: [

      '基于RSSHub搭建RSS生成器（群晖Docker）', // CSDN
      '基于Bitwarden搭建密码管理器（群晖Docker）', // CSDN
      '基于acme.sh自动申请域名证书（群晖Docker）', // CSDN
      '基于Calibre搭建在线书库（群晖Docker）', // CSDN
      '如何实现外网RDP远控（frp）', // CSDN
      '使用rdp访问群晖NAS', // CSDN
      '如何用Markdown写一份简历', // CSDN
      '使用Rclone同步网盘数据',
      '为什么你需要一个知识库', // CSDN
      '个人文案排版规范', // CSDN todo
      '技术文档写作规范', // CSDN todo
      '如何保存易逝的文字',
      '个人知识库的搭建-基于Docusaurus', // CSDN
      'Windows初始化与软件推荐', // CSDN todo
      'Docusaurus极简部署指南', // CSDN todo
      'Hugo极简搭建指南', // CSDN todo
      '如何在iPad上运行VSCode', // CSDN
      '使用Markdown高效写作', // CSDN
      '用树莓派架设云打印服务器', // CSDN todo
      '用Graphviz绘制关系图', // CSDN todo
      'RSS-高效率的阅读方式',
      '如何在Markdown中使用LaTeX',
      '把回忆放心交给GooglePhotos',
      'VSCode生产力指南-环境配置', // CSDN todo
      'VSCode生产力指南-JupyterNotebook', // CSDN todo
      '在浏览器上运行VSCode（旧）',
      '如何配一台电脑',
    ],
  },

  ],

};

module.exports = sidebars;

// archive：
//'archive/Python学习笔记',
//'archive/STM32麦轮小车',
//'archive/RM校内赛-前期策划',
//'archive/报告书都要写些什么？',
//'archive/无人驾驶比赛',
//'archive/硬件模块',
//'archive/命令行基本操作'
//'archive/科技X的访谈',
//'archive/极简面包-烘培',
//'电路设计中常用的接口及关键点',
//'archive/Bash基础',
//'archive/从零搭建视觉开发环境（Docker-Linux）',
//'archive/Excel批量激活链接并转为图片',
//'archive/智能硬件产品开发流程',
//'archive/华广爬楼指北',
//'archive/小车游华广-比赛',
//'archive/麦昆小车-测评',
//'archive/STM32模块设计-LED',
//'archive/团队公开知识库的搭建',

// unlist：
//'unlist/电源设计-LDO跳变抑制能力对比测试记录',
//'unlist/CentOS安装Docker',
//'unlist/乐谱-Imagine',
//'unlist/Docker方式运行code-server',
//'unlist/T-Clock桌上小钟（旧）',
//'unlist/构建知识管理系统',
//'unlist/回归博客',
//'unlist/团队知识库搭建记录-DokuWiki',
//'unlist/个人知识库极简搭建指南-VuePress',
//'unlist/博客转至GitBook',
//'unlist/浅谈Bitcron博客平台',
//'unlist/基于docsify搭建个人Wiki',
//'unlist/PCB名片的设计',
//'unlist/如何用LaTeX写论文',

// preview
//'我是如何做数据容灾的',
//'如何用Markdown写学术论文',
//'AD基本操作-PCB绘制',
//'AD基本操作-库文件绘制',
