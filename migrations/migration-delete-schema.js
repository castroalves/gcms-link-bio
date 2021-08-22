const { newMigration } = require("@graphcms/management");

const args = process.argv.slice(2);

require("dotenv").config();

const authToken = process.env.GRAPHCMS_AUTH_TOKEN;
const endpoint = process.env.GRAPHCMS_ENDPOINT;

// Create a new migration for an environment
// using auth token and environment url
const migration = newMigration({ authToken, endpoint });

// delete models
const link = migration.deleteModel('Link');
const page = migration.deleteModel('Page');


// run migration
let result = {
    errors: 'Migration did not run',
};

if (args[0] === '--dry-run') {
    console.log('[Dry run] Running migration...');
    result = migration.dryRun(true);
} else {
    console.log('Running migration...');
    result = migration.run(true);
}

if (result.errors) {
    console.log(result.errors);
} else {
    console.log(result);
}