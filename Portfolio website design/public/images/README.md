# Images Folder

This folder contains static image assets for the portfolio website.

## Structure

- `/projects` - Project screenshots and related images
- `/icons` - Icon files and logos
- `/general` - General purpose images

## Usage

Images in this folder can be referenced using the path `/images/...` in your components.

Example:
```tsx
<img src="/images/projects/library-system.png" alt="Library Management System" />
```

## Image Guidelines

- Use descriptive file names (e.g., `library-management-dashboard.png`)
- Optimize images for web (compress before uploading)
- Recommended formats: PNG for screenshots, JPG for photos, SVG for icons
- Keep file sizes reasonable (aim for < 500KB per image)
