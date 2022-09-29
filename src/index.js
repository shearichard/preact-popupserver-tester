import './style';
import About from './components/about';
import Navbar from './components/navbar';
import Todoscontainer from './components/todoscontainer';
import Login from './components/login';

export default function App() {
	return (
		<div className="container-fluid">
            <Navbar />
            <Login />
            <About />
            <Todoscontainer />
		</div>
	);
}
