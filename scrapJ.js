const rp = require('request-promise');
const url = 'https://www.reddit.com';

const scrapJ = function(url) {
    rp(url)
  .then(function(html){
    //success!
    console.log('Adya');
    console.log(html);

  })
  .catch(function(err){
    //handle error
  });
}

module.exports = scrapJ