# GCMS Link Bio

GCMS Link Bio is a free alternative to Linktree, powered by GraphCMS.

## Requirements

- Account on GraphCMS. They offer a free forever plan for personal projects
- Account on Vercel

## Getting Started

You should follow these steps:

1. Setup GraphCMS
2. Clone this repository into your computer
3. Run the models migrations to create Page and Link models on GraphCMS
4. Deploy to Vercel

## GraphCMS Setup

You need a GraphCMS acount to create a project. They offer a Free Forever plan.
If you already have an account, skip this step.
### Creating a Project on GraphCMS

1. [Click here](https://app.graphcms.com/create) to create a new project
2. Enter the project name, description (optional), and select the best location for your server
3. Select the "Free Forever" plan
4. Skip the step to invite your team members

### Setting up GraphCMS APIs

1. In the **Quick Start Guide**, click on step 3, **Make you API accessible**
2. In **Content API Permissions** section, click on "Yes, initialize defaults"
3. In **Permanent Auth Tokens** section, click on "Create Token" button
4. Enter a token name and click on "Create & configure permissions"
5. Then, click on "Yes, initialize defaults"
6. Then, click on "Edit permissions"
7. Check "Read existing environments" and click on "Update"

## Running on Your Machine

1. Login into your GitHub account
2. Fork this repository, then clone into your machine
3. Open the project in your favorite IDE
4. Rename the `.env.example` file to `.env`
5. Open the `.env` to edit
6. Go to GraphCMS dashboard, click on **API Access > Endpoints**
7. Copy Content API url and paste into `GRAPHCMS_ENDPOINT` on your `.env` file
8.  Go back to GraphCMS dashboard, click on **API Access > Permanent Auth Tokens**
9.  On Existing Tokens list, copy the token you've created earlier
10. Paste the token into `GRAPHCMS_AUTH_TOKEN` on your `.env` file
11. Finally, click on "Deploy" and wait until Vercel deploy your application :)
12. Copy and Paste your `GRAPHCMS_ENDPOINT` and `GRAPHCMS_AUTH_TOKEN` here
13. Now, open the terminal
14. Run `npm install` and then `npm run dev`

## Running Migrations

Now, we will create 2 models: Page and Link. We've created a script to create them programatically for you.

The Page model is to create your bio link page. The Link model is needed to add one or more links to your page. 

1. Open your terminal
2. Navigate to the directory you cloned the repository
3. Run `node migrations/migration-create-schema.js`
4. Now, go to GraphCMS dashboard and click on Schema
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

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fcastroalves%2Fgcms-link-bio&env=GRAPHCMS_AUTH_TOKEN,GRAPHCMS_ENDPOINT)

1. Click on the button above to deploy this project on Vercel
2. Connect Vercel to your GitHub account
3. On **Create Git Repository** section, enter the name of your repository and then click on "Create"
4. Skip **Create a Team** step
5. On **Configure the Project** section, you must provide two environment variables: `GRAPHCMS_AUTH_TOKEN` and `GRAPHCMS_ENDPOINT`
8. Copy the values from your `.env` file and paste into each field
12. Finally, click on "Deploy" and wait until Vercel deploy your application :)


