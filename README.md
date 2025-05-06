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

### Components 
They are the building blocks of a React application. We import 'React' from 'react' to be able to use JSX components. All components trace back to a single root component.
Example code:-
```jsx
import React from 'react';
function Welcome() {
    return <> <h1> Hello, World </h1></>;
}
```

Note : The returning react component should be wrapped in a single div. The best practice to follow the above example - using <>..</> tags.

### Hooks
Hooks are special functions in React that allow one to perform certain actions that otherwise would have required to write a whole different class component in few lines of code. Some hooks are 
- useState
- useEffect
- useContext

### Props
These are the data items given to a JSX component. The components can either use it for themselves or pass it between parent-child components. It is ideal for the passing data items between components that do not change.
Passing props
```jsx
//Parent 
function App(){
    const val = 9
    return <Child valueProp ={val} /> 
}

//child - method 1
function Child (props){
    console.log(props.valueProp)
}

//child - method 2
function Child ({valueProp}){
    console.log(valueProp)
}
```

### State
The data that can be changed in a component. States are initialized and updated using the hook useState().

```jsx
const [stateVarName, setStateVarName] = useState(initial_val)
```
Here, stateVarName is the name of the state variable and setStateVarName is the function that changes the state. The assignment 
```jsx 
stateVarName = value
```
is not allowed because such method may not immediately render the changes.

### transpiler - Babel
A transpiler converts code written in one language to another. It is used in React because browsers don't understand JSX/TSX. So it converts the code to JS/TS.
Eg. 
```jsx
const element = <h1>Hello, world!</h1>;
```
Babel converts it to 
```js
const element = React.createElement("h1", null, "Hello, world")
```

## Concepts
### export default component_name
These keywords let us use the component in another components.
```jsx
import component_name from 'path/to/component_name'
function new_component () {
    return <> <component_name /> </>;
}
```
### map function
map function in react/js is used to iterate over a list/array of objects or items and perform function on taking the individual elements in the list.
```jsx
const obj = ['sarah', 'gaia', 'mini']
obj.map(function (name){
    return <div><h1>{name}</h1></div>
})
```