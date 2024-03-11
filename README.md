# reactjstonextjs
sample project to migrate reactjs to nextjs

* check /src/pages/Contact.tsx and /src/pages/Contact1.tsx

# Steps to migrate react.js to next.js
1. > npm install next@latest --force
2. remove below in package.json
   `"react-scripts": "^3.0.1",`
   i.e.
   ```
   //before
   "dependencies": {
    "@types/react": "^18.2.63",
    "@types/react-dom": "^18.2.20",
    "@types/react-router-dom": "^5.3.3",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.22.2",
    "react-scripts": "^5.0.1",
    "typescript": "^5.3.3"
   },
   ```
   ```
   //after
   "dependencies": {
    "@types/react": "^18.2.63",
    "@types/react-dom": "^18.2.20",
    "@types/react-router-dom": "^5.3.3",
    "@typescript-eslint/typescript-estree": "^7.1.1",
    "next": "^14.1.3",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.22.3",
    "typescript": "^5.3.3"
   },
   ```
