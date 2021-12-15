# HackEDWebsite

## Repo Structure (TODO: UPDATE)

The site for HackED and HackED Beta.
Until further notice or authority, this is the official repository for all current and future websites related to both hackathons.

Due to similarities between the sites for both HackED (HE) and HackED Beta (HEB), all versions of these sites will be consolidated into this single repo.
The master branch will represents the current design for the year that will be shared between HE and HEB.
The generic template should be placed on the master branch, which can then be branched from to form the HE site and HEB site.
The branching should now allow for easy upgrades to both sites.

The only branches that are needed are one for HE and the other for HEB. I don't currently think that new branches for HE and HEB need to be made every year, but this could be an oversite.

Currently,both branches should only differ from the main site by palette, logo, style, and sponsor logos.
If the change alters the structure or logic of the website, it should probably go into the master branch unless if there is a _really_ good reason for one site to have it and not the other. From there, each branch can pull the changes of the master branch. This might be overkill, but I think this will be the most convinient and reliable way to ensure that both versions are consistent and up to date.

Note: currently only tested with Node 14, you may need to `nvm install v14` to get this to work

## Deployment Instructions

1. Clone the HackEDWebsite repository
2. 'npm install' to download node packages
3. 'npm run addRemotes' to add the two site remotes
4. Switch to the branch of the site you want to deploy
5. 'npm run build' to create a build to deploy
6. 'npm run deploy\[beta/prime\] to deploy to gh-pages
