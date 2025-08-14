# Siddhant Shukla - Portfolio Website

A modern, responsive portfolio website built with React and CSS, showcasing professional experience, projects, and skills.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Components**: Dynamic project filtering, contact form, and smooth scrolling
- **Performance Optimized**: Built with React 19 and Vite for optimal performance
- **SEO Ready**: Proper meta tags and semantic HTML structure
- **Accessibility**: ARIA labels and keyboard navigation support

## 🛠️ Tech Stack

- **Frontend**: React 19
- **Build Tool**: Vite
- **Styling**: CSS with CSS Variables
- **Icons**: SVG icons and emojis
- **Fonts**: Inter (UI) and JetBrains Mono (Code)

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Hero section
│   ├── About.jsx       # About and skills section
│   ├── Experience.jsx  # Work experience timeline
│   ├── Projects.jsx    # Portfolio projects
│   ├── Contact.jsx     # Contact form and info
│   └── Footer.jsx      # Footer with links
├── data/               # Data files
│   ├── profile.json    # Personal information
│   ├── experience.json # Work experience
│   └── projects.json   # Project portfolio
├── App.jsx             # Main app component
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📝 Customization

### Personal Information

Update the following files with your information:

- `src/data/profile.json` - Personal details, contact info, and social links
- `src/data/experience.json` - Work experience and achievements
- `src/data/projects.json` - Portfolio projects and descriptions

### Styling

The website uses CSS variables for easy customization. Main colors and styles can be modified in `src/index.css`:

```css
:root {
  --primary-color: #2563eb;      /* Main brand color */
  --secondary-color: #64748b;    /* Secondary text color */
  --accent-color: #f59e0b;      /* Accent color */
  --text-primary: #1e293b;      /* Primary text color */
  --bg-primary: #ffffff;         /* Background color */
}
```

### Adding New Sections

To add new sections:

1. Create a new component in `src/components/`
2. Import and add it to `src/App.jsx`
3. Add navigation link in `src/components/Header.jsx`

## 🎨 Design Features

- **Color Scheme**: Professional blue and orange accent colors
- **Typography**: Clean, readable fonts with proper hierarchy
- **Animations**: Subtle hover effects and smooth transitions
- **Layout**: Grid-based responsive layouts
- **Components**: Reusable card and button components

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: dev.siddhant.shukla@gmail.com
- **LinkedIn**: [Siddhant Shukla](https://linkedin.com/in/siddhant-shukla-6b4564275)
- **GitHub**: [Tr8n](https://github.com/Tr8n)

---

Built with ❤️ using React and modern web technologies.
