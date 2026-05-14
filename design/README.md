# 🏋️ Beast Fitness - Premium Gym Website

A modern, cinematic gym website built with React, featuring Apple-style scroll animations with frame-by-frame video playback using GSAP ScrollTrigger and HTML5 Canvas.

## ✨ Features

- **Cinematic Scroll Animation**: Frame-by-frame video playback controlled by scroll position
- **HTML5 Canvas Rendering**: Optimized frame rendering with responsive scaling
- **GSAP ScrollTrigger**: Smooth scroll-based animations
- **Framer Motion**: Beautiful UI transitions and micro-interactions
- **Lenis Smooth Scroll**: Buttery smooth scrolling experience
- **Glassmorphism UI**: Modern dark luxury aesthetic
- **Fully Responsive**: Works perfectly on all devices
- **6 Complete Pages**: Home, About, Trainers, Membership, Gallery, Contact

## 🛠️ Tech Stack

- **React 19** with Vite
- **Tailwind CSS 4** for styling
- **GSAP + ScrollTrigger** for scroll animations
- **Framer Motion** for UI animations
- **Lenis** for smooth scrolling
- **React Router DOM** for navigation

## 📦 Installation

1. **Navigate to the project folder:**
```bash
cd "c:\web dev\Projects\Beast Fitness\design"
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start development server:**
```bash
npm run dev
```

4. **Open your browser:**
```
http://localhost:5173
```

## 📁 Project Structure

```
design/
├── public/
│   └── bg/                    # Frame images (frame-4.png to frame-35.png)
├── src/
│   ├── components/
│   │   ├── CinematicHero.jsx  # Main scroll animation component
│   │   ├── Navbar.jsx         # Animated navigation
│   │   ├── Footer.jsx         # Footer component
│   │   └── StatsSection.jsx   # Animated stats
│   ├── pages/
│   │   ├── Home.jsx           # Homepage
│   │   ├── About.jsx          # About page
│   │   ├── Trainers.jsx       # Trainers page
│   │   ├── Membership.jsx     # Membership plans
│   │   ├── Gallery.jsx        # Gallery with lightbox
│   │   └── Contact.jsx        # Contact form
│   ├── hooks/
│   │   └── useFramePreloader.js  # Frame preloading hook
│   ├── context/
│   │   └── SmoothScrollContext.jsx  # Smooth scroll provider
│   ├── App.jsx                # Main app component
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── package.json
└── vite.config.js
```

## 🎬 Frame Animation Setup

### Current Frame Setup
Your frames are located at: `/public/bg/`
- Format: `frame-4.png` to `frame-35.png` (32 frames total)
- The animation automatically loads and plays these frames based on scroll

### How It Works
1. **Preloading**: All frames are preloaded before animation starts
2. **Canvas Rendering**: Frames are drawn on HTML5 canvas for performance
3. **Scroll Control**: GSAP ScrollTrigger maps scroll position to frame index
4. **Responsive**: Canvas automatically scales to viewport size

### Adding More Frames
If you want to add more frames:
1. Place frames in `/public/bg/` folder
2. Update `useFramePreloader(32, 4)` in `CinematicHero.jsx`:
   - First parameter: total number of frames
   - Second parameter: starting frame number

## 🎨 Customization

### Colors
Edit `src/index.css` to change the color scheme:
```css
/* Main background */
body { @apply bg-black; }

/* Gradient text */
.gradient-text {
  background: linear-gradient(135deg, #ffffff 0%, #888888 100%);
}
```

### Animation Speed
Edit `CinematicHero.jsx`:
```javascript
scrollTrigger: {
  scrub: 0.5,  // Lower = faster, Higher = slower
  end: '+=300%',  // Scroll distance
}
```

### Smooth Scroll Settings
Edit `SmoothScrollContext.jsx`:
```javascript
const lenis = new Lenis({
  duration: 1.2,  // Scroll duration
  wheelMultiplier: 1,  // Scroll speed
});
```

## 📱 Pages Overview

### 1. Home Page
- Cinematic hero with frame animation
- Stats section with animated counters
- About preview
- Trainers preview
- Membership plans preview
- Testimonials

### 2. About Page
- Brand story
- Mission & Vision
- Animated timeline

### 3. Trainers Page
- Trainer cards with hover effects
- Certifications and specialties
- Book session CTA

### 4. Membership Page
- 3 pricing tiers (Basic, Premium, Elite)
- Monthly/Yearly toggle
- Comparison table
- FAQ section

### 5. Gallery Page
- Masonry grid layout
- Category filters
- Lightbox modal

### 6. Contact Page
- Contact form
- Location info
- Business hours
- Social links

## 🚀 Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

## 🌐 Deployment

### Deploy to Vercel

1. **Install Vercel CLI:**
```bash
npm i -g vercel
```

2. **Deploy:**
```bash
vercel
```

3. **Follow prompts and your site will be live!**

### Deploy to Netlify

1. **Build the project:**
```bash
npm run build
```

2. **Drag and drop the `dist` folder to Netlify**

Or use Netlify CLI:
```bash
npm i -g netlify-cli
netlify deploy --prod
```

## ⚡ Performance Optimization

### Already Implemented
- ✅ Frame preloading with progress indicator
- ✅ Canvas rendering (faster than img tags)
- ✅ requestAnimationFrame optimization
- ✅ Lazy loading with Framer Motion viewport detection
- ✅ Optimized GSAP ScrollTriggers
- ✅ Smooth scroll with Lenis

### Additional Optimizations
1. **Convert frames to WebP:**
```bash
# Use an image converter to convert PNG to WebP
# WebP provides better compression
```

2. **Reduce frame count** if needed for slower devices

3. **Add loading="lazy"** to images outside viewport

## 🎯 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## 📝 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🐛 Troubleshooting

### Frames not loading
- Check that frames are in `/public/bg/` folder
- Verify frame naming: `frame-4.png`, `frame-5.png`, etc.
- Check browser console for errors

### Animation stuttering
- Reduce frame count
- Convert frames to WebP
- Lower image resolution
- Adjust `scrub` value in ScrollTrigger

### Smooth scroll not working
- Check that Lenis is properly initialized
- Verify no CSS `overflow: hidden` on body
- Check browser console for errors

## 🎨 Design Inspiration

- Apple product reveal pages
- Nike premium campaigns
- Luxury fitness brands
- Cinematic Netflix presentations

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Support

For issues or questions, please open an issue on GitHub.

---

**Built with ❤️ for Beast Fitness**
