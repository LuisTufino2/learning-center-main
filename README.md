# The White House Historical Association - US Presidents Explorer

## Description
This Vue 3 + Vite application displays a responsive catalog of United States presidents using the public SampleAPIs endpoint. The interface is built with PrimeVue Material components, supports internationalization with Vue I18n, and opens White House History biography pages in a new browser tab.

## Features
- Top toolbar with the Clearbit logo and institution name
- English and Spanish UI language selector
- Presidents grid with cards showing:
  - name
  - ordinal
  - years in office
  - vice presidents
  - photo or placeholder image
- Biography button that opens the White House History website in a new tab
- Accessible landmarks and ARIA attributes in the main views
- Footer with copyright and developer information
- Layered, domain-driven structure with `shared` and `exploration` subdomains
- Request / Response / Resource / Assembler pattern implemented for the API layer

## Main Technologies
- Vue 3
- Vite
- PrimeVue
- Axios
- Vue Router
- Pinia
- Vue I18n

## Project Structure
- `src/shared` for reusable UI and infrastructure helpers
- `src/exploration` for the presidents feature
- `src/locales` for internationalization messages

## Author
- Developer code: `YOUR-CODE`
- Name: `Your Name`
- Surname: `Your Surname`

## Run Locally
```bash
npm install
npm run dev
```

## Build for Production
```bash
npm run build
```

## Submission Note
Before submitting, rename the project and ZIP file according to the assignment instructions: `pc1nrcucode` / `pc1nrcucode.zip`.
