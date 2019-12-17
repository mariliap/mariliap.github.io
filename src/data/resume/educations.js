const {range, thisYear} = require('./time');

const educations = {
  'Udemy': {
    years: range(2012, thisYear),
    link: 'https://app.pluralsight.com/profile/ocanaangelo',
    img: 'pluralsight.png',
    needWhiteBg: true,
    subject: {
      pt: 'Tecnologia e Design',
      en: 'Technology and Design',
      fr: 'Technologie et Design'
    }
  },
  'UNI7': {
    subject: {
      pt: 'Arquitetura de Sistemas para a Internet',
      en: 'Analysis and systems development',
      fr: 'Analyse et développement de systèmes'
    },
    fullName: 'Centro Universitário 7 de Setembro',
    years: range(2017, 2019),
    img: 'fiap.svg',
    link: 'https://www.fiap.com.br'
  },
  'UPE': {
    subject: {
      pt: 'Análise e Desenvolvimento de Sistemas',
      en: 'Analysis and systems development',
      fr: 'Analyse et développement de systèmes'
    },
    fullName: 'Universidade Paulista',
    years: range(2004, 2009),
    img: 'unip.png',
    link: 'https://www.unip.br/'
  },
  'Yazigi': {
    years: range(2008, 2009),
    img: 'ingles200h.png',
    needWhiteBg: true,
    subject: {
      pt: 'Inglês & Espanhol',
      en: 'English & Spanish',
      fr: 'Anglais & Espagnol'
    },
    link: 'https://www.ingles200h.com/'
  },
  'Alliance Frençaise': {
    years: range(2008, 2009),
    img: 'ingles200h.png',
    needWhiteBg: true,
    subject: {
      pt: 'Francês',
      en: 'French',
      fr: 'Français'
    },
    link: 'https://www.ingles200h.com/'
  }
};

module.exports = {
  educations
};
