import '../style';

export default function Login() {
	return (
		<div className="container-fluid">
			<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#prPopTesLogInModal">
			  Login
			</button>
			<div class="modal fade" id="prPopTesLogInModal" tabindex="-1" aria-labelledby="prPopTesLogInModalLabel" aria-hidden="true">
			  <div class="modal-dialog">
				<div class="modal-content">
				  <div class="modal-header">
					<h5 class="modal-title" id="prPopTesLogInModalLabel">Login</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				  </div>
				  <div class="modal-body">
					This is where the login form will be
				  </div>
				  <div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
					<button type="button" class="btn btn-primary">Login</button>
				  </div>
				</div>
			  </div>
			</div>
		</div>
	);
}


