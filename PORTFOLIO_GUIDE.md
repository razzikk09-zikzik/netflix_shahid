# Netflix-Style Portfolio Configuration Guide

Welcome to the Netflix-Style Portfolio Configuration Guide! This guide explains how to easily customize the entire website for a new client by replacing images and text content. The entire site is built dynamically using data files, which means **you do not need to touch the React components** to change the content.

## 1. Images & Assets (`src/images/`)
All images used across the site are stored in the `src/images/` folder. 
When building the site for a new client, you should:
1. Place their new images (profile pictures, project thumbnails, certificate scans, etc.) into `src/images/`.
2. Import these new images directly at the top of the relevant data files in `src/data/` (explained below).

## 2. Text & Content Configuration (`src/data/`)
The content for the entire portfolio is centralized in the `src/data/` directory. By editing the TypeScript (`.ts`) files in this folder, you can update everything from the user's name to their work experience.

Here is a breakdown of every file and what you should replace in it:

### `profileContent.ts`
This file configures the large hero banners and primary information for each "Avatar" (recruiter, developer, stalker, adventurer).
* **What to change:**
  * `headline`: The main large text (e.g., "S. Mohamed Shahid – Software Engineer").
  * `tagline`: The subtitle (e.g., "Full-Stack Developer | IoT Innovator").
  * `profileSummary`: The paragraph describing the person.
  * `resumeLink`: The Google Drive or PDF link to their resume.
  * `linkedinLink`: Their LinkedIn URL.

### `contactMe.ts`
This configures the "Hire Me" / Contact page.
* **What to change:**
  * `name`, `title`, `summary`, `companyUniversity`
  * `email`, `phoneNumber`, `linkedinLink`

### `projects.ts`
This lists all the projects shown on the Projects page.
* **What to change:**
  * Update the `projectsData` array with new projects.
  * For each project, update `title`, `description`, `techUsed`.
  * **Images:** Import the new project image from `src/images/` at the top of the file, and assign it to the `image: { url: importedImageName }` property.

### `certifications.ts`
This lists the certifications shown on the Certifications page.
* **What to change:**
  * Update the `certificationsData` array.
  * Provide `title`, `issuer`, and `iconName` (e.g., `'university'`, `'coursera'`, `'aws'`).
  * **Images:** Import the certificate images from `src/images/` at the top of the file and assign them to the `link` property.

### `timeline.ts`
This holds the data for the "Professional Experience" and "Education" timelines.
* **What to change:**
  * Update the `timelineData` array.
  * Modify `name` (Company/School), `title` (Role/Degree), `dateRange`, `techStack`, and `summaryPoints`.
  * Ensure `timelineType` is set accurately to either `'work'` or `'education'`.

### `skills.ts`
This file populates the Skills page.
* **What to change:**
  * Update the `technicalSkills` array to include the new client's skill categories (e.g., "Languages", "Frameworks").
  * Inside each category, list the `skills` with a `name`, `description`, and an `iconKey` (React Icons identifier like `'SiPython'`, `'FaReact'`, etc.).

### `workPermit.ts` (Career Availability)
This is typically used to show what roles the candidate is open for and their general availability.
* **What to change:**
  * `headline` and `summary` (e.g., "Open to full-time opportunities in...").
  * `roles`: An array of job titles they are applying for.

### `internship.ts` & `licence.ts`
These files are highly specific to this particular portfolio (e.g., the GENESIS grant licence and specific internships). 
* **What to change:** 
  * If the new client has internships, update `internship.ts` with their company names, descriptions, and images.
  * If the new client doesn't need a "Licence" page, you might want to either replace the text with their own achievements/patents or remove the link from `src/components/NavBar.tsx` and `src/App.tsx`.

### `profileBackgrounds.ts`
This file contains the URLs for the animated GIF backgrounds on the profile pages.
* **What to change:** 
  * Replace the Giphy URLs with new background GIFs that suit the new client's aesthetic for each avatar (`recruiter`, `developer`, `stalker`, `adventurer`).

---

## Workflow for a New Client (AI Instructions)
If you provide an AI with a markdown document containing the new client's details, the AI can read this guide and immediately know to:
1. Upload/move new images to `src/images/`.
2. Rewrite the arrays and objects inside `src/data/*.ts`.
3. Not touch the React UI components (`src/components/`, `src/pages/`) unless specifically asked to add a new page or modify the layout.
