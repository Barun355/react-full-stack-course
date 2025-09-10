// import { createRoot } from "react-dom/client"

// const root = createRoot(document.getElementById("root"))
// root.render(
//     <App />
// )

// function App() {
    
//     return (
//         // This is JSX which is finally converted into the below React Syntax
//         <div className="main">
//             <h1>Hello World</h1>
//             <ul>
//                 <li>Custom React</li>
//             </ul>
//         </div>
//     )
// }

// // props => properties
// // React understand this syntax
// React.createElement(
//     "div",
//     { className: "main" },
//     React.createElement(
//         "h1",
//         "Hello World"
//     ),
//     React.createElement(
//         "ul",
//         React.createElement(
//             "li",
//             "Custom React"
//         )
//     )
// )

// // React Code is converted into final object which is shown below. It may have other key: value pairs, we are considering few of them which are important from the perspective of understand the react fundamental.

// {
//     type: "div",
//     props: {
//         className: "main"
//     },
//     children: [
//         {
//             type: "h1",
//             prop: null,
//             children: "Hello World"
//         },
//         {
//             type: "ul",
//             prop: null,
//             children: [
//                 {
//                     type: "li",
//                     prop: null,
//                     children: "Custom React"
//                 }
//             ]
//         }
//     ]
// }


// Creating Simple version of React.
const rootElement = document.getElementById("root")
const divElement = {
    type: "div",
    prop: {
        className: "main",
        id: "main"
    },
    children: "Hello World"
}

const paragraphElement = {
    type: "p",
    prop: {
        className: "para",
        id: "para",
    },
    children: "Something!!!!...."
}

customRender(rootElement, paragraphElement)



function customRender(rootElement, customElement) {
    const children = document.createElement(customElement.type)

    children.innerHTML = customElement.children

    children.setAttribute("class", customElement.className)
    children.setAttribute("id", customElement.id)


    rootElement.appendChild(children)
}