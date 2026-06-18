# Portfolio Website - Editing Guide

Welcome to your portfolio website! This guide will help you understand where to edit all the content in your portfolio.

## 📁 File Structure

```
/src/app/
  ├── components/          # All reusable components
  │   ├── hero.tsx        # Home page hero section
  │   ├── navigation.tsx  # Top navigation bar
  │   ├── education.tsx   # Education page content
  │   ├── experience.tsx  # Experience page content
  │   ├── projects.tsx    # Projects section (Home & All Projects)
  │   ├── contact.tsx     # Contact section
  │   └── footer.tsx      # Footer section
  ├── pages/              # Page components
  └── routes.ts           # Route configuration
```

---

## 🎨 Color Palette

Your custom colors are already applied throughout:
- **Quantum Blue**: `#0E2A47` (Dark blue - backgrounds)
- **Pulse Violet**: `#8A6CFF` (Purple - accents and text)

---

## 📝 Where to Edit Content

### 1. **Hero Section** (`/src/app/components/hero.tsx`)

**Your Name:**
```typescript
// Line ~18
<h1>Akarsh.P.Gupta</h1>
```

**Your Title:**
```typescript
// Line ~33
<p>Information Technology Student</p>
```

**Intro Paragraph:**
```typescript
// Line ~48-51
<p>Welcome to my portfolio. I'm a BTech student...</p>
```

**Social Links:**
```typescript
// Line ~62 - GitHub
href="https://github.com/Akarsh7021"

// Line ~73 - LinkedIn  
href="https://www.linkedin.com/in/akarshgupta7021"

// Line ~84 - Email
href="mailto:akarshgupta7021@gmail.com"
```

---

### 2. **Navigation** (`/src/app/components/navigation.tsx`)

**Brand Name in Nav Bar:**
```typescript
// Line ~35
<div>Akarsh.P.Gupta</div>
```

**Navigation Tabs:**
```typescript
// Line ~16-21
const tabs = [
  { name: 'Home', path: '/' },
  { name: 'Education', path: '/education' },
  { name: 'Experience', path: '/experience' },
  { name: 'All Projects', path: '/projects' }
];
```

---

### 3. **Education Page** (`/src/app/components/education.tsx`)

**Your Education Details:**
```typescript
// Line ~9-18
const education = [
  {
    degree: "Bachelor of Technology in Information Technology",
    institution: "Kwantlen Polytechnic University",
    period: "Sept 2023 - Present",
    description: "Focused on software development...",
    achievements: [
      "Completed 4+ major projects...",
      "Proficient in LAN/WAN setup...",
      "Strong foundation in web development..."
    ]
  }
];
```

**Your Courses:**
```typescript
// Line ~25-34
const courses = [
  { name: "Data Structures & Algorithms", grade: "A+" },
  { name: "Web Development", grade: "A+" },
  // Add or remove courses here
];
```

**Your Certifications:**
```typescript
// Line ~41-60
const certifications = [
  {
    title: "Microsoft IT Support Specialist Professional",
    issuer: "Coursera",
    date: "Feb 2026"
  },
  // Add or remove certifications here
];
```

---

### 4. **Experience Page** (`/src/app/components/experience.tsx`)

**Your Work Experience:**
```typescript
// Line ~9-35
const experiences = [
  {
    title: "Agent (Seasonal, Part Time)",
    company: "Geek Squad, Best Buy",
    location: "Surrey, BC",
    period: "Oct 2025 - Dec 2025",
    description: "Provided technical support...",
    achievements: [
      "Assisted customers with hardware...",
      "Supported installation and setup...",
      // Add more achievements
    ],
    technologies: ["Windows", "macOS", "Hardware Diagnostics"]
  },
  // Add more jobs here
];
```

---

### 5. **Projects** (`/src/app/components/projects.tsx`)

**Your Projects:**
```typescript
// Projects are displayed differently on Home vs All Projects page
// - Home Page: Shows first 3 completed + first 2 in-development
// - All Projects Page: Shows ALL projects

const projects: Project[] = [
  // COMPLETED PROJECTS
  {
    id: "1",
    title: "Library Management System",
    description: "A comprehensive web-based system...",
    image: "https://...", // Main image
    hoverImage: "https://...", // Image shown on hover (optional)
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    status: "completed",
    githubUrl: "https://github.com/Akarsh7021",
    liveUrl: "#" // Add your live demo URL
  },
  {
    id: "3",
    title: "Database Systems Project - Business Scenario",
    description: "...",
    technologies: ["SQL", "Database Design", "ERD", "MySQL"],
    status: "completed",
    githubUrl: "#" // Use "#" to show "No Code" instead of a link
  },
  
  // IN DEVELOPMENT PROJECTS
  {
    id: "5",
    title: "Cloud Migration",
    description: "Leading a comprehensive cloud migration...",
    technologies: ["AWS", "Azure", "Cloud Architecture"],
    status: "in-development",
    githubUrl: "https://github.com/Akarsh7021"
  }
];
```

**To Add a New Project:**
1. Copy an existing project object
2. Change the `id` to a unique number
3. Update `title`, `description`, `image`, and `hoverImage` (optional)
4. Add your technologies to the `technologies` array
5. Set `status` to either `"completed"` or `"in-development"`
6. Add your GitHub URL, or use `"#"` to show "No Code"
7. Optionally add a `liveUrl` for live demos

**Hover Image Feature:**
- When you hover over a project card, it will smoothly transition to show the `hoverImage`
- If you don't want a hover effect, simply leave out the `hoverImage` field
- The transition is smooth and takes 500ms

**"No Code" Feature:**
- Set `githubUrl: "#"` to display "No Code" instead of "Code"
- The link will be grayed out and non-clickable
- Useful for documentation-only or design projects

---

### 6. **Contact Section** (`/src/app/components/contact.tsx`)

**Your Contact Information:**
```typescript
// Line ~10-15
const contactInfo = {
  primaryEmail: "akarshgupta7021@gmail.com",
  schoolEmail: "akarsh.gupta@student.kpu.ca",
  phone: "(778) 680-7021",
  location: "Surrey, BC"
};
```

**Contact Description:**
```typescript
// Line ~43
<p>I'm always open to discussing new opportunities...</p>
```

---

### 7. **Footer** (`/src/app/components/footer.tsx`)

**Copyright Text:**
```typescript
// Line ~16
<p>© 2026 Akarsh.P.Gupta. All rights reserved.</p>
```

**Footer Message:**
```typescript
// Line ~26
<p>Built with passion and dedication...</p>
```

---

## 🖼️ How to Update Images

### Option 1: Using Unsplash (Current Setup)
The project currently uses Unsplash images. These are placeholder images that automatically load from Unsplash.

### Option 2: Using Your Own Images
To use your own images:

1. Place your image in a public folder or host it online
2. Update the `image` field in your project with the URL
3. Or use the special Figma asset import (see below)

### Option 3: Using Figma Assets
If you have a Figma asset:
```typescript
import myImage from "figma:asset/YOUR_ASSET_ID.png";

// Then use in your project:
image: myImage
```

---

## 🎯 Quick Tips

1. **All comments start with** `/* ======== */` or `{/* ======== */}`
2. **Look for these comment blocks** to find editable sections
3. **Text content** is between `<p>` or `<h1>`, `<h2>`, etc.
4. **Links** are in `href="..."` attributes
5. **Arrays** use `[ ... ]` and objects use `{ ... }`

---

## 🚀 Common Tasks

### Add a New Certification
Go to `/src/app/components/education.tsx` → Find `certifications` array → Add:
```typescript
{
  title: "Your Certification Name",
  issuer: "Issuing Organization",
  date: "Month Year"
}
```

### Add a New Job Experience
Go to `/src/app/components/experience.tsx` → Find `experiences` array → Add a new job object

### Update Social Media Links
Go to `/src/app/components/hero.tsx` → Find the social links section → Update `href` values

### Change Your Email
Go to `/src/app/components/contact.tsx` → Update `contactInfo` object

---

## 📧 Your Current Information

- **Name**: Akarsh.P.Gupta
- **Location**: Surrey, BC
- **School**: Kwantlen Polytechnic University
- **GitHub**: https://github.com/Akarsh7021
- **LinkedIn**: https://www.linkedin.com/in/akarshgupta7021
- **Email (Primary)**: akarshgupta7021@gmail.com
- **Email (School)**: akarsh.gupta@student.kpu.ca
- **Phone**: (778) 680-7021

---

## 🎨 Font System

Your custom fonts are already configured:
- **Headings**: Old Standard TT Bold 700
- **Body Text**: Montserrat Light 300

No need to change font styling unless you want a different look!

---

## ❓ Need Help?

- Each file has detailed comments explaining what each section does
- Look for comment blocks that say "Edit [description] here"
- All editable content is clearly marked with comments

Happy editing! 🎉