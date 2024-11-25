import React from 'react';
import './home.css';
import {useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import rPhoto from '../img/rPhoto.webp';
import Footer from './footer';
import Steps from './steps';
import Templates from './templates'

function Home(){
	const navigate = useNavigate();

	// create navigate
	const goCreate = () =>{
		window.scrollTo({ top: 0, behavior: 'smooth' });
		navigate('/create');
	}

	// Template navigate
	const goTemplates=()=>{	navigate('/#templates-target'); }

	const [bgColor, setBgColor] = useState("white");
	// const [tempColor, setTempColor] = useState("#fecb88");
	// const [tempBgColor, setTempBgColor] = useState("#12343b");
	const colors = ['#fecb88','white'];
	// const tColor = ['#fecb88','#12343b'];
	// const tBgColor = ['#12343b','#fecb88'];
	useEffect(()=>{
		let colorIndex = 0;
		const intervalId=setInterval(()=>{
			colorIndex = (colorIndex + 1) % colors.length;
			// colorIndex = (colorIndex + 1) % tColor.length;
			// colorIndex = (colorIndex + 1) % tBgColor.length;
			setBgColor(colors[colorIndex]);
			// setTempColor(tColor[colorIndex]);
			// setTempBgColor(tBgColor[colorIndex]);
		},1000);
		return ()=>clearInterval(intervalId);
	},[colors]);
	return(
	<>
	<div className="Container-fluid Container-fluid-no-overflow">
		<div className="row resume-hd-outer justify-content-center align-items-center">
			
			<div className=" col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 resume-hd-box">
		      <h1 className="resume-hd">RESU<span style={{color:bgColor}}>MY.</span></h1>
		      <p>Instant Resumes for Instant Opportunities</p>
		      <button onClick={goCreate}>Create One !</button>
		      <button onClick={goTemplates}>Templates !</button>
		    </div>
			<div className=" col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6  resume-hd-box-img">
		      <img src={rPhoto} alt="resume-cover-photo"/>
		    </div>
		    	   
		</div>

		{/*Steps to reate------------------------------------------------------------------------*/}
		<Steps/>
		{/*Templates------------------------------------------------------------------------*/}
		<Templates/>


	</div>
	    



	{/*Footer------------------------------------------------------------------------*/}
	<Footer />
    </>
		);
}

export default Home