// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: '王竹子的SM教学频道',
    tagline: 'Front-end Web Developer',
    url: 'https://wangzhuzi.zhihu.blog',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'wangzhuzi', // Usually your GitHub org/user name.
    projectName: 'wangzhuzi.zhihu.blog', // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'zh-CN',
        locales: ['zh-CN'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    path: 'docs',
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/junjieweb/junjieweb.github.io/tree/main',
                },
                blog: {
                    showReadingTime: true,
                    postsPerPage: 5,
                    blogSidebarCount: 'ALL',
                    blogSidebarTitle: 'All our posts',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/junjieweb/junjieweb.github.io/tree/main',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            liveCodeBlock: {
                playgroundPosition: 'bottom',
            },
            docs: {
                sidebar: {
                    hideable: true,
                    autoCollapseCategories: true,
                },
            },
            colorMode: {
                defaultMode: 'light',
                disableSwitch: false,
                respectPrefersColorScheme: true,
            },
            announcementBar: {
                id: 'announcementBar-2', // Increment on change
                // content: `⭐️ If you like this site, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/junjieweb/junjieweb.github.io">GitHub</a>`,
                content: `⭐️ 如果你喜欢这个网站，在 <a style="color: red" target="_blank" rel="noopener noreferrer" href="https://github.com/junjieweb/junjieweb.github.io">GitHub</a> 上给它一颗 ⭐ `,
                // isCloseable: false, // 是否可关闭
            },
            // image: 'img/docusaurus-soc.png',
            navbar: {
                title: '王竹子的SM教学频道',
                logo: {
                    alt: 'My Site Logo',
                    src: 'img/logo.svg',
                    srcDark: 'img/docusaurus_keytar.svg',
                    width: 32,
                    height: 32,
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'MDN',
                        position: 'left',
<<<<<<< HEAD
                        label: '👠竹子后庭玩法教学系列',
=======
                        label: '📒前端笔记',
>>>>>>> parent of 77804d9f (Update docusaurus.config.js)
                    },
                    {
                        type: 'docSidebar',
                        position: 'left',
                        sidebarId: 'interview',
                        label: '👨‍💻前端面试题',
                    },
                    {
                        type: 'docSidebar',
                        position: 'left',
                        sidebarId: 'UHF',
                        label: '🚀超高频前端面试题',
                    },
                    {to: '/website', label: '🌐网站导航', position: 'left'},
                    {to: '/Tools-website', label: '🧰工具网站', position: 'left'},
                    {to: '/blog', label: '📑Blog', position: 'left'},
                    {
                        href: 'https://github.com/junjieweb/junjieweb.github.io',
                        position: 'right',
                        className: 'header-github-link',
                        'aria-label': 'GitHub repository',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: '文档',
                        items: [
                            {
                                label: '笔记',
                                to: '/docs/MDN',
                            },
                            {
                                label: '面试题',
                                to: '/docs/interview-questions/html面试题',
                            },
                            {
                                label: '网站导航',
                                to: '/website',
                            },
                            {
                                label: '工具网站',
                                to: '/Tools-website',
                            },
                        ],
                    },
                    {
                        title: '社区',
                        items: [
                            {
                                label: 'Stack Overflow',
                                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                            },
                            {
                                label: ' Docusaurus',
                                href: 'https://docusaurus.io/zh-CN/',
                            },
                            {
                                label: 'Discord',
                                href: 'https://discordapp.com/invite/docusaurus',
                            },
                        ],
                    },
                    {
                        title: '更多',
                        items: [
                            {
                                label: '博客',
                                to: '/blog',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/junjieweb',
                            },
                            {
                                label: 'JetBrains Academy',
                                href: 'https://hyperskill.org/join/1ffe05030',
                            },
                        ],
                    },
                ],

<<<<<<< HEAD
      algolia: {

        apiKey: '5c07d8bf9c9928c4453857f6cad0420e',//?02bd2340879bdb682f2a9fe509fec240
        indexName: 'wiki-power', //

        // The application ID provided by Algolia
        appId: 'BH4D9OD16A', //BH4D9OD16A 是默认的，文档见 https://autocomplete-experimental.netlify.app/docs/docsearchmodal/#appid，用自己的 ID IRO903CONI 反而搜不出内容 

        // Public API key: it is safe to commit it
        // apiKey: 'defe7fd8690822eed8e3c94801bab286',

        // indexName: 'wiki-power',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        //externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        //... other Algolia params
      },

      //sidebarCollapsible: true, //默认折叠

      metadata: [{
        name: 'keywords',
        content: 'ATE, hardware, STM32, Arduino, NAS, software, blog'
      }],

      image: 'https://cos.ap-guangzhou.myqcloud.com/wiki-media-1253965369/doc/logo-zip.png',

      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },

      navbar: {
        title: 'Power\'s Wiki',
        hideOnScroll: true,
        /*
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },*/



        items: [{
            to: "",
            label: "竹子后庭玩法教学系列",
            position: "right",
          },
          {
            to: "嵌入式与软件",
            label: "嵌入式与软件",
            position: "right",
          },
          {
            to: "效率指南",
            label: "效率指南",
            position: "right",
          },

          {
            to: "blog",
            label: "博客",
            position: "right",
          },

          {
            href: "https://github.com/linyuxuanlin/Wiki_Docusaurus",
            position: "right",
            className: "header-github-link",
            'aria-label': "GitHub repository",
          },


        ],
      },


      footer: {
        style: 'light',


        links: [

          {
            href: "https://nav.wiki-power.com/",
            label: "友链 & 导航站",
          },
          {
            href: "http://digest.wiki-power.com/",
            label: "书摘",
          },
          {
            label: '资源仓库',
            href: 'https://github.com/linyuxuanlin/File-host',
          },

          /*
          {
            label: '电源设计方案收集',
            href: 'https://github.com/linyuxuanlin/Collection_of_Power_Module_Design',
          },
          {
            href: "https://wiki.wildwolf.pw/",
            label: "机器人队知识库",
          },
          {
            label: '功能电路模块化',
            href: 'https://github.com/linyuxuanlin/Modularity_of_Functional_Circuit',
          },
          
          {
            label: '网页版串口助手',
            href: 'https://serial.wiki-power.com/',
          },
          {
            label: 'Markdown 转公众号编辑器',
            href: 'https://md2wechat.wiki-power.com/',
          },
          */
        ],


        //copyright: `by Power Lin | 粤 ICP 备 20014898 号 | Built with Docusaurus.`,
      },


      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
=======
                copyright: `Copyright © ${new Date().getFullYear()} junjieweb. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
>>>>>>> parent of 14e85c12 (更新)
};

module.exports = config;
