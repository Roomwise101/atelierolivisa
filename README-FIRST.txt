ATELIER OLIVISA — FIRST WEBSITE / GITHUB PAGES GUIDE
====================================================

INCLUDED
index.html       The public website
admin.html       Local-only artwork editor (NOT password protected)
app.js           Gallery, featured rotation, filters and artwork pop-ups
admin.js         Artwork editor, photo compression, import and export
style.css        Branding and responsive layout
settings.js      Edit Instagram URL here
assets/olive.svg Olive branch logo motif
data/artworks.json  The artwork collection (currently empty)
.nojekyll        Tells GitHub Pages to serve the files unchanged

STEP 1 — UPLOAD TO GITHUB
1. Sign in at github.com and choose New repository.
2. Name it atelier-olivisa, select Public, then Create repository.
3. Extract the ZIP. Choose 'uploading an existing file' or Add file > Upload files.
4. Upload the CONTENTS of the atelier-olivisa folder, not the ZIP itself.
   Preserve the assets and data folder structure. Commit changes.
   Note: GitHub's browser uploader may not include hidden .nojekyll; add
   it with Add file > Create new file, naming it .nojekyll if missing.

STEP 2 — SWITCH ON THE WEBSITE
1. Repo > Settings > Pages.
2. Build and deployment > Source > Deploy from a branch.
3. Branch: main, folder: /(root), click Save.
4. Visit https://YOUR-GITHUB-USERNAME.github.io/atelier-olivisa/
   once GitHub reports the site deployed. Some deployments take a few minutes.
5. Site is optimised for phones and iPads.

STEP 3 — ADD YOUR FIRST PAINTING
1. On the PUBLISHED site open /admin.html (for example:
   https://YOUR-GITHUB-USERNAME.github.io/atelier-olivisa/admin.html).
2. Add image, title, description, dimensions, medium, price, category,
   availability (Available/Reserved/Sold), and Featured checkbox.
3. Click Save artwork. Repeat as required.
4. Click Export artworks.json. Keep a backup of the downloaded JSON.
5. On GitHub open data/artworks.json in the repo. Use the edit pencil,
   replace the file content with the ENTIRE downloaded JSON text, and
   Commit changes. Alternatively delete/replace the file using GitHub
   upload, preserving exactly the data/artworks.json path.
6. Reload the public site after GitHub finishes publishing.
7. On another device, click Import artworks.json and choose your exported
   JSON file to continue editing. Your draft collection is stored locally
   in the browser used for editing, not synchronised across devices.

IMPORTANT — PRIVACY / PUBLISHING
This admin screen is not password protected. Anyone can open it and
experiment locally in THEIR OWN browser, but cannot publish or change YOUR
GitHub repo without access to your GitHub account. Do NOT put private data,
passwords, customer records or unpublished sensitive work in the dashboard.
For automatic one-click publishing in the future, use an authenticated CMS.
All artwork photos are embedded in artworks.json in compressed form. The
file can become large with many paintings; GitHub browser upload has a
25 MiB per-file limit. This is deliberately a free first-version workflow.
Do not work in private/incognito mode; local drafts may be lost.

STEP 4 — ADD YOUR INSTAGRAM ADDRESS
The site now links to https://www.instagram.com/atelierolivisa/
This assumes your Instagram username is @atelierolivisa. If your actual
username differs, edit the profile URL in settings.js and commit changes.

STEP 5 — CONNECT YOUR DOMAINS
Use atelierolivisa.art as the primary public domain (recommended).
In repository Settings > Pages > Custom domain enter atelierolivisa.art.
Configure the DNS at your domain registrar using GitHub Pages official
instructions. For the root domain, GitHub currently lists A records:
185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153.
Optionally add www as a CNAME to YOUR-GITHUB-USERNAME.github.io.
Enable Enforce HTTPS after the domain and certificate are ready.
Use your registrar's URL forwarding feature to REDIRECT
atelierolivisa.com and atelierolivisa.co.uk to
https://atelierolivisa.art (or to your preferred canonical domain).
GitHub Pages supports one configured custom domain per site, not three
independent address-bar domains for the same free Pages site. Forwarded
addresses will change to the primary domain in the browser address bar.
Registrar DNS/forwarding interfaces vary; consult their documentation.

NOT YET INCLUDED
Payments/checkout, private authenticated dashboard, automated publishing,
order management, print-on-demand integrations and an email form. Inquiries
currently go through Instagram. Add real paintings before sharing widely.

OFFICIAL GUIDES
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
