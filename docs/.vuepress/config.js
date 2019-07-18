module.exports = {
    title: 'Unmock',
    description: 'A JavaScript Library for Mocking API Dependencies',
    head: [
      ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    themeConfig: {
        sidebar: [
          '/',
          {
            title: 'First steps',
            collapsable: true,
            children: [
              ['/installing', 'Installing Unmock'],
              ['/hello', 'Hello World']
            ]
          },
          '/activation',
          {
            title: 'Services',
            collapsable: true,
            children: [
              ['/layout', 'Service Layout'],
              ['/loas3', 'LOAS 3'],
              ['/fetching', "Fetching Services"]
            ]
          },
          {
            title: 'State',
            collapsable: true,
            children: [
              ['/basic', 'Basic Usage'],
              ['/advanced', 'Advanced Concepts'],
            ]
          },
          {
            title: 'Roadmap',
            collapsable: true,
            children: [
              ['/roadmap', "Where We're Going"],
              ['/contributing', 'Contributing'],
              ['/about', 'About Us'],
            ]
          },
        ]
    }
}