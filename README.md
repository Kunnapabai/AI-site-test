# ProFrame Windows & Doors - Premium Windows & Doors Website

## File Structure
```
my-website/
├── index.html          # Homepage
├── about.html          # About Us page
├── services.html       # Products page
├── contact.html        # Contact page
├── image-customization.txt  # Image customization guide
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   └── main.js         # Main JavaScript file
└── images/             # Images directory
```

## How to Use

### HTML Structure
- Each page references the shared CSS file in the `<head>`: `<link href="css/style.css" rel="stylesheet"/>`
- Each page loads the JavaScript file just before closing `</body>` tag: `<script src="js/main.js"></script>`

### CSS
- `style.css` contains shared styles for consistency across pages
- Additional Tailwind configuration is still in HTML files to preserve dynamic functionality
- Custom CSS classes and utilities are defined in style.css

### JavaScript
- `main.js` includes:
  - Dark mode toggle functionality
  - Mobile menu toggle
  - Smooth scrolling for anchor links
  - Form validation
  - Initialization of features on DOM load

### Images
- Store custom images in the `images/` directory
- Update image URLs in HTML files to reference local paths (e.g., `images/your-image.jpg`)

## Customization Tips

1. Update navigation links in all HTML files to match your site structure
2. Replace placeholder text with your actual content
3. Add your own images to the `images/` directory
4. Update contact information in all contact-related sections
5. Modify color scheme in both `style.css` and Tailwind config in HTML files

## Notes

- The project uses Tailwind CSS via CDN for utility classes
- Custom styles in `style.css` override or supplement Tailwind classes
- JavaScript functions are designed to work with the existing HTML structure
- The website is focused on promoting premium uPVC and aluminum windows and doors