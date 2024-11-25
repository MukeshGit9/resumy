import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './midtemplate1.css';
import StrToListModule from './strtolistmodule';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { faPercent } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';


function Midtemplate1({formData}){
	// string to list 
	const {interestList,	hardSkillsList,	softSkillsList,	expDescriptionList} = StrToListModule(formData);

// Function to save as PDF----------------------------------------------------------------------
const handleSaveAsPDF = () => {
  const input = document.getElementById('midtemplate1');

  html2canvas(input, { scale: 2 }).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const pageHeight = (canvas.width / pdfWidth) * pdfHeight;
    const margin = 10; // Adjust this value to control the gap between pages

    let position = 0;
    let page = 0;

    while (position < canvas.height) {
      // Create a new canvas for each page
      const pageCanvas = document.createElement('canvas');
      pageCanvas.width = canvas.width;
      pageCanvas.height = pageHeight;

      const pageContext = pageCanvas.getContext('2d');
      pageContext.fillStyle = '#FFFFFF'; // Set background to white to avoid transparency issues
      pageContext.fillRect(0, 0, pageCanvas.width, pageCanvas.height);

      // Draw the part of the original canvas on the new page canvas
      pageContext.drawImage(
        canvas,
        0,
        position,
        canvas.width,
        pageHeight,
        0,
        0,
        canvas.width,
        pageHeight
      );

      const pageImgData = pageCanvas.toDataURL('image/png');

      // Add the image to the PDF with a margin
      if (page > 0) pdf.addPage();
      pdf.addImage(pageImgData, 'PNG', 0, margin, pdfWidth, pdfHeight - margin * 2);

      position += pageHeight;
      page++;
    }

    // Save the PDF file
    pdf.save(`${formData.personalInfo.fullName || 'resume'}.pdf`);
  });
};



	
	return(
		<>
		{/*Model---------------------------------------------------------------------------*/}
				

				<div className="modal fade" id="midTemplate1Model1" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
				  <div className="modal-dialog modal-lg" role="document">
				    <div className="modal-content">
				      <div className="modal-header  justify-content-center align-items-center model-hd-ft">
				        <h5 className="modal-title col-11" id="exampleModalLongTitle">INTERMEDIATE - TEMPLATE 1</h5>
				        <button type="button" className="close   col-1" data-bs-dismiss="modal" aria-label="Close">
				          <span aria-hidden="true">&times;</span>
				        </button>
				      </div>
				      <div className="modal-body row justify-content-center align-items-start midTemp1-cover" id="midtemplate1">

				        <div className="col-8 midTemp1Left-box">

				        	<h1>{formData.personalInfo.fullName}</h1>

				        	<h2>{formData.personalInfo.designation}</h2>

				        	<h4>SUMMARY</h4>
				        	<p>{formData.profileSummary.profileSummary}</p>

				        	<h4>EXPERIENCE</h4>
				        	{formData.experience.map((expp,index)=>(				        		
				        			<p key={index}>
								        	<span>{expp.jobTitle}&nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;{expp.duration}</span> <br/>
								        	<FontAwesomeIcon className="education-list-icons" icon={faBuilding} />{expp.company}	
								        	<ul>
								        		{expDescriptionList.map((item,index)=>(
								        			<li>{item.trim()}</li>
								        		))}								        		
								        	</ul>
				        			</p>				        		
				        	))}
				        	
				        	<h4>EDUCATION</h4>
				        	{formData.higherEducation.map((edu, index) => (
									  <p key={index}><span>{edu.degree}</span> <br/>
						        			{edu.institution} <br/>
						        			<FontAwesomeIcon className="education-list-icons" icon={faCalendarDays} />{edu.passingYear} &nbsp;&nbsp;&nbsp;&nbsp; <FontAwesomeIcon className="education-list-icons" icon={faPercent} />{edu.GPA} %
						        	</p>
									))}			        	

				        </div>

				        <div className="col-4 midTemp1Right-box">
				        	<h4>CONTACT</h4>
				        	<ul className="contact-list">
				        		<li><FontAwesomeIcon className="contact-list-icons" icon={faLocationDot} />{formData.contact.address},{formData.contact.city},{formData.contact.country}</li>
				        		<li><FontAwesomeIcon className="contact-list-icons" icon={faPhone} />{formData.contact.phoneNo}</li>
				        		<li><FontAwesomeIcon className="contact-list-icons" icon={faEnvelope} />{formData.contact.email}</li>
				        		<li><FontAwesomeIcon className="contact-list-icons" icon={faLinkedinIn} />{formData.contact.linkedin}</li>
				        	</ul>

				        	<h4>SKILLS</h4>
				        	<h5>Hard Skills</h5>
				        	<ul className="skills-list">
				        		{hardSkillsList.map((item, index)=>(
				        			<li>{item.trim()}</li>
				        		))}
				        	</ul>
				        	<h5>Soft Skills</h5>
				        	<ul className="skills-list">
				        		{softSkillsList.map((item, index)=>(
				        			<li>{item.trim()}</li>
				        		))}
				        	</ul>

				        	<h4>LANGUAGES</h4>
				        	<p>{formData.personalInfo.language}</p>

				        	<h4>INTERESTS</h4>
				        	<ul className="interest-list">
				        		{interestList.map((item, index)=>(
				        			<li>{item.trim()}</li>
				        		))}
				        	</ul>

				        </div>


				      </div>
				      <div className="modal-footer model-hd-ft">
				        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
				        <button type="button" className="btn btn-primary" onClick={handleSaveAsPDF}>Download Resume</button>
				      </div>
				    </div>
				  </div>
				</div>   
			{/*Model---------------------------------------------------------------------------*/}
			</>
		);
}

export default Midtemplate1;