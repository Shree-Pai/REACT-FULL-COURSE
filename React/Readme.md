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


not able to track the update value od data in react properly, cannot use variable to store or track the value.Should use State
State:A container to store something, and whose values can be tracked by react, built-in object in React that leads our component to remember value over time.
useState is used in state
variable and function which will update the state value


****************************************************************************************************************************************************
Event:Action performed on browser is Event----Keypressed,mouse released, right or left click.
event handler manage particular event.


****************************************************************************************************************************************************
List & Key:
List : Collection of items usually stored inside Array.
Key : Spacial string attribute that need to be included when creating a list of elements in React.Helps React identify which items have changed or added or removed.It should be unique among siblings.

-------------
react-bootstrap
bootstrap

Cannot use for or for of loop inside return hence Map is used.

*****************************************************************************************************************************************************
Life Cycle:
the stages from creation to deletion of an component is the life cycle of components.
Inbuilt methods of React which can run on different stages is React life cycle method-used only with class based components.

Major Life cycle Phases in Class Component:
-Mounting : When component is created and inseted with DOM is Mounting.
-Updating : Component is Updated due to state and props changes is called Updating Stage.
-Unmounting : Remove the component from DOM.

Methods for Mounting Phase:
constructor() - initial state and binds the method.
static getDerivedStateFromProps() - Sync the state with props.
render() - return the jsx or User interface.
componentDidMount() - Write the side effect.

Methods for Updating Phase:
static getDerivedStateFromProps()- again called when component is re-rendered.
shouldComponentUpdate() - Decide whether to update the component or not(return true or false value).
render() - Invoked again when component is updated.
getSnapshotBeforeUpdate() - capture DOm value before update.
componentDidUpdate() - runs side-effect after DOM update.

Methods for Unmounting Phase:
componentWillUnmount() - Write the side effect.

*************************************************************************************************************************************
Hooks:
Hooks is special type of function introduced in React to use state and other functions in Functional component without creating class components.
Usestate is used as Hook

Types of hooks:
useState - If state is used inside functional component. State is used inside functional component 
useEffect - With the help of useEffects we can write side effects in Webpage - when component is mounted,updated or unmounted
        useEffect(()=>{},an array of dependencies) provide the dependences when the useEffect has to be executed as component did update.
useMemo - It is React Hook that memoizes the result of an expensive(function that takes lots of time (time consuming)) function and only recomputes it when its dependency change.
        useMemo(()=>{},dependency array) 
useRef - It is React Hook that returns a mutable reference object which persist across the renders. access the dom element,store previous value,avoid re-render on update not a best practice to use document,getelementbyId in React instead use useRef()
ForwardRef()

custom Hook:


**************************************************************************************************************************

Context API: Global storage through which we can share data in the hierarchical components
Props drilling to resolve this conext API is used

create context method - able to create the global storage
context provider - provider will pass 2 things - value and children 
use context-Hook - to get the value from storage.

***************************************************************************************************************************
Local Storage:
Local Storage is a client side storage that allow us to store the data in the browser.Data is available even after refreshing page the data is available.
It is a key value pair storage.
It is a string based storage.
It is a permanent storage.
It is a browser storage.
Size is approx 5MB.
remember tokens during login.
remember the cart items.
remember the search history.
remember the user preferences.
remember the user settings.
remember the user data.

Methods:
setItem() - to set the item in the local storage.
getIteam() - to get the item from the local storage.
removeItem() - to remove the item from the local storage.
clearItem() - to clear the local storage.

json.stringy file - to convert the data into string.
json.parse file - to convert the string into data type.


Session storage:
Session storage is a client side storage that allow us to store the data in the browser temporarily
It is a key value pair storage.
It is a string based storage.
It is a temporary storage.Only available with the current session of browser.
Data limit size is 5MB.
When we go for session storage?
1. When we want to store the data temporarily.
2. When we want to store the data for the current session of browser.
3. When we want to store the data for the current tab of browser.
i4. When we want to store the data for the current window of browser.

Methods same as local storage.


*************************************************************************************************************************
React Routing:
React Routing is a way to navigate between different components in a React application.
It is used to manage the state of the application.

When we use React Routing , we need to have BrowserRouter, Routes, Route
BrowserRouter - parent component that keeps user interface sync with the URL.
Routes-container that has multiple route.Container for Route component.
Route- map our URL with the particular component. Multiple routes can be inside the Route.

Search Param:URL query parameter: it is value after question mark in URL.It is also called as Query Filter.



















