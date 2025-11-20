#!/usr/bin/env node

/**
 * Helper script to generate base64-encoded quiz URLs
 * Usage: node generate-url.js
 */

// Example quiz data
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
        },
        {
            question: "What is 10/2?",
            options: ["4", "5", "6"],
            answer: "5"
        }
    ]
};

// Method 1: Single base64 JSON parameter (Recommended)
function generateSingleBase64Url(baseUrl, data) {
    const jsonString = JSON.stringify(data);
    const base64 = Buffer.from(jsonString).toString('base64');
    return `${baseUrl}?data_b64=${base64}`;
}

// Method 2: Individual base64 parameters
function generateIndividualBase64Url(baseUrl, data) {
    const params = new URLSearchParams();
    
    if (data.title) {
        params.append('title_b64', Buffer.from(data.title).toString('base64'));
    }
    if (data.description) {
        params.append('description_b64', Buffer.from(data.description).toString('base64'));
    }
    
    data.questionData.forEach((q, index) => {
        const qNum = index + 1;
        params.append(`question${qNum}_b64`, Buffer.from(q.question).toString('base64'));
        
        q.options.forEach((opt, optIndex) => {
            params.append(`q${qNum}_option${optIndex + 1}_b64`, Buffer.from(opt).toString('base64'));
        });
        
        if (q.answer) {
            params.append(`q${qNum}_answer_b64`, Buffer.from(q.answer).toString('base64'));
        }
    });
    
    return `${baseUrl}?${params.toString()}`;
}

// Method 3: Regular URL encoding (for comparison)
function generateRegularUrl(baseUrl, data) {
    const params = new URLSearchParams();
    
    if (data.title) {
        params.append('title', data.title);
    }
    if (data.description) {
        params.append('description', data.description);
    }
    
    data.questionData.forEach((q, index) => {
        const qNum = index + 1;
        params.append(`question${qNum}`, q.question);
        
        q.options.forEach((opt, optIndex) => {
            params.append(`q${qNum}_option${optIndex + 1}`, opt);
        });
        
        if (q.answer) {
            params.append(`q${qNum}_answer`, q.answer);
        }
    });
    
    return `${baseUrl}?${params.toString()}`;
}

// Generate URLs
const baseUrl = 'https://yangliu-hapara.github.io/open-quiz';

console.log('='.repeat(80));
console.log('QUIZ URL GENERATOR');
console.log('='.repeat(80));
console.log('\n');

console.log('Method 1: Single Base64 JSON Parameter (Recommended)');
console.log('-'.repeat(80));
console.log(generateSingleBase64Url(baseUrl, quizData));
console.log('\n');

console.log('Method 2: Individual Base64 Parameters');
console.log('-'.repeat(80));
console.log(generateIndividualBase64Url(baseUrl, quizData));
console.log('\n');

console.log('Method 3: Regular URL Encoding (for comparison)');
console.log('-'.repeat(80));
console.log(generateRegularUrl(baseUrl, quizData));
console.log('\n');

console.log('='.repeat(80));
console.log('JavaScript Code Example:');
console.log('-'.repeat(80));
console.log(`
// In browser JavaScript:
const quizData = ${JSON.stringify(quizData, null, 2)};

// Method 1: Single base64 parameter
const jsonString = JSON.stringify(quizData);
const base64 = btoa(unescape(encodeURIComponent(jsonString)));
const url1 = '${baseUrl}?data_b64=' + base64;

// Method 2: Individual base64 parameters
const params = new URLSearchParams();
params.append('title_b64', btoa(unescape(encodeURIComponent(quizData.title))));
params.append('description_b64', btoa(unescape(encodeURIComponent(quizData.description))));
quizData.questionData.forEach((q, index) => {
    const qNum = index + 1;
    params.append(\`question\${qNum}_b64\`, btoa(unescape(encodeURIComponent(q.question))));
    q.options.forEach((opt, optIndex) => {
        params.append(\`q\${qNum}_option\${optIndex + 1}_b64\`, btoa(unescape(encodeURIComponent(opt))));
    });
    params.append(\`q\${qNum}_answer_b64\`, btoa(unescape(encodeURIComponent(q.answer))));
});
const url2 = '${baseUrl}?' + params.toString();
`);

