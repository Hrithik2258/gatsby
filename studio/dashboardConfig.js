export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62d56e965a6239006e858250',
                  title: 'Sanity Studio',
                  name: 'gatsby-studio-sn7svheu',
                  apiId: 'f1292d81-0ff0-46b6-a7cb-6de1c8dbb0f2'
                },
                {
                  buildHookId: '62d56e96550c41005a065b26',
                  title: 'Blog Website',
                  name: 'gatsby-web-65v28c9d',
                  apiId: '5fea8d86-da6d-4b24-beeb-197f71724d2a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Hrithik2258/gatsby',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://gatsby-web-65v28c9d.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
