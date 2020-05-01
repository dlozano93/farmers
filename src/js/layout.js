import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Farms } from "./views/farms";
import { Farmview } from "./views/farmview";
import { About } from "./views/about";
import { FAQ } from "./views/faq";
import { Contact } from "./views/contact";
import { SignUp } from "./views/signup";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/farms" component={Farms} />
						<Route exact path="/farms/:index" component={Farmview} />
						<Route exact path="/about" component={About} />
						<Route exact path="/about/faq" component={FAQ} />
						<Route exact path="/about/contact" component={Contact} />
						<Route exact path="/about/signup" component={SignUp} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
