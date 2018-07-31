const authors = {
  mariliaportela: {
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
    image: 'https://s.gravatar.com/avatar/1f52a6999175c8d4c23c476f6f30b3e4?s=80',
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
