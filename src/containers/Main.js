import React, { Component } from "react";
import { Route, Switch, HashRouter, BrowserRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Faculty from "../pages/education/FacultyComponent";
import Organization from "../pages/education/OrganizationComponent";
import NonTeaching from "../pages/education/NonTeachingComponent";
import AtseExam from "../pages/education/AtseComponent";
import Createpdf from "../pages/education/Createpdf";
import Experience from "../pages/experience/Experience";
import Carrier from "../pages/experience/CarrierComponent";
import Opensource from "../pages/opensource/Opensource";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import AdmitCard from "../pages/projects/AdmitCard";
import Form from "../pages/form/form";
import { settings } from "../portfolio.js";
import Error404 from "../pages/errors/error404/Error";

export default class Main extends Component {
  render() {
    if (!settings.isSplash) {
      return (
        <div>
          <HashRouter basename="/">
            <Switch>
              <Route
                path="/"
                exact
                render={(props) => <Home {...props} theme={this.props.theme} />}
              />
              <Route
                path="/home"
                render={(props) => <Home {...props} theme={this.props.theme} />}
              />
              <Route
                path="/about-us"
                exact
                render={(props) => (
                  <Experience {...props} theme={this.props.theme} />
                )}
              />
              <Route
                path="/career"
                exact
                render={(props) => (
                  <Carrier {...props} theme={this.props.theme} />
                )}
              />
              <Route
                path="/atse"
                render={(props) => (
                  <AtseExam {...props} theme={this.props.theme} />
                )}
              />
              <Route
                path="/contact"
                render={(props) => (
                  <Contact {...props} theme={this.props.theme} />
                )}
              />
              <Route
                path="/admit-card"
                render={(props) => (
                  <AdmitCard {...props} theme={this.props.theme} />
                )}
              />
              <Route
                path="/form"
                render={(props) => <Form {...props} theme={this.props.theme} />}
              />
              <Route
                path="/faculties"
                render={(props) => <Faculty {...props} theme={this.props.theme} />}
              />
              <Route
                path="/administration"
                render={(props) => <Organization {...props} theme={this.props.theme} />}
              />
              <Route
                path="/non-teachig"
                render={(props) => <NonTeaching {...props} theme={this.props.theme} />}
              />
              
              <Route
                path="*"
                render={(props) => (
                  <Error404 {...props} theme={this.props.theme} />
                )}
              />
            </Switch>
          </HashRouter>
        </div>
      );
    } else {
      return (
        <div>
          <HashRouter basename="/">
            <Switch>
              <Route
                path="/"
                exact
                render={(props) => <Home {...props} theme={this.props.theme} />}
              />
              <Route
                path="/home"
                render={(props) => <Home {...props} theme={this.props.theme} />}
              />
              <Route
                path="/experience"
                exact
                render={(props) => (
                  <Experience {...props} theme={this.props.theme} />
                )}
              />
              <Route
                path="/education"
                render={(props) => (
                  <Education {...props} theme={this.props.theme} />
                )}
              />
              <Route
                path="/opensource"
                render={(props) => (
                  <Opensource {...props} theme={this.props.theme} />
                )}
              />
              <Route
                path="/contact"
                render={(props) => (
                  <Contact {...props} theme={this.props.theme} />
                )}
              />
              {/* <Route
							path="/splash"
							render={(props) => (
								<Splash
									{...props}
									theme={this.props.theme}
								/>
							)}
						/> */}
              <Route
                path="/projects"
                render={(props) => (
                  <Projects {...props} theme={this.props.theme} />
                )}
              />
            </Switch>
          </HashRouter>
        </div>
      );
    }
  }
}
