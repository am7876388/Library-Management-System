import "./UI.css"
function Welcome(props){
    const Click = props.Clicking;
    return(<>
    <div id="Welcome_Container">
    <h1>Welcome to Your Library Management System</h1>
    <p>Dive into a world of knowledge, imagination, and endless possibilities. Explore our vast collection of books across various categories to find your next great read.</p>
    <p>Whether you're into thrilling mysteries, timeless classics, or groundbreaking non-fiction, we have something for everyone.</p>
    <p>Ready to Embark your litreary Adventure ? Start Browsing Now!</p>
    <button id="Welcome_Button" onClick={Click}>Browse Books</button>
    </div>
    </>)
}
export default Welcome;