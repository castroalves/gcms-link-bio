const {
  newMigration,
  FieldType,
  RelationType,
  Renderer,
} = require("@graphcms/management");

const args = process.argv.slice(2);

require("dotenv").config();

const authToken = process.env.GRAPHCMS_AUTH_TOKEN;
const endpoint = process.env.GRAPHCMS_ENDPOINT;

// Create a new migration for an environment
// using auth token and environment url
const migration = newMigration({ authToken, endpoint });

// create link model
const link = migration.createModel({
  apiId: "Link",
  apiIdPlural: "Links",
  displayName: "Link",
});

// add fields to link model
link.addSimpleField({
  apiId: "title",
  displayName: "Title",
  type: FieldType.String,
  isRequired: true,
  isTitle: true,
});

link.addSimpleField({
  apiId: "url",
  displayName: "URL",
  type: FieldType.String,
  isRequired: true,
  isTitle: true,
  validations: {
    matches: {
      regex:
        "^(http://www.|https://www.|http://|https://)?[a-z0-9]+([-.]{1}[a-z0-9]+)*.[a-z]{2,5}(:[0-9]{1,5})?(/.*)?$",
    },
  },
});

// create page model
const page = migration.createModel({
  apiId: "Page",
  apiIdPlural: "Pages",
  displayName: "Page",
});

// add fields to page model
page.addSimpleField({
  apiId: "title",
  displayName: "Title",
  type: FieldType.String,
  isRequired: true,
  isTitle: true,
});

page.addRelationalField({
  apiId: "avatar",
  displayName: "Avatar",
  model: "Asset",
});

page.addSimpleField({
  apiId: "bio",
  displayName: "Bio",
  type: FieldType.String,
  formRenderer: Renderer.MultiLine,
});

page.addUnionField({
  apiId: "pageLinks",
  displayName: "Links",
  relationType: RelationType.OneToMany,
  models: ["Link"],
  reverseField: {
    apiId: "pageLinks",
    displayName: "Page",
    isHidden: true,
  },
});

// run migration
let result = {
  errors: "Migration did not run",
};

if (args[0] === "--dry-run") {
  console.log("[Dry Run] Running migration...");
  result = migration.dryRun(true);
} else {
  console.log("Running migration...");
  result = migration.run(true);
}

if (result.errors) {
  console.log(result.errors);
} else {
  console.log(result);
}
