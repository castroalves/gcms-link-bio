# GCMS Link Bio

GCMS Link Bio is a free alternative to Linktree, powered by GraphCMS.

## Requirements

- Account on GraphCMS. They offer a free forever plan for personal projects
- Account on Vercel

## Getting Started

### Deploying to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fcastroalves%2Fgcms-link-bio&env=GRAPHCMS_AUTH_TOKEN,GRAPHCMS_ENDPOINT)

1. Click on the button above to deploy this project on Vercel
2. Connect Vercel to your GitHub account
3. Enter the name of your repository
4. They will ask you two environment variables: `GRAPHCMS_AUTH_TOKEN` and `GRAPHCMS_ENDPOINT`
5. Follow the next steps to setup your GraphCMS project and API permissions
6. After you finish it, go back to this page and enter the environment variables

## Creating a Project on GraphCMS

1. [Click here](https://app.graphcms.com/create) to create a new project
2. Enter the project name, description (optional), and select the best location for your server
3. Select the "Free Forever" plan
4. Skip the step to invite your team members

## Setting up GraphCMS APIs

1. In the Quick Start Guide, click on step 3, Make you API accessible
2. In Content API Permissions, click on "Yes, initialize defaults"
3. In Permanent Auth Tokens, click on "Create Token" button
4. Enter a token name and click on "Create & configure permissions"
5. Then, click on "Yes, initialize defaults"
6. Then, click on "Edit permissions"
7. Check "Read existing environments" and click on "Update"
8. Go back to GraphCMS dashboard, click on API Access > Endpoints
9. Copy Content API url and paste into `GRAPHCMS_ENDPOINT` field on Vercel
10. Go back to GraphCMS dashboard, click on API Access > Permanent Auth Tokens
11. On Existing Tokens list, copy the token you've created earlier
12. Paste the token into `GRAPHCMS_AUTH_TOKEN` field on Vercel

## Running on Your Machine

1. Fork this repository
2. Open the project in your favorite IDE
3. Rename the `.env.example` file to `.env`
4. Open the `.env` to edit
5. Copy and Paste your `GRAPHCMS_ENDPOINT` and `GRAPHCMS_AUTH_TOKEN` here

## Running Migrations

1. Open your terminal
2. Navigate to the directory you cloned the repository
3. Run `node migrations/migration-create-schema.js`
4. Go back to GraphCMS dashboard and click on Schema
5. You should see 2 new models: Page and Link

## Creating Your Page and adding links

1. On GraphCMS dashboard, go to Content > Page
2. Click on Create Item
3. Enter page Title, Avatar, and Bio
4. In the Links sections, click on "Create and add new document" and select Link
5. Enter the link Title and URL and hit "Save and Publish"
6. Add as many links as you want
7. Finally, on New Page, click on "Save and Publish"

## Previewing Your Page Locally

1. Open the terminal
2. Go to the repository directory
3. Run `npm run dev`
4. Open http://localhost:3000

## Deploying to Vercel

1. Push all your modifications to your repository on GitHub
2. Click on Vercel button at the top of this page


