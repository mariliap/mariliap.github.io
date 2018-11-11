//import {css} from "styled-components/typings/styled-components";
import { css} from 'styled-components';

/**
 * Round x with n decimal.
 * @param {Number} x Number to be rounded.
 * @param {Number} n Number of digits after semi column.
 * @returns {Number} Number rounded.
 */
const round = (x, n) => Math.round(x * (n * 10)) / (n * 10);

const scaleN = (n) => round(Math.pow(1.2, n), 3);

const scale = n => `${scaleN(n)}rem`;

const colors = {
  white: '#D3D0CB',
  black: '#1E2019', // #393E41
  yellow: '#E2C044',
  red: '#FF0000',
  darkBlue: '#587B7F',
  blue: '#85B9BF',
  green: '#9FE80C',
  gray: '#393E41',
  blueishGrey: '#21232d',
  blueishGreyPaletteBlue: '#266ABB',
  blueishGreyPaletteGreen: '#48A6A7',
  blueishGreyPalettePurple: '#423575',
  blueishGreyPaletteSand: '#C5C3A0',
  blueishGreyPalletePink:'#f92672',
  blueishGreyPalleteBlueText:'#2895f2',

  blackShades: [
    '#32342D',
  ]
};

const fontFamily = '"Space Mono", "monospace", sans-serif'; // '"Cambo", serif';

const spacing = {
  quarter: "10px",
  half: "20px",
  single: "40px",
  double: "80px"
};

const small = (...args) => css`
  @media screen and (max-width: 600px) {
    ${ css(...args) }
  }
`
const medium = (...args) => css`
  @media screen and (min-width: 601px) and (max-width: 1200px) {
    ${ css(...args) }
  }
`
const large = (...args) => css`
  @media screen and (min-width: 1201px) {
    ${ css(...args) }
  }
`


