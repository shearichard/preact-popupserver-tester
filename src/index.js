import './style';
import About from './components/about';
import Navbar from './components/navbar';
import Todoscontainer from './components/todoscontainer';
import Login from './components/login';

export default function App() {
    console.log("Here I am in App")
    /*
    console.log(process.env.REACT_APP_MY_API_KEY)
    */
	return (
		<div className="container-fluid">
            <Navbar />
            <Login />
            <About />
            <Todoscontainer />
		</div>
	);
}
