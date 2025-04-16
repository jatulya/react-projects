# react-projects
Simple React Projects

1. Wordle Coddle
2. Todo - React, TypeScript<br>

# HOW DOES REACT WORK
React is a JavaScript library for building user interfaces. It allows you to create reusable UI components and manage the state of your application. 
React works by breaking down the UI into smaller, independent components. Each component is responsible for rendering a part of the UI. When the state of the application changes, React updates the components that need to change, and re-renders the UI.

## The file structure
1. The page that is visible is the div id = root from index.html file.
2. In the src/main.tsx file, you create a root element after getting index.html's root element by id. Here, we render App component which is defined in src/App.tsx file.
3. The App.tsx file is where we add layout and different components. For reusablity, we define each component seperately in different files.


## Terms 
### Hot Reloading
Hot reloading is a feature in React that allows you to see the changes you make to your code in real-time without having to restart the application. This is especially useful when you're working on a large application and need to see the effects of your changes quickly.