module.exports = {
    base: '/personal_learning_blog/',
    dest: 'dist',
    title: '个人学习博客',
    description: '个人学习博客',
    head: [
        ['link', { rel: 'icon', href: `/logo.png` }],
        ['link', {rel: 'manifest', href: '/manifest.json'}],
        ['meta', {name: 'theme-color', content: '#3eaf7c'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
        ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    serviceWorker: false,
    themeConfig: {
        repo: 'wish-lx/personal_learning_blog',
        editLinks: true,
        docsDir: 'docs',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: [],
        sidebar: [
            
            {
                title: 'js',
                collapsable: false,
                children: [
                    ['chain/', '原型链'],
                    'chain/eventloop',
                    'chain/settimeout',
                    'chain/range',
                    'chain/this',
                    
                ]
            },
            {
                title: 'Vue',
                collapsable: false,
                children: [
                    ['vue/', 'vue相关试题']
                    // 'Vue/listOne'
                    
                ]
            },
            {
                title: '异步',
                collapsable: false,
                children: [
                    ['async/', 'async'],
                    'async/promise'
                    
                ]
            },
            
            {
                title: 'webpack',
                collapsable: false,
                children: [
                    ['webpack/', 'Introduction'],
                    'webpack/entry',
                    'webpack/output',
                    'webpack/loader',
                    'webpack/plugins'
                ]
            },
            {
                title: 'Interview',
                collapsable: false,
                children: [
                    ['Interview/', 'Introduction'],
                    'Interview/beikong',
                    'Interview/testList'
                    // 'Interview/loader',
                    // 'Interview/plugins'
                ]
            },
            {
                title: '复习题纲',
                collapsable: false,
                children: [
                    ['list/', '一面'],
                    'list/listOne'
                    
                ]
            }
        ]
    }
}
