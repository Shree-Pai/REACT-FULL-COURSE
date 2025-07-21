**React**

js library for building user-interface.
Primarily created and maintained by Facebook.
Allow developer to creat large level application that can update and render efficiently in response to data changes.
Component base architecture-user interface is broken into small and reusable pieces.
React work with component based architecture.

**Key features**
Declarative UI - describe with you want the react updates UI with data changes.
Component based - encapsulate logic and layout in the reusable component.
Virtual DOM - React uses Virtual DOM to optimise the update and minimize direct manipulation.
Unidirectional dataflow - Dataflow in only 1 direction from parent to child.
Strong ecosystem - large number of library tools with community support.

CRA tool- Create React App
npx - node package executor

2 libraries
Web based 
React
React DOM is build on top of React

Mobile based
React
React Native

node_modules-contains all the libraries required to run the project.
public folder-contains all the static assets assessicible through root url.
src folder-can create own components.
app.js-is a component.
manifest.json-provide the progressive webapp features.
index.js-Entry point of application.
StrictMode- For security purpose.
package.json-list of all dependencies that is used in project and project scripts.
build-converts a respective React component to its html,css and js because browser will now understand React.
app.js cannot return multiple components to return the multiple components then wrap it inside a single element. There should be only 1 parent element.

Creates the only the req libraries 
npm create vite@latest second_react_app
in vite tool there is no index.js file so the file path has to be given in index.html
.jsx - js with html

Purpose of Components: Smallest reusable code.
                       Break our app to reusable parts.
                       Each component is a mini user interface unit.
                       Combined multiple components to build complex user interface.
                       2 types of components-Functional Component - created by function keyword-modern way to create a component
                                            -Class Component - created by class-older way to create a component

************************************************************************************************************************************************

Props:
properties-props used to pass the data from one component to other.-->Parent to Child component.
in child component- it is read-only
props helps makes component reusable-same component with different data
props can be of any type-string,number,array,object,function.
Prop-destructuring:
reading and storing the value in some variables


not able to track the updata value od data in react properly, cannot use variable to store or track the value.Should use State
State:A container to store something, and whose values can be tracked by react, built-in object in React that leads our component to remember value over time.
useState is used in state
variable and function which will update the state value