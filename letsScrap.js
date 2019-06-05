const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States'
// const scrapParse = require('./scrapParse')
const scrapJ = require('./scrapJ')

// rp(url)
//     .then(function (html) {

        //success!
        // console.log(html);
        // console.log($('big > a', html).length);
        // console.log($('big > a', html));

    //     const wikiUrls = [];
    //     for (let i = 0; i < 45; i++) {
    //         wikiUrls.push($('big > a', html)[i].attribs.href);
    //     }
    //     // console.log(wikiUrls);

    //     return Promise.all(
    //         wikiUrls.map(function (url) {
    //             return scrapParse('https://en.wikipedia.org' + url);
    //         })
    //     );

    // })
    // .then(function (presidents) {
    //     console.log(presidents);
    // })
    // .catch(function (err) {
    //     //handle error
    // });
