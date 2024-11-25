import React from 'react';
import './freshertemplate1.css';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import StrToListModule from './strtolistmodule';


function Freshertemplate1({formData}){
	const {interestList,	hardSkillsList,	softSkillsList,	expDescriptionList} = StrToListModule(formData);

// Function to save as PDF----------------------------------------------------------------------
const handleSaveAsPDF = () => {
  const input = document.getElementById('fresherTemplate1');

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
				

				<div className="modal fade" id="fresherTemplate1Model" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
				  <div className="modal-dialog modal-lg" role="document">
				    <div className="modal-content">
				      <div className="modal-header  justify-content-center align-items-center model-hd-ft">
				        <h5 className="modal-title col-11" id="exampleModalLongTitle">FRESHER - TEMPLATE 1</h5>
				        <button type="button" className="close   col-1" data-bs-dismiss="modal" aria-label="Close">
				          <span aria-hidden="true">&times;</span>
				        </button>
				      </div>
				      <div className="modal-body row" id="fresherTemplate1">
				        <div className="col-12 resume-cover" >

				        	<h1>RESUME</h1>

				        	<h2>{formData.personalInfo.fullName}</h2>
				        	<table>
				        		<tr>
				        			<td><span>Add :</span></td>
				        			<td>{formData.contact.address} - {formData.contact.pinCode}</td>
				        		</tr>
				        		<tr>
				        			<td><span>City :</span></td>
				        			<td>{formData.contact.city}</td>
				        		</tr>
				        		<tr>
				        			<td><span>State :</span></td>
				        			<td>{formData.contact.state}</td>
				        		</tr>
				        		<tr>
				        			<td><span>Country :</span></td>
				        			<td>{formData.contact.country}</td>
				        		</tr>
				        		<tr>
				        			<td><span>Phone No. :</span></td>
				        			<td>{formData.contact.phoneNo}</td>
				        		</tr>
				        		<tr>
				        			<td><span>Email :</span></td>
				        			<td>{formData.contact.email}</td>
				        		</tr>
				        	</table>

				        	<h3>PROFILE SUMMARY - </h3>
				        	<p>{formData.profileSummary.profileSummary}</p>

				        	<h3>EDUCATION - </h3>
				        	<ul>
				        	{formData.higherEducation.map((edu, index) => (
									  <li key={index}><span>{edu.degree}&nbsp;&nbsp; - &nbsp;&nbsp;{edu.passingYear}</span> <br/>
						        			From - {edu.institution} <br/>
						        			Percentage - {edu.GPA} %
						        	</li>
									))}			        	
				        	</ul>

				        	<h3 >INTERNSHIP / APPRENTICE - </h3>
				        	<ul>
				        	<li><span>{formData.internship.internTitle}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{formData.internship.internDuration}</span> <br/>
				        			{formData.internship.internCompany} <br/>
				        	</li>
				        	</ul>

				        	<h3>WORK EXPERIENCE - </h3>
				        	<ul>
				        	{formData.experience.map((expp, index)=>(
				        	<li key={index}><span>{expp.jobTitle}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{expp.duration}</span><br/>
				        			{expp.company}
				        	</li>
				        	))}				        	
				        	</ul>

				        	<h3>SKILLS - </h3>
				        	
				        	<h6>Hard Skills</h6>
				        	<ul>
				        	{hardSkillsList.map((item, index)=>(
				        		<li className="p-0">
					        			{item.trim()}
					        	</li>
				        	))}				        		
					        </ul>
				        	<h6>Soft Skills</h6>
				        	<ul>
				        	{softSkillsList.map((item, index)=>(
				        		<li className="p-0">
					        			{item.trim()}
					        	</li>
				        	))}	
				        	</ul>

				        	<h3>PROJECT - </h3>
				        	<ul>
				        	{formData.project.map((prj, index)=>(
				        		<li><span>Projet Title : </span>{prj.projectTitle} <br/>
					        			<span>Client : </span>{prj.client} <br/>
					        			<span>Skill Used : </span>{prj.skillUsed}
					        	</li>
				        	))}					        	
				        	</ul>

				        	<h3>PARTICIPATE ACTIVITIES - </h3>
				        	<ul>
				        	{formData.activity.map((act, index)=>(
				        		<li className="p-0"> {act.activityName}&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp; {act.participateYear}
				        		</li>
				        	))}
				        		
				        	</ul>

				        	<h3>INTEREST / HOBBIES - </h3>
				        	<ul>
				        	{interestList.map((item, index)=>(
				        		<li className="p-0" key={index}> {item.trim()}
					        	</li>
				        	))}					        	
				        	</ul>

				        	<h3>PERSONAL DETAILS - </h3>
				        	<table>
				        		<tr>
				        			<td><span>Father's name :</span></td>
				        			<td>{formData.personalInfo.fatherName}</td>
				        		</tr>
				        		<tr>
				        			<td><span>D.O.B. :</span></td>
				        			<td>{formData.personalInfo.DOB}</td>
				        		</tr>
				        		<tr>
				        			<td><span>Gender :</span></td>
				        			<td>{formData.personalInfo.gender}</td>
				        		</tr>
				        		<tr>
				        			<td><span>Marital Status :</span></td>
				        			<td>{formData.personalInfo.maritalStatus}</td>
				        		</tr>
				        		<tr>
				        			<td><span>Nationality :</span></td>
				        			<td>{formData.personalInfo.nationality}</td>
				        		</tr>
				        		<tr>
				        			<td><span>Religion :</span></td>
				        			<td>{formData.personalInfo.religion}</td>
				        		</tr>
				        		<tr>
				        			<td><span>Language :</span></td>
				        			<td>{formData.personalInfo.language}</td>
				        		</tr>
				        	</table>

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

export default Freshertemplate1;