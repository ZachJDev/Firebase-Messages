const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  functions.logger.info(
    "Project:",
    functions.config().env.project_id,
    "dataset:",
    functions.config().env.dataset,
    "process.env??",
    process.env.BQ_ID
  );
  response.send("Hello from Firebase! a change22ad");
});
