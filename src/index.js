import './style';

export default function App() {
	return (
		<div className="container-fluid">
			<nav className="navbar navbar-light bg-light">
			  <div className="container-fluid">
				<span className="navbar-brand mb-0 h1">Preact Sandbox Tester</span>
			  </div>
			</nav>
			<div className="pt-4">
				<div className="row">
					<div className="col">
						<h1 className="text-start">About</h1>
						<p className="text-start">
						A simple project to demonstrate how Preact differs from React in a simple CRUD environment.	
						</p>
					</div>
					<div className="col">
					</div>
				</div>
			</div>
		</div>
	);
}
