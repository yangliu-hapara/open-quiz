# Interactive Quiz - GitHub Pages

A beautiful, interactive quiz page that reads questions and answers from URL parameters. Users can select answers, submit their quiz, and see instant results with feedback. Perfect for hosting on GitHub Pages.

## Features

- 📱 **Responsive Design** - Works seamlessly on all devices (desktop, tablet, mobile)
- 🎨 **Modern UI** - Beautiful gradient background with clean card-based layout and smooth animations
- 🔗 **URL-Based** - All quiz data passed via URL parameters (no backend required)
- 🔐 **Base64 Encoding** - Support for base64-encoded parameters for cleaner URLs
- 🖱️ **Interactive Quiz** - Click to select answers, submit when complete, see results instantly
- 🎯 **Multiple Choice** - Support for multiple choice questions with labeled options (A, B, C, etc.)
- ✅ **Answer Feedback** - Correct answers highlighted with green checkmark, incorrect with red X after submission
- 📊 **Results Display** - Score, percentage, and encouraging message shown after completion
- 📋 **Rich Metadata** - Optional quiz title and description support
- 🌐 **GitHub Pages Ready** - Zero configuration deployment

## Design & Behavior

- **Interactive Quiz**: Click on answer options to select your choice for each question
- **Submit When Ready**: Submit button appears when all questions are answered
- **Instant Results**: After submission, see your score, percentage, and personalized feedback
- **Answer Feedback**: Correct answers shown with green background and ✓ checkmark; incorrect selections marked with red background and ✗
- **Clean Interface**: No default title shown unless provided via URL parameters
- **Modern Styling**: Gradient purple background with white card container and smooth animations

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
- `title` or `title_b64` - Quiz title (optional, displayed at top if provided)
- `description` or `description_b64` - Quiz description (optional, displayed below title)
- `question1`, `question2`, etc. or `question1_b64`, `question2_b64`, etc. - Question text
- `q1_option1`, `q1_option2`, etc. or `q1_option1_b64`, `q1_option2_b64`, etc. - Options for question 1 (displayed as A, B, C, etc.)
- `q1_answer` or `q1_answer_b64` - Correct answer (can be option text or option number: 1, 2, 3, etc.)

**Note:** Users click options to select answers. The submit button appears when all questions are answered. After submission, correct answers are revealed and results are displayed.

### Helper Script

Use the included `generate-url.js` script to generate base64-encoded URLs:

```bash
node generate-url.js
```

This will output example URLs using base64 encoding methods with ready-to-use examples.

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

### Example 1: Full Featured Quiz with Base64 (Recommended)

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

**Result:** Clean, short URL with all quiz data encoded. Users interactively select answers and see results after submission.

### Example 2: Multiple Choice with Individual Base64 Parameters

```javascript
const params = new URLSearchParams();
params.append('title_b64', btoa(unescape(encodeURIComponent('Science Quiz'))));
params.append('question1_b64', btoa(unescape(encodeURIComponent('What is H2O?'))));
params.append('q1_option1_b64', btoa(unescape(encodeURIComponent('Water'))));
params.append('q1_option2_b64', btoa(unescape(encodeURIComponent('Oxygen'))));
params.append('q1_option3_b64', btoa(unescape(encodeURIComponent('Hydrogen'))));
params.append('q1_answer_b64', btoa(unescape(encodeURIComponent('Water'))));
const url = `https://yourusername.github.io/open-quiz/?${params.toString()}`;
```

**Note:** All quizzes are interactive. Users click options to select answers, submit when complete, and see their results with correct answers revealed.

## Sample Quiz Data

Here's a complete sample quiz data structure you can use:

```javascript
const sampleQuizData = {
    title: "Math Quiz",
    description: "Test your basic math skills",
    questionData: [
        {
            question: "What is 2+2?",
            options: ["3", "4", "5"],
            answer: "4"
        },
        {
            question: "What is the capital of France?",
            options: ["London", "Paris", "Berlin"],
            answer: "Paris"
        },
        {
            question: "What is 3*3?",
            options: ["6", "9", "12"],
            answer: "9"
        },
        {
            question: "What is 10/2?",
            options: ["4", "5", "6"],
            answer: "5"
        },
        {
            question: "What is the largest planet in our solar system?",
            options: ["Earth", "Mars", "Jupiter"],
            answer: "Jupiter"
        }
    ]
};

// Encode to base64
const jsonString = JSON.stringify(sampleQuizData);
const base64 = btoa(unescape(encodeURIComponent(jsonString)));
const url = `https://yourusername.github.io/open-quiz/?data_b64=${base64}`;
```

**Note:** When you visit the quiz page without any parameters, a demo quiz will be displayed automatically so you can see how it works!

## Quick Reference

### URL Parameter Formats

| Format | Parameter | Example |
|--------|-----------|---------|
| **Base64 JSON** (Recommended) | `data_b64` | `?data_b64=eyJ0aXRsZSI6...` |
| **Base64 Individual** | `*_b64` | `?title_b64=...&question1_b64=...` |
| **Regular URL** | Standard | `?title=Quiz&question1=Q1` |

### Quiz Flow

1. **Select Answers**: Click on answer options (A, B, C, etc.) to make your choice
2. **Submit Quiz**: Submit button appears when all questions are answered
3. **View Results**: After submission, see your score, percentage, and feedback message
4. **See Answers**: Correct answers are revealed with green background and ✓ checkmark
5. **Review Mistakes**: Incorrect selections are marked with red background and ✗ mark

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

