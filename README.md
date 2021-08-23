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
8. Go back to GraphCMS dashboard, click on **API Access > Permanent Auth Tokens**
9. On Existing Tokens list, copy the token you've created earlier
10. Paste the token into `GRAPHCMS_AUTH_TOKEN` on your `.env` file

We're almost ready! Now, let's run the migrations to setup your application on GraphCMS!

## Running Migrations

We will create 2 models: Page and Link. We've created a script to create them programatically for you.

The Page model is to create your bio link page. The Link model is needed to add one or more links to your page.

1. Open your terminal
2. Navigate to the directory you cloned the repository
3. Run `node migrations/migration-create-schema.js`
4. Now, go to GraphCMS dashboard and click on Schema
5. You should see 2 new models: Page and Link

## Creating Your Page and adding links

1. On GraphCMS dashboard, go to **Content > Page**
2. Click on **Create Item**
3. Enter page _Title_, _Avatar_, and _Bio_
4. On the **Links** section, click on **Create and add new document** and click on **Link**
5. Enter the link _Title_ and _URL_ and hit **Save and Publish**
6. Add as many links as you want
7. When you're good to go, click on **Save and Publish**

## Previewing Your Page Locally

1. Open the terminal
2. Go to the repository directory
3. Run `npm run dev`
4. Open http://localhost:3000

If you've done everything correctly, you'll see your new page!

## 🚀 Deploying to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Click on the button above to create a new deploy on Vercel
2. Connect Vercel to your GitHub account
3. Click on the repository you forked earlier
4. Skip **Create a Team** step
5. On **Configure Project** section, enter the name of your project (optional)
6. Click **Environment Variables** to expand it
7. Add the following variables:
   - `GRAPHCMS_AUTH_TOKEN`
   - `GRAPHCMS_ENDPOINT`
8. Copy the values from your `.env` file and paste into each field
9. Finally, click on **Deploy** and wait until Vercel deploy your application :)

🚀 That's it! Now you have your own page links!

Add it to your social media and share with your network!

## TODO

- [ ] Add Loom videos for each step
- [ ] Add checkbox to open links in a new tab
- [ ] Add support to animate.css
- [ ] Add support for link icons
- [ ] Add support for link thumbnails
- [ ] Add support for RichText in bio
