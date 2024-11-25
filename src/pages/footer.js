import React,{useEffect, useRef} from 'react'
import './footer.css';
import {useNavigate, useLocation} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAnglesUp } from '@fortawesome/free-solid-svg-icons';



function Footer(){
	// page naviagation
	const navigate = useNavigate();
	const goCreate = () =>{ 
		window.scrollTo({ top: 0, behavior: 'smooth' });
		navigate('/create'); 
	}
	const goHome=()=>{ 
		window.scrollTo({ top: 0, behavior: 'smooth' });
		navigate('/'); 
	}

	// section navigation
	const {hash} = useLocation();
	useEffect(()=>{
		if(hash){
			const section = document.querySelector(hash);
			section?.scrollIntoView({ behavior: "smooth" });
		}
	},[hash]);

	
	// steps
	const goSteps=()=>{	navigate('/#steps-target'); }

	// Templayes
	const goTemplates=()=>{	navigate('/#templates-target'); }

	// sroll to top
	const scrollToTop=()=>{
		window.scrollTo({
			top:0,
			behavior:'smooth'
		});
	}

	// sroll to bottom
	const scrollToBottom=()=>{
		window.scrollTo({
			top:document.documentElement.scrollHeight,
			behavior:'smooth'
		});
	}

	return(
		<>
		<div className="Container-fluid Container-fluid-no-overflow">
		<div className="row justify-content-center align-items-center">
			<div   className=" col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12  ">
			     <div className="row justify-content-center align-items-center footer-box">
			     	<div   className=" col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 ">
					     <p className="quote-text">&ldquo; Your resume is your first impression. Make it count. &rdquo;</p>
					</div>
					<div   className=" col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 ">
						<ul className="footer-list-box">
							<li onClick={goSteps}>3 Easy Steps</li>
							<li onClick={goTemplates}>Templates</li>
							<li onClick={goCreate} >Create my resume</li>
							<li onClick={goHome} >Home</li>
							<button onClick={scrollToTop} className="top-btn">Tap to Go on Top <FontAwesomeIcon icon={faAnglesUp} /></button>
						</ul>
					</div>
					<div   className=" col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 ">
					     <button onClick={goCreate} className="btn footer-create-btn">Create Resume</button>
					</div>
					<div   className=" col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 ">
					     <button onClick={goHome} className=" footer-logo">RESUMY.</button>
					</div>
			     </div>
			</div>
			<div   className=" col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 copyright-div">
			     &copy; 2024 - RESUMY. by Mukesh Kumar - All rights Reserved
			</div>
		</div>
		</div>
		</>
		);
}

export default Footer