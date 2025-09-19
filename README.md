# ecom-challenge

Frontend challenge project built with **Foundation 6 (Flex Grid)**, **SCSS**, and **Flickity** for the reviews carousel.  
This project uses `sass` and `live-server` for a simple development workflow.

---

## Project Structure
ecom-challenge/
│── assets/           # images, icons
│── dist/             # compiled CSS
│   └── styles.css
│── scss/             # SCSS partials + main.scss
│── index.html        # main landing page
│── package.json      # npm config + scripts

### Start development (watch SCSS + live reload server)
npm start

## Individual Scripts
npm run dev      # watch SCSS only
npm run serve    # serve site on http://localhost:3000
npm run build    # compile and minify SCSS → dist/styles.css
