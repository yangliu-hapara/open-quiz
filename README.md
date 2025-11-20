# Quiz Display - GitHub Pages

A simple, beautiful static page for displaying quiz questions and answers from URL parameters. Perfect for hosting on GitHub Pages.

## Features

- 📱 Responsive design that works on all devices
- 🎨 Modern, clean UI with smooth animations
- 🔗 Reads questions and answers from URL parameters
- 🔐 Base64 encoding support for cleaner URLs
- 👁️ Toggle answers on/off individually or all at once
- 📝 Supports single or multiple questions
- 🎯 Multiple choice questions with options
- 📋 Quiz title and description support
- 🌐 Ready for GitHub Pages deployment

## Usage

### Base64 Encoding (Recommended)

Base64 encoding produces cleaner URLs and handles special characters better. Two methods are supported:

#### Method 1: Single JSON Parameter (Recommended)

Encode your entire quiz as a single base64 JSON parameter:

```javascript
const quizData = {
    title: "Math Quiz",
    description: "Test your basic math skills",
    questionData: [
        {
            question: "What is 2+2?",
            options: ["3", "4", "5"],
            answer: "4"
        },
        {
            question: "What is 3*3?",
            options: ["6", "9", "12"],
            answer: "9"
        }
    ]
};

const jsonString = JSON.stringify(quizData);
const base64 = btoa(unescape(encodeURIComponent(jsonString)));
const url = `https://yourusername.github.io/open-quiz/?data_b64=${base64}`;
```

#### Method 2: Individual Base64 Parameters

Use `_b64` suffix for each parameter:

```javascript
const params = new URLSearchParams();
params.append('title_b64', btoa(unescape(encodeURIComponent('Math Quiz'))));
params.append('question1_b64', btoa(unescape(encodeURIComponent('What is 2+2?'))));
params.append('q1_option1_b64', btoa(unescape(encodeURIComponent('3'))));
params.append('q1_option2_b64', btoa(unescape(encodeURIComponent('4'))));
params.append('q1_answer_b64', btoa(unescape(encodeURIComponent('4'))));
const url = `https://yourusername.github.io/open-quiz/?${params.toString()}`;
```

### Regular URL Encoding

For simple cases, you can use regular URL encoding:

```
?title=Math Quiz&description=Test your math skills&question1=What is 2+2?&q1_option1=3&q1_option2=4&q1_option3=5&q1_answer=4&question2=What is 3*3?&q2_option1=6&q2_option2=9&q2_option3=12&q2_answer=9
```

**Parameter Structure:**
- `title` or `title_b64` - Quiz title (optional)
- `description` or `description_b64` - Quiz description (optional)
- `question1`, `question2`, etc. or `question1_b64`, `question2_b64`, etc. - Question text
- `q1_option1`, `q1_option2`, etc. or `q1_option1_b64`, `q1_option2_b64`, etc. - Options for question 1
- `q1_answer` or `q1_answer_b64` - Correct answer (can be option text or option number: 1, 2, 3, etc.)

### Legacy Format: Simple Q&A

**Single Question:**
```
?question=What is 2+2?&answer=4
```

**Multiple Questions:**
```
?question=What is 2+2?&answer=4&question=What is the capital of France?&answer=Paris
```

### Helper Script

Use the included `generate-url.js` script to generate base64-encoded URLs:

```bash
node generate-url.js
```

This will output example URLs using all three encoding methods.

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

### Example 1: Full Featured Quiz with Multiple Choice
```javascript
const title = "Math Quiz";
const description = "Test your basic math skills";
const question1 = "What is 2+2?";
const q1_options = ["3", "4", "5"];
const q1_answer = "4";
const question2 = "What is 3*3?";
const q2_options = ["6", "9", "12"];
const q2_answer = "9";

const url = `https://yourusername.github.io/open-quiz/?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}&question1=${encodeURIComponent(question1)}&q1_option1=${encodeURIComponent(q1_options[0])}&q1_option2=${encodeURIComponent(q1_options[1])}&q1_option3=${encodeURIComponent(q1_options[2])}&q1_answer=${encodeURIComponent(q1_answer)}&question2=${encodeURIComponent(question2)}&q2_option1=${encodeURIComponent(q2_options[0])}&q2_option2=${encodeURIComponent(q2_options[1])}&q2_option3=${encodeURIComponent(q2_options[2])}&q2_answer=${encodeURIComponent(q2_answer)}`;
```

### Example 2: Simple Q&A Format
```
https://yourusername.github.io/open-quiz/?question=What%20is%202%2B2%3F&answer=4
```

### Example 3: Multiple Simple Questions
```
https://yourusername.github.io/open-quiz/?question=What%20is%202%2B2%3F&answer=4&question=What%20is%20the%20capital%20of%20France%3F&answer=Paris
```

## File Structure

```
open-quiz/
├── index.html        # Main quiz display page
├── generate-url.js   # Helper script to generate base64 URLs
└── README.md         # This file
```

## Browser Support

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

Feel free to use this project for any purpose!

