export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              sites: [
                {
                  buildHookId: '5cd0f81abfdd8ca86e8d9bbb',
                  name: 'Sanity Studio',
                  siteId: '3391a502-3109-4263-b02e-599ddbb9dc17'
                },
                {
                  buildHookId: '5cd0f81abfdd8c029e8d9c08',
                  name: 'Portfolio Website',
                  siteId: '74a0716e-2ce2-4bdb-a569-d63fea00f901'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shannonbux/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-portfolio-web-ypvj3qky.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
