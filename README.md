# 🚀 Ubaidurrahman's Portfolio

A modern, responsive portfolio website built with Next.js, showcasing my projects, blog posts, and professional journey as a developer.

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
[![Next.js](https://img.shields.io/badge/Next.js-13+-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?logo=typescript)](https://www.typescriptlang.org/)

## ✨ Features

- **Dynamic Blog System**: Write and publish blog posts using Markdown with full syntax highlighting
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices
- **Dark/Light Mode**: Seamless theme switching with system preference detection
- **Fast Performance**: Built with Next.js for optimal loading speeds and SEO
- **Modern UI**: Clean, minimalist design with smooth animations using Framer Motion
- **Database Integration**: Powered by Supabase for efficient content management

## 🛠 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) - React framework for production
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Database**: [Supabase](https://supabase.com/) - Open source Firebase alternative
- **Content**: Markdown - For blog posts and content management
- **Animations**: [Framer Motion](https://www.framer.com/motion/) - Production-ready animation library

## 🚀 Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Ub207/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory and add your Supabase credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
portfolio/
├── components/          # Reusable React components
│   ├── Header.tsx      # Navigation header with theme toggle
│   ├── ProfileCard.tsx # Profile information and social links
│   └── HeadTag.tsx     # SEO meta tags component
├── pages/              # Next.js pages
│   ├── index.tsx       # Home page
│   ├── posts.tsx       # Blog posts listing
│   └── post/[slug].tsx # Individual blog post
├── public/             # Static assets
├── utils/              # Utility functions
│   └── supabaseClient.ts # Supabase configuration
└── styles/             # Global styles
```

## 🎨 Customization

You can easily customize this portfolio by:

- Updating personal information in `components/ProfileCard.tsx`
- Modifying the color scheme in `tailwind.config.js`
- Adding new blog posts through the Supabase dashboard
- Customizing the header navigation in `components/Header.tsx`

## 📝 Blog Posts

Blog posts are managed through Supabase and written in Markdown format. The portfolio supports:

- Syntax highlighting for code blocks
- Rich text formatting
- Dynamic routing for individual posts
- Post metadata (date, author, tags)

## 🌐 Deployment

This portfolio is ready to be deployed on platforms like:

- **Vercel** (Recommended): 
  ```bash
  vercel --prod
  ```
- **Netlify**: Connect your GitHub repository
- **AWS Amplify**: Deploy with continuous integration

## 📧 Contact

Feel free to reach out if you have any questions or suggestions!

- **Email**: [usmanubaidurrehman@gmail.com](mailto:usmanubaidurrehman@gmail.com)
- **LinkedIn**: [linkedin.com/in/ubaidurrehman-usman-2bbb59245](https://www.linkedin.com/in/ubaidurrehman-usman-2bbb59245/)
- **GitHub**: [github.com/Ub207](https://github.com/Ub207)
- **Twitter**: [@ubaidullahsahab](https://x.com/ubaidullahsahab)

## 📄 License

This project is licensed under the MIT License - feel free to use it for your own portfolio!

## 🙏 Acknowledgments

- Built with inspiration from modern portfolio designs
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

⭐ If you found this portfolio helpful, please consider giving it a star!
