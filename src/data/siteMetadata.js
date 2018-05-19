const resume = require('./resume');
const languages = require('./languages');

module.exports = {
  siteUrl: 'https://mariliap.github.io',
  author: {
    name: 'Marília Portela',
    homeCity: 'Fortaleza',
    email: 'mariliaportela@gmail.com',
    defaultLink: 'https://github.com/mariliap'
  },
  sourceCodeLink: 'https://github.com/mariliap/mariliap.github.io',
  menu: [
    {label: 'home', slug: '/'},
    {label: 'posts', slug: '/blog/'},
    {label: 'tags', slug: '/tags/'},
    {label: 'about', slug: '/about/'},
    {
      label: 'resume', 
      slug: '/resume/',
      items: [
        {label: 'resume.technologies', slug: '/resume/technologies/'},
        {label: 'resume.jobsAndClients', slug: '/resume/jobsAndClients/'},
        {label: 'resume.educations', slug: '/resume/education'},
        {label: 'resume.languages', slug: '/resume/languages'}
      ]
    },
    {label: 'sourceCode', link: 'https://github.com/mariliap/mariliap.github.io'},
    {label: 'contact', slug: '/contact/'}
  ],  
  languages,
  resume,
  contact: [
    {
      type: 'email',
      value: 'mariliaportela@gmail.com',
      link: 'mailto:mariliaportela@gmail.com'
    },
    {
      type: 'phone',
      value: '+55 81 99526-7578',
      country: 'br',
      link: 'tel:+55 81 99526-7578'
    },
    {
      type: 'phone',
      value: '+55 81 99526-7578',
      country: 'br',
      link: 'tel:+55 85 998992-8824'
    }
  ]
};
