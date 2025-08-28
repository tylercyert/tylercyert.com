# Tyler Cyert - Personal Portfolio

A modern, responsive personal portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- **Responsive Design**: Mobile-first design that works on all devices
- **Dark/Light Mode**: Toggle between dark and light themes
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **Modern UI**: Clean, professional design with Tailwind CSS
- **Performance**: Optimized for speed and SEO

## Sections

- **Hero**: Introduction with name, tagline, and call-to-action
- **About**: Professional experience timeline and technical skills
- **Projects**: Featured projects with detailed descriptions
- **GitHub**: Contribution graph, stats, and pinned repositories
- **Footer**: Contact information and social links

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **GitHub Integration**: react-github-calendar
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

Update the following files with your information:

- `components/Hero.tsx` - Name, tagline, and summary
- `components/About.tsx` - Experience and skills
- `components/Projects.tsx` - Project details
- `components/GitHub.tsx` - GitHub username and stats
- `components/Footer.tsx` - Contact information

### Styling

- Colors: Modify `tailwind.config.js` for custom color schemes
- Animations: Adjust Framer Motion settings in components
- Layout: Update Tailwind classes for different layouts

### GitHub Integration

1. Update the GitHub username in `components/GitHub.tsx`
2. Replace mock data with real GitHub API calls if desired
3. Customize the contribution calendar theme

## Building for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## Deployment

This portfolio can be deployed to various platforms:

- **Vercel**: Recommended for Next.js projects
- **Netlify**: Great for static sites
- **AWS/GCP**: For custom server deployments
- **Docker**: Containerized deployment

### Docker Deployment

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Email**: tyler@example.com
- **LinkedIn**: [linkedin.com/in/tylercyert](https://linkedin.com/in/tylercyert)
- **GitHub**: [github.com/TylerCyert](https://github.com/TylerCyert)

---

Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion.