const theme = {
  scale,
  scaleN,
	spacing,
  colors,
	small,
	medium,
	large,
  fontFamily,
  color: colors.white,
  bg: colors.blueishGrey,
  padding: `0 ${scaleN(1)}rem ${scaleN(10)}rem ${scaleN(0)}rem`,
  margin: '0 auto',
  maxWidth: '120rem',
  borderRadius: '0.2rem',
  lineHeight: 1.5,
  focus: {
    border: '0.4rem red solid'
  },
  p: {
    fontSize: scale(1),
    lineHeight: scaleN(2),
    firstLetter: {
      fontSize: `${(scaleN(1) * 2) + scaleN(2)}rem`,
      color: colors.yellow,
      lineHeight: 0.2,
      padding: '1.3rem 0.1rem',
      margin: 0
    }
  },
  a: {
    fontFamily,
    color: colors.white,
    textDecoration: 'none',
    hover: {
      color: colors.blueishGreyPalletePink
    }
  },
  header: {
    title: {
      fontSize: scale(3),
      textAlign: 'left',
      padding: `${scale(0)} 0 0 0`,
      margin: `0 0 ${scale(6)} 0`,
      lineHeight: scaleN(0)
    },
    subTitle: {
      fontSize: `${scale(0)}`,
      padding: `${scale(-4)} 0 0 0`,
      margin: `${scale(-20)} 0 0 0`,
      lineHeight: scaleN(-1)
    },
    isHome: {
	    title: {
		    fontSize: scale(7),
		    textAlign: 'center',
		    padding: `${scale(2)} 0 0 0`,
		    margin: `${scale(0)} 0 ${scale(4)} 0`,
		    lineHeight: scaleN(0)
	    },
	    subTitle: {
		    fontSize: `${scale(0)}`,
		    padding: `${scale(-4)} 0 0 0`,
		    margin: `0`,
		    lineHeight: scaleN(-1)
	    }
    }
  },
  menu: {
    padding: scale(2),
    opened: {
      bg: colors.blueishGrey
    },
    closed: {
      bg: 'transparent'
    },
    label: {
      width: scale(3),
      height: scale(3),
      fontSize: scale(3.2)
    },
    a: {
      fontSize: scale(1),
      paddingBottom: scale(1),
      textAlign: 'left',
      color: colors.white,
      active: {
        color: colors.blueishGreyPalletePink
		
      }
    },
    ul: {
      marginTop: scale(6),
      marginLeft: scale(7.8)
    }
  },
  socialLinks: {
    margin: `0 ${scale(0)}`,
    padding: 0,
    a: {
      color: colors.white,
      fontSize: scale(-1),
      margin: 0,
      padding: `${scale(0)} ${scale(0)} 0 ${scale(0)}`,
      svg: {
        fontSize: scale(5),
        margin: `0 auto ${scale(-4)} auto`,
        padding: 0,
      },
      hover: {
        color: colors.yellow
      }
    }
  },
  welcome: {
    marginTop: scale(6),
    marginBottom: scale(2),
  },
  h1: {
    fontSize: scale(2),
    padding: `0 0 0 0`,
    margin: `${scale(1)} 0 0 0`,
    textAlign: 'center'
  },
  h2: {

    fontSize: scale(6),
    padding: `0 0 0 0`,
    margin: `${scale(1)} 0 0 0`,
    textAlign: 'center'
  },
  resume:{
	  projetos: {
	    h1: {
		    fontSize: scale(1),
		    padding: `0 0 0 0`,
		    margin: `${scale(1)} 0 0 0`,
		    textAlign: 'center',
		    color: colors.blueishGreyPaletteSand
	    },
	    li: {
		    paddingTop: scale(-2),
        paddingBottom: scale(-2),
        display: 'block',
        textAlign: 'center'
      }
	  }
  },
  blog: {
    list: {
      header: {
        fontSize: scale(6),
        padding: `${scale(1)} 0 0 0`,
        margin: `${scale(4)} 0 0 0`,
      },
      ul: {
        padding: scale(4),
        margin:  scale(6),
        width: scale(10),
      },
      item: {
        padding: scale(2),
        margin: `0 -${scaleN(2)}rem`,
        hover: {
          backgroundColor: colors.blueishGreyPaletteSand
        },
        header: {
          fontSize: scale(3),
          lineHeight: scaleN(1),
          fontWeight: `bold`,
          time: {
            fontSize: scale(0),
            color: colors.blueishGreyPaletteSand
          }
        },
        p: {
          fontSize: scale(1),
          lineHeight: scaleN(2),
          fontWeight: `normal`,
          padding: `0`,
          margin: `0`,

          // color: `#57c7ff`,
          color: colors.blueishGreyPalleteBlueText,
          hover: {
            color: colors.blueishGreyPalletePink
          },
          display: `inline-block`,
          textDecoration: `none`,
          position: `relative`,
          cursor: `pointer`,
          after: {
            content: '',
            position: `absolute`,
            bottom: `0`,
            left: `0`,
            width: `100%`,
            height: `2px`,
            //backgroundColor: `#57c7ff`,
	          backgroundColor: colors.blueishGreyPaletteSand,
            transform: `scaleX(0)`,
            transformOrigin: `left`,
            transition: `transform 0.4s ease-in-out`,
            transitionDelay: `0.1s`
		      },
        }
      }
    },
    post: {
      padding: 0,
      margin: `0 0 ${scale(4)} 0`,
      header: {
        fontSize: scale(5),
	      time: {
		      fontSize: scale(0),
		      color: colors.blueishGreyPaletteSand
	      }
      },
      content: {
        code: {
          color: colors.white,
          fontSize: scale(1),
          borderRadius: '0.2rem',
          margin: `0`,
          padding: `${scale(-8)} ${scale(-4)}`,
          backgroundColor: colors.gray,
        },
        highlight: {
          backgroundColor: null,
          borderRadius: '0.2rem',
          margin: `${scale(0)} -50rem`,
          padding: `0 50rem`,
          code: {
            color: colors.white
          }
        },
        a: {
          color: colors.yellow
        },
        h1: {
          fontSize: scale(4),
          margin: 0,
          padding: `${scale(4)} 0 0 0`
        },
        h2: {
          fontSize: scale(3),
          margin: 0,
          padding: `${scale(3)} 0 0 0`
        },
        h3: {
          fontSize: scale(2),
          margin: 0,
          padding: `${scale(2)} 0 0 0`
        },
        h4: {
          fontSize: scale(1),
          margin: 0,
          padding: `${scale(1)} 0 0 0`
        },
        h5: {
          fontSize: scale(0),
          margin: 0,
          padding: `${scale(0)} 0 0 0`
        },
        h6: {
          fontSize: scale(-1),
          margin: 0,
          padding: `${scale(0)} 0 0 0`
        },
        p: {
          fontSize: scale(1),
          margin: 0,
          padding: `${scale(0)} 0 0 0`
        },
        ul: {
          fontSize: scale(1),
          margin: 0,
          padding: `${scale(0)}`
        }
      }
    }
  },
  i18n: {
    selectLanguage: {
      li: {
        //margin: `-${scale(0)} 0 0 0`,
        padding: `${scale(5)} ${scale(-2)} ${scale(-5)} ${scale(-2)}`,
        fontSize: scale(3),
        borderRadius: '0.2rem',
        selected: {
          backgroundColor: colors.blueishGreyPaletteBlue
        }
      }
    }
  }
};

export default theme;
