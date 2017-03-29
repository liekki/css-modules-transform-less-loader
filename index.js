const less = require('less')
const path = require('path')

module.exports = (data, file) => {
  try {
    less.render(data, {
      filename: path.resolve(file)
    }, function(error, output) {
      if(!error) {
        console.log(file + ': ', output.css.toString('utf8'))
        return output.css.toString('utf8')
      } else {
        console.log('ERROR: ', error)
      }
    })
  } catch (e) {
    console.error(e);
  }
};
