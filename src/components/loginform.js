import '../style';

export default function Loginform() {
	return (
		<>
			<div className="mb-3">
			  <label for="emailInput" className="form-label">Email Address</label>
			  <input type="text" className="form-control" id="emailInput" placeholder="janet@example.com" />
			</div>
			<div className="mb-3">
			  <label for="passwordInput" className="form-label">Password</label>
			  <input type="password" className="form-control" id="passwordInput" />
			</div>
		</>
	);
}


