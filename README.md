# Quiz Display - GitHub Pages

A simple, beautiful static page for displaying quiz questions and answers from URL parameters. Perfect for hosting on GitHub Pages.

## Features

- 📱 Responsive design that works on all devices
- 🎨 Modern, clean UI with smooth animations
- 🔗 Reads questions and answers from URL parameters
- 👁️ Toggle answers on/off individually or all at once
- 📝 Supports single or multiple questions
- 🌐 Ready for GitHub Pages deployment

## Usage

### Single Question Format

```
?question=What is 2+2?&answer=4
```

### Multiple Questions Format

```
?question=What is 2+2?&answer=4&question=What is the capital of France?&answer=Paris
```

### URL Encoding

For questions or answers with special characters, use `encodeURIComponent()`:

**JavaScript Example:**
```javascript
const question = "What is 2+2?";
const answer = "4";
const url = `https://yourusername.github.io/open-quiz/?question=${encodeURIComponent(question)}&answer=${encodeURIComponent(answer)}`;
```

**Example URL:**
```
https://yourusername.github.io/open-quiz/?question=What%20is%202%2B2%3F&answer=4
```

## Deployment to GitHub Pages

1. **Create a GitHub repository** (e.g., `open-quiz`)

2. **Push this code to your repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/open-quiz.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click on **Settings**
   - Scroll down to **Pages** section
   - Under **Source**, select **Deploy from a branch**
   - Choose **main** branch and **/ (root)** folder
   - Click **Save**

4. **Access your page:**
   Your quiz page will be available at:
   ```
   https://yourusername.github.io/open-quiz/
   ```

## Examples

### Example 1: Math Quiz
```
https://yourusername.github.io/open-quiz/?question=What%20is%202%2B2%3F&answer=4
```

### Example 2: Multiple Questions
```
https://yourusername.github.io/open-quiz/?question=What%20is%202%2B2%3F&answer=4&question=What%20is%20the%20capital%20of%20France%3F&answer=Paris&question=What%20is%20the%20largest%20planet%3F&answer=Jupiter
```

## File Structure

```
open-quiz/
├── index.html    # Main quiz display page
└── README.md     # This file
```

## Browser Support

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

Feel free to use this project for any purpose!

