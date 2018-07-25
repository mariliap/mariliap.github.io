const authors = {
  angeloocana: {
    name: 'Marília Portela de Lima',
    additionalName: 'mariliaportela',
    address: 'Fortaleza BR',
    affiliation: 'Polutz',
    birthDate: '1992-06-28',
    birthPlace: 'Recife BR',
    brand: 'Marília Portela Software Development',
    children: {
    },
    email: 'mariliaportela@gmail.com',
    familyName: '...',
    gender: 'Female',
    givenName: 'Angelo',
    height: '...',
    homeLocation: 'Fortaleza',
    jobTitle: 'Software Engineer',
    knows: '...',
    memberOf: '...',
    nationality: 'Brazilian',
    owns: '...',
    parent: '...',
    performerIn: '...',
    publishingPrinciples: '...',
    relatedTo: '...',
    seeks: '...',
    sibling: '...',
    spouse: {
      additionalName: '...',
      name: '...',
      givenName: '...',
      familyName: '...',
      gender: '...',
      nationality: '...',
      homeLocation: '...'
    },
    telephone: '...',
    weight: '...',
    workLocation: '...',
    worksFor: '...',
    description: '...',
    disambiguatingDescription: '...',
    identifier: '...',
    image: 'http://www.gravatar.com/avatar/9174fca44b5ca403593ac9cb2407e0e7',
    sameAs: 'https://mariliaportela.com/en/about/',
    url: 'https:///mariliaportela.com/en/about/'
  }
};

const getAuthor = (id) => {
  const author = {
    ...authors[id],
    '@type': 'Person'
  };
  return author
    ? author
    : authors[0];
};

export default {
  authors,
  getAuthor
};
