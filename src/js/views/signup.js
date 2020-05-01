import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const SignUp = () => (
	<div className="container d-flex justify-content-around">
		<div className="col" />
		<div className="col mx-auto">
			<form className="well form-horizontal text-center" action=" " method="post" id="contact_form">
				<fieldset>
					<legend>
						{"Sign up form"}
						<br />
					</legend>
					<div className="form-group">
						<div className="col inputGroupContainer">
							<div className="input-group">
								<span className="input-group-text">
									<i className="fas fa-user" />
								</span>
								<input name="first_name" placeholder="Full Name" className="form-control" type="text" />
							</div>
						</div>
					</div>
					<div className="form-group">
						<div className="col inputGroupContainer">
							<div className="input-group">
								<span className="input-group-text">
									<i className="fas fa-home" />
								</span>
								<input name="address" placeholder="address" className="form-control" type="text" />
							</div>
						</div>
					</div>
					<div className="form-group">
						<div className="col inputGroupContainer">
							<div className="input-group">
								<span className="input-group-text">
									<i className="fas fa-phone" />
								</span>
								<input name="phonenumber" placeholder="Phone" className="form-control" type="text" />
							</div>
						</div>
					</div>
					<div className="form-group">
						<div className="col inputGroupContainer">
							<div className="input-group">
								<span className="input-group-text">
									<i className="fas fa-tractor" />
								</span>
								<input name="farmname" placeholder="Farm Name" className="form-control" type="text" />
							</div>
						</div>
					</div>
					<div className="form-group">
						<div className="col selectContainer">
							<div className="input-group">
								<span className="input-group-text">
									<i className="fas fa-tractor" />
								</span>
								<select
									name="Type of Farm"
									className="form-control
                                selectpicker">
									<option value="">Select The Type of Farm</option>
									<option>Local Farm</option>

									<option>Organic Farm</option>
									<option>Hydroponic Farm</option>
								</select>
							</div>
						</div>
					</div>
					<div className="form-group">
						<div className="col inputGroupContainer">
							<div className="input-group">
								<span className="input-group-text">
									<i className="fas fa-envelope" />
								</span>
								<input name="email" placeholder="Email" className="form-control" type="text" />
							</div>
						</div>
					</div>

					<div className="form-group">
						<div className="col inputGroupContainer">
							<div className="input-group">
								<span className="input-group-text">
									<i
										className="fas
                                    fa-user"
									/>
								</span>

								<input name="user_name" placeholder="Username" className="form-control" type="text" />
							</div>
						</div>
					</div>

					<div className="form-group">
						<div className="col inputGroupContainer">
							<div className="input-group">
								<span className="input-group-text">
									<i
										className="fas
                                    fa-lock"
									/>
								</span>
								<input
									name="user_password"
									placeholder="Password"
									className="form-control"
									type="password"
								/>
							</div>
						</div>
					</div>
					<div className="form-group">
						<div className="col inputGroupContainer">
							<div className="input-group">
								<span className="input-group-text">
									<i
										className="fas
                                    fa-lock"
									/>
								</span>
								<input
									name="confirm_password"
									placeholder="Confirm
                                Password"
									className="form-control"
									type="password"
								/>
							</div>
						</div>
					</div>
					<div className="form-group">
						<div className="col">
							<br />
							<button type="submit" className="btn btn-primary">
								SUBMIT
								<span className="glyphicon glyphicon-send" />
							</button>
						</div>
					</div>
				</fieldset>
			</form>
		</div>
		<div className="col" />
	</div>
);
