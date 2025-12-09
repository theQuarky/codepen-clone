# CodePen Clone

A fully functional CodePen clone built with React that allows you to write HTML, CSS, and JavaScript code in real-time and see the results instantly in an embedded iframe. The editor features syntax highlighting, code persistence using localStorage, and collapsible editor panels.

## 🚀 [Live Demo](https://code-pen-clone.web.app/)

## ✨ Features

- **Real-time Code Execution**: Write HTML, CSS, and JavaScript and see the results instantly
- **Syntax Highlighting**: Built-in syntax highlighting powered by CodeMirror with Material theme
- **Code Persistence**: Your code is automatically saved to localStorage and persists across sessions
- **Collapsible Editors**: Expand/collapse individual editor panels to focus on specific code sections
- **Responsive Layout**: Clean split-pane layout with editors on top and preview at the bottom
- **Line Numbers**: Enabled by default for better code navigation
- **Line Wrapping**: Automatic line wrapping for better readability

## 🛠️ Technologies Used

- **React** (v16.13.1) - Frontend framework
- **CodeMirror** (v5.57.0) - Code editor component with syntax highlighting
- **react-codemirror2** (v7.2.1) - React wrapper for CodeMirror
- **FontAwesome** - Icons for UI elements
- **Create React App** - Project bootstrapping and build configuration
- **Firebase Hosting** - Deployment and hosting platform

## 🎯 How It Works

### Architecture Overview

The application follows a component-based React architecture with the following key components:

#### 1. **App Component** (`src/components/App.js`)
The main application component that:
- Manages state for HTML, CSS, and JavaScript code using the `useLocalStorage` custom hook
- Combines all three code inputs into a single HTML document
- Uses `useEffect` with a timeout to debounce updates and prevent excessive re-renders
- Renders the combined output in an iframe with sandboxing for security

```javascript
// Code execution flow
HTML + CSS + JS → Debounced (250ms) → Combined srcDoc → iframe render
```

#### 2. **Editor Component** (`src/components/Editor.js`)
A reusable code editor component that:
- Wraps CodeMirror with React for controlled component behavior
- Supports different language modes (XML/HTML, CSS, JavaScript)
- Provides expand/collapse functionality for each editor panel
- Displays the language name in the editor header
- Applies the Material theme for consistent styling

#### 3. **useLocalStorage Hook** (`src/hooks/useLocalStorage.js`)
A custom React hook that:
- Persists state to browser's localStorage automatically
- Prefixes keys with "codepen-clone" to avoid conflicts
- Loads initial values from localStorage on component mount
- Synchronizes state changes with localStorage using `useEffect`

### Code Execution Flow

1. **User Input**: User types code in HTML, CSS, or JS editor
2. **State Update**: Editor component calls `onChange` handler
3. **LocalStorage Sync**: `useLocalStorage` hook automatically saves to localStorage
4. **Debouncing**: `useEffect` in App component waits for user to stop typing
5. **Document Generation**: Code is combined into a complete HTML document:
   ```html
   <html>
     <style>${css}</style>
     <body>${html}</body>
     <script>${js}</script>
   </html>
   ```
6. **Iframe Rendering**: The generated document is set as iframe's `srcDoc`
7. **Output Display**: Browser renders the result in the sandboxed iframe

### Security Features

- **Sandboxed Iframe**: The output iframe uses `sandbox="allow-scripts"` to prevent:
  - Access to parent window
  - Popup windows
  - Form submissions
  - Top-level navigation
- **Isolated Execution**: Code runs in a separate browsing context

## 📁 Project Structure

```
codepen-clone/
├── public/
│   ├── index.html          # HTML template
│   └── manifest.json       # PWA manifest
├── src/
│   ├── components/
│   │   ├── App.js          # Main application component
│   │   └── Editor.js       # CodeMirror editor wrapper
│   ├── hooks/
│   │   └── useLocalStorage.js  # Custom hook for localStorage persistence
│   ├── index.css           # Global styles
│   └── index.js            # Application entry point
├── firebase.json           # Firebase hosting configuration
├── .firebaserc            # Firebase project configuration
├── package.json           # Dependencies and scripts
└── README.md             # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/theQuarky/codepen-clone.git
   cd codepen-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

The page will automatically reload when you make changes to the code.

## 📝 Usage

1. **Write HTML**: Type your HTML markup in the HTML editor panel
2. **Style with CSS**: Add your CSS styles in the CSS editor panel
3. **Add JavaScript**: Write JavaScript code in the JS editor panel
4. **View Output**: See your code execute in real-time in the preview pane below
5. **Collapse/Expand**: Click the expand/collapse icon in any editor header to maximize workspace
6. **Automatic Save**: Your code is automatically saved and will persist even after closing the browser

### Example Code

Try this simple example to get started:

**HTML:**
```html
<h1>Hello CodePen Clone!</h1>
<button id="myBtn">Click Me</button>
<p id="demo"></p>
```

**CSS:**
```css
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

button {
  background: white;
  color: #667eea;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
```

**JavaScript:**
```javascript
document.getElementById('myBtn').addEventListener('click', function() {
  document.getElementById('demo').innerHTML = 'Button Clicked!';
});
```

## 🏗️ Build

To create a production build:

```bash
npm run build
# or
yarn build
```

This creates an optimized build in the `build/` folder, ready for deployment.

## 🌐 Deployment

This project is configured for deployment on Firebase Hosting.

### Deploy to Firebase

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Build the project**
   ```bash
   npm run build
   ```

4. **Deploy**
   ```bash
   firebase deploy
   ```

### Deploy to Other Platforms

The built files in the `build/` folder can be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Surge

## 🎨 Customization

### Change Theme

Edit the CodeMirror theme in `src/components/Editor.js`:
```javascript
options={{
  theme: "material",  // Change to any CodeMirror theme
}}
```

### Adjust Layout

Modify the pane heights in `src/index.css`:
```css
.pane {
  height: 50vh;  /* Adjust editor/preview split ratio */
}
```

### Add More Features

Some ideas for enhancement:
- Add more editor themes
- Include a theme switcher
- Add code formatting/prettifier
- Export code as HTML file
- Share code via URL
- Add preset templates
- Include external libraries (CDN links)

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/improvement`)
6. Create a Pull Request

## 📄 License

This project is open source and available for personal and educational use.

## 👏 Acknowledgments

- Inspired by [CodePen](https://codepen.io/)
- Built with [Create React App](https://github.com/facebook/create-react-app)
- Code editor powered by [CodeMirror](https://codemirror.net/)

## 📧 Contact

For questions or suggestions, please open an issue on GitHub.

---

**Made with ❤️ by [theQuarky](https://github.com/theQuarky)**
