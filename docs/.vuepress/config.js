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
                title: '性能优化',
                collapsable: false,
                children: [
                    ['性能优化/', '性能优化相关']
                ]
            },
            {
                title: '兼容性问题',
                collapsable: false,
                children: [
                    ['兼容性问题/', '性能优化相关']
                ]
            },
            {
                title: '浏览器缓存',
                collapsable: false,
                children: [
                    ['浏览器缓存/', '浏览器缓存']
                ]
            },
            {
                title: '浏览器渲染',
                collapsable: false,
                children: [
                    ['浏览器渲染/', 'index']
                ]
            },
            {
                title: '封装方法',
                collapsable: false,
                children: [
                    ['封装方法/', '封装方法']
                ]
            },
            {
                title: '代码题',
                collapsable: false,
                children: [
                    ['代码题/', '代码题']
                ]
            },
            {
                title: 'ES6',
                collapsable: false,
                children: [
                    ['ES6/', 'ES6']
                ]
            },
            {
                title: 'js',
                collapsable: false,
                children: [
                    ['chain/', '原型链'],
                    'chain/eventloop',
                    'chain/settimeout',
                    'chain/range',
                    'chain/this',
                    'chain/Array'
                    
                ]
            },
            {
                title: 'CSS',
                collapsable: false,
                children: [
                    ['CSS/', 'CSS']
                ]
            },
            {
                title: 'Vue',
                collapsable: false,
                children: [
                    ['vue/', 'vue相关试题']
                    
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
                    'Interview/testList',
                    'Interview/highjs'

                ]
            },
            {
                title: '知识体系总结',
                collapsable: false,
                children: [
                    ['知识体系总结/', '一面'],
                    '知识体系总结/listOne'
                    
                ]
            }
            
        ]
    }
}


