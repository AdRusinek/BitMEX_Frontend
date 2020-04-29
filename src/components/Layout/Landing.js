// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import {css} from "./Layout.css";
//
// class Landing extends Component {
//   componentDidMount() {
//     if (this.props.security.validToken) {
//       this.props.history.push("/accounts");
//     }
//   }
//   render() {
//     return (
//       <div className="landing">
//         <div className="light-overlay landing-inner text-dark">
//           <div className="container">
//             <div className="row">
//               <div id="landing" className="col-md-12 text-center">
//                 <h1 className="display-4 mb-4">BitMEX Menagement Tool</h1>
//                 <p className="lead">
//                   Create your account to join BitMEX Menagement Tool
//                 </p>
//                 <hr />
//                 <Link
//                   id="landingButton"
//                   className="btn btn-lg btn-primary mr-2"
//                   to="/register"
//                 >
//                   Sign Up
//                 </Link>
//                 <Link
//                   id="landingButton"
//                   className="btn btn-lg btn-secondary mr-2"
//                   to="/login"
//                 >
//                   Login
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
//
// Landing.propTypes = {
//   security: PropTypes.object.isRequired
// };
//
// const mapStateToProps = state => ({
//   security: state.security
// });
//
// export default connect(mapStateToProps)(Landing);
