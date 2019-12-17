const R = require('ramda');
// ramda is a library designed specifically for a functional programming style, one that makes it easy to create functional pipelines, one that never mutates user data

const getArray = (list) => {
  return R.keys(list).map(key => {

    const item = list[key];
    return R.merge({
      key,
      name: key
    }, item);
  });
};

module.exports = {
  getArray
};
