import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "c8s Docs",
  description: "CI with an UI",
  srcDir: 'src',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico', sizes: '48x48' }],
    ['link', { rel: 'icon', href: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' }],
  ],
  themeConfig: {
    siteTitle: 'Docs',
    logo: '/c8s.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'User guide', link: '/user-guide' },
      { text: 'Learn', link: '/learn/introduction' },
    ],

    sidebar: [
      {
          text: 'User guide',
          link: '/user-guide',
          collapsed: true,
          items: [
            {
              text: 'Providers',
              link: '/user-guide/providers/introduction',
              items: [
                { text: 'GitHub', link: '/user-guide/providers/github' },
              ]
            },
            {
              text: 'Projects',
              link: '/user-guide/projects/introduction',
              items: [
                { text: 'GitHub', link: '/user-guide/projects/github' },
              ]
            }

          ]
      },
      {
        text: 'How To & Examples',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/how-to-and-examples/overview' },
          { text: 'Set up Testing for Laravel Project', link: '/how-to-and-examples/set-up-testing-for-laravel-project' },
        ]
      },
      {
        text: 'Learn',
        collapsed: true,
        items: [
          { text: 'Introduction', link: '/learn/introduction' },
          { text: 'Basics of CI/CD', link: '/learn/basics-of-ci-cd' },
          { text: 'Key Concepts', link: '/learn/key-concepts' },
          { text: 'List of CI Providers', link: '/learn/list-of-ci-providers' },
          { text: 'How to Choose a CI Provider', link: '/learn/how-to-choose-a-ci-provider' },
          { text: 'Best Practices in CI/CD', link: '/learn/best-practices-in-ci-cd' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/rohsyl/c8s-documentation' }
    ]
  }
})
