import React from 'react';
import './steps.css';


function Steps(){
	return(
		<>
		<div className="row justify-content-around align-items-center steps-outer-div" id="steps-target">
			<div className="col-12">
				<h1 className="steps-hd">READY YOUR PERFECT RESUME IN 3 EASY STEPS</h1>
			</div>
			<div   className=" col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3  ">
				<div className="steps-count-icon-div steps-count-icon-write"></div>
			    <h3 className="steps-count-heading" >FILL RESUME DETAILS FORM</h3>
			</div>
			<div   className=" col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3  ">
			   <div className="steps-count-icon-div steps-count-icon-temp"></div>
			   <h3 className="steps-count-heading" >CHOOSE RESUME TEMPLATE </h3>
			</div>
			<div   className=" col-12col-sm-12 col-md-3 col-lg-3 col-xl-3  ">
			    <div className="steps-count-icon-div steps-count-icon-download"></div>
			    <h3  className="steps-count-heading">DOWNLOAD YOUR RESUME</h3>
			</div>
		</div>

		</>
		);
}

export default Steps