# 🚀 Quick Start Guide

## Get Started in 3 Steps

### 1️⃣ Start the Development Server
```bash
npm run dev
```

### 2️⃣ Open Your Browser
Navigate to: **http://localhost:5173**

### 3️⃣ That's It! 🎉
Your premium gym website is now running with cinematic scroll animations!

---

## 🎬 What You'll See

### Home Page Features:
- **Cinematic Hero**: Scroll-controlled frame animation (32 frames from your `/public/bg/` folder)
- **Animated Stats**: Counter animations with GSAP
- **Smooth Scrolling**: Lenis smooth scroll throughout
- **Premium UI**: Dark luxury aesthetic with glassmorphism

### Navigation:
- **Home** - Main page with hero animation
- **About** - Brand story and timeline
- **Trainers** - Meet the elite trainers
- **Membership** - Pricing plans with monthly/yearly toggle
- **Gallery** - Image gallery with filters and lightbox
- **Contact** - Contact form and location info

---

## 🎨 Key Features

✅ **Frame-by-frame scroll animation** using HTML5 Canvas  
✅ **GSAP ScrollTrigger** for smooth scroll effects  
✅ **Framer Motion** for UI animations  
✅ **Lenis** for buttery smooth scrolling  
✅ **Fully responsive** design  
✅ **Dark luxury** aesthetic  
✅ **Glassmorphism** effects  
✅ **Animated navigation** with mobile menu  

---

## 📱 Test Responsiveness

The site is fully responsive. Test it by:
1. Resizing your browser window
2. Opening DevTools (F12) and using device toolbar
3. Testing on actual mobile devices

---

## 🔧 Quick Customization

### Change Brand Name
Edit `src/components/Navbar.jsx` and `src/components/Footer.jsx`

### Adjust Animation Speed
Edit `src/components/CinematicHero.jsx`:
```javascript
scrollTrigger: {
  scrub: 0.5,  // Change this value
}
```

### Modify Colors
Edit `src/index.css` - look for `.gradient-text` and other color classes

---

## 📦 Build for Production

When ready to deploy:
```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

---

## 🌐 Deploy

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
Drag and drop the `dist/` folder to Netlify

---

## 💡 Tips

- **Scroll slowly** on the home page to see the frame animation
- **Hover over elements** to see micro-interactions
- **Try the mobile menu** by resizing to mobile view
- **Test all pages** to see different animations

---

## 🐛 Issues?

Check the browser console (F12) for any errors. Common issues:
- Frames not loading → Check `/public/bg/` folder
- Animation stuttering → Try reducing frame count or image size
- Smooth scroll not working → Check Lenis initialization

---

**Enjoy your premium gym website! 🏋️‍♂️**
