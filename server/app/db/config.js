const mongoose = require('mongoose'); // npm package for easy connection to MongoDB

const connectDB = async () => { // async func to connect to db, needs time
    try { // try to connect to db 
        const dbURI = process.env.MONGODB_URI; // || process.env.MONGO_URI_ATLAS;
        const conn = await mongoose.connect(dbURI); // connect to db using env variables; then connect to either localhost OR Atlas database.

        console.log(`Connected to MongoDB successfully: ${conn.connection.host}.`);
    } catch (error) { // if connection failed; error out message
        console.error('Error connecting to database: ', error);
    } 
}

module.exports = connectDB;

/* REF: 
    1) https://www.mongodb.com/docs/manual/reference/connection-string/?utm_source=compass&utm_medium=product#mongodb-urioption-urioption.authSource

    2) https://www.mongodb.com/lp/cloud/atlas/try4-reg?utm_source=google&utm_campaign=search_gs_pl_evergreen_atlas_general_retarget-brand_gic-null_amers-us_ps-all_desktop_eng_lead&utm_term=mongodb%20atlas%20db&utm_medium=cpc_paid_search&utm_ad=p&utm_ad_campaign_id=22194044283&adgroup=174717480619&cq_cmp=22194044283&gad_source=1&gclid=CjwKCAjwnPS-BhBxEiwAZjMF0kLhB65BrGDOtpYgZMDMh1nzeQf_CrnuQP6lSdVE6Y1tLyJ5GabqgxoCdTUQAvD_BwE

    3) https://www.mongodb.com/developer/languages/javascript/developing-web-application-netlify-serverless-functions-mongodb/

    4) https://www.netlify.com/integrations/mongodb/
*/