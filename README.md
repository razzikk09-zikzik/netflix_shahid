## 🌟 Sumanth Samala's Netflix inspired Portfolio 🌟 - https://sumanthsamala.com/

Welcome to my personal portfolio project! 🚀 This website showcases my work, skills, and experiences in web development. It's designed to be lightweight, customizable, and professional while maintaining an approachable style.

Explore specific subdomains tailored to different tech stacks:

- 🌟 [java.sumanthsamala.com](https://java.sumanthsamala.com/) for Java Spring Boot-related work.
- 🌟 [node.sumanthsamala.com](https://node.sumanthsamala.com/) for Node.js and backend development.
- 🌟 [frontend.sumanthsamala.com](https://frontend.sumanthsamala.com/) for frontend development expertise.
- 🌟 [ror.sumanthsamala.com](https://ror.sumanthsamala.com/) for Ruby on Rails projects.

![Screenshot from 2024-12-08 19-19-06](https://github.com/user-attachments/assets/f8220485-16ec-48cf-8cb2-7853540c5724)

---

## ✨ Features

- 🌍 **Dynamic Content**: Powered by [DatoCMS](https://www.datocms.com) for easy content management.
- ⚡ **Fast & Responsive**: Built with modern web technologies for seamless performance.
- 🎨 **Customizable**: Modular and easy to adapt to your own needs.
- 📈 **Professional Yet Personal**: Highlights projects, skills, and achievements.
- 🎨 It can support various por

---

## 🛠️ Tech Stack

This portfolio is built with love and:

- ⚛️ **React** (Frontend)
- ▲ **Vercel** or ☁️ **AWS S3 & CloudFront** (Hosting and CDN)
- 🖌️ **Tailwind CSS** (Styling)
- 🛡️ **DatoCMS** (Content Management)
- 🧩 **Other Cool Tools**: GitHub Actions

---

## ⭐ Show Your Support

If you find this project helpful or inspiring, give it a ⭐ on GitHub—it means the world to me! 🌟

Happy coding! 💻✨

---

## 📚 Getting Started

Want to set this up locally? Follow these steps:

1. **Clone the Repository**: Copy the repository to your local system.
2. **Install Dependencies**: Use a package manager to install the required dependencies.

```bash
nvm install 18
nvm use 18
```

After upgrading Node.js, clear your node_modules and reinstall:

```bash
rm -rf node_modules
npm cache clean --force
npm install
```

3. **Configure Environment Variables**: Copy `.env.example` to `.env` and add your DatoCMS API tokens.
4. **Run the Project**: Start the development server.

```bash
npm start
```

5. **Visit the Local Server**: Open your browser and navigate to the local server URL.
   ![alt text](image.png)

---

## ▲ Deploy to Vercel

This app is a [Create React App](https://create-react-app.dev/) project. Vercel detects it automatically when you import the GitHub repo.

### 1. Import the repository

1. Go to [vercel.com/new](https://vercel.com/new) and sign in with GitHub.
2. Import this repository.
3. Leave the defaults (or confirm):
   - **Framework Preset:** Create React App
   - **Build Command:** `npm run build` or `yarn build`
   - **Output Directory:** `build`
   - **Install Command:** `npm install` or `yarn install`

Node version is read from `.nvmrc` (currently `20.12.2`).

### 2. Environment variables

In the Vercel project → **Settings** → **Environment Variables**, add the DatoCMS tokens (same names as local `.env`):

| Name | Purpose |
|------|---------|
| `REACT_APP_DATOCMS_ROR_TOKEN` | Main / Rails profile (also used on `*.vercel.app`) |
| `REACT_APP_DATOCMS_JAVA_TOKEN` | Java subdomain |
| `REACT_APP_DATOCMS_FRONTEND_TOKEN` | Frontend subdomain |
| `REACT_APP_DATOCMS_NODE_TOKEN` | Node subdomain |

Copy `.env.example` as a checklist. Redeploy after adding or changing variables.

### 3. Client-side routing

`vercel.json` rewrites all routes to `index.html` so React Router paths (e.g. `/browse`, `/skills`) work on refresh and direct links.

### 4. Custom domains (optional)

To mirror the original multi-subdomain setup, add each domain in Vercel → **Domains** (e.g. `java.yourdomain.com`) and point DNS to Vercel. Token selection is based on hostname in `src/queries/getDatoCmsToken.ts`.

### Build failures (CI / ESLint)

Vercel sets `CI=true`, so ESLint warnings fail the build. Fix unused imports and variables locally, then push:

```bash
# Windows PowerShell
$env:CI="true"; npm run build
```

---

## 🤝 Contribution Guidelines

Contributions are welcome and appreciated! 🥳 To contribute:

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Commit your changes with a descriptive message.
4. Push your changes to your branch.
5. Open a Pull Request. 🎉

---

## 🐛 Issues and Feature Requests

Found a bug? Have a feature in mind? 🤔 Feel free to raise an issue or suggest a feature!

1. Go to the **Issues** tab in the repository.
2. Click **New Issue**.
3. Provide a clear description of the bug or feature request.
4. If applicable, include screenshots or steps to reproduce the issue.

Your feedback is valuable and helps make this project better for everyone. Thank you for contributing!

---

## 🌟 Acknowledgments

- Thanks to [DatoCMS](https://www.datocms.com) for powering the dynamic content.
- Inspired by countless developers in the open-source community. 💻
- Special shoutout to all contributors—you rock! 🤘

---

## 📧 Contact Me

- 💼 [Portfolio Website](https://sumanthsamala.com)
- 📧 Email: [chintusamala96@gmail.com](mailto:chintusamala96@gmail.com)
- 🔗 [LinkedIn](https://uk.linkedin.com/in/sumanth-samala-82431161)

---

## 📜 License

This project is licensed under the MIT License. Feel free to use it, modify it, and share it! 🌈

---
