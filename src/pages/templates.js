import React from 'react';
import './templates.css';
import {useNavigate} from 'react-router-dom';


function Templates(){
	const navigate = useNavigate();
	const goCreate =()=>{
		window.scrollTo({ top: 0, behavior: 'smooth' });
		navigate('./create')
	};
	return(
		<>
		<div className="row justify-content-center align-items-center" id="templates-target">
			<div   className=" col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12  template-hd-div">
			   <h2  >TEMPLATES</h2>
			</div>
			<div   className=" col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12  template-hd-div template-hd-div-mb">
			   <div className="row justify-content-around align-items-center">
			   		<div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 template-item-box-hd">
			   			Fresher's Templates
			   		</div>
			   		<div className="col-11 col-sm-11 col-md-3 col-lg-3 col-xl-3 template-item-box-comman fresher-tmp1" onClick={goCreate}>
			   		</div>
			   		<div className="col-11 col-sm-11 col-md-3 col-lg-3 col-xl-3 template-item-box-comman">
			   		</div>
			   		<div className="col-11 col-sm-11 col-md-3 col-lg-3 col-xl-3 template-item-box-comman">
			   		</div>
			   		
			   		<div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 template-item-box-hd">
			   			Intermediate's Templates
			   		</div>
			   		<div className="col-11 col-sm-11 col-md-3 col-lg-3 col-xl-3 template-item-box-comman mid-tmp1" onClick={goCreate}>
			   		</div>
			   		<div className="col-11 col-sm-11 col-md-3 col-lg-3 col-xl-3 template-item-box-comman">
			   		</div>
			   		<div className="col-11 col-sm-11 col-md-3 col-lg-3 col-xl-3 template-item-box-comman">
		   			</div>

		   			<div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 template-item-box-hd">
			   			Professional's Templates
			   		</div>
			   		<div className="col-11 col-sm-11 col-md-3 col-lg-3 col-xl-3 template-item-box-comman ">
			   		</div>
			   		<div className="col-11 col-sm-11 col-md-3 col-lg-3 col-xl-3 template-item-box-comman">
			   		</div>
			   		<div className="col-11 col-sm-11 col-md-3 col-lg-3 col-xl-3 template-item-box-comman">
		   			</div>

			   </div>
			</div>
			
		</div>
		</>
		);
}

export default Templates