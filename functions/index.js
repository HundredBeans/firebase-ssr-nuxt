const functions = require("firebase-functions");
const { Nuxt } = require("nuxt-start");

const config = {
  dev: false,
  buildDir: 'nuxt',
  build: {
    publicPath: '/public/'
  }
};
const nuxt = new Nuxt(config);

exports.ssr = functions.https.onRequest(async (req, res) => {
  res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
  await nuxt.ready();
  nuxt.render(req, res);
})
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
