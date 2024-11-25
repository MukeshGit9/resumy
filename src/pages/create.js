
import React from 'react'
import {useNavigate} from 'react-router-dom';
import './create.css';
import Freshertemplate1 from './freshertemplate1';
import Midtemplate1 from './midtemplate1';
import Footer from './footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import {faHouseUser } from '@fortawesome/free-solid-svg-icons';
import {faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import {faFilePen } from '@fortawesome/free-solid-svg-icons';

// src/components/ResumeForm.js
import  { useState } from 'react';

function Create() {
	const navigate = useNavigate();
	const goHome = () =>{
		navigate('/');
	}
  // State for all sections of the resume----------------------------------------------------------

	const initialFormState = {
    personalInfo: { fullName: '', fatherName: '', DOB: '', gender: '', maritalStatus:'', nationality:'',religion:'',language:'',designation:'' },
    contact:{address:'',pinCode:'', city:'', state:'', country:'', phoneNo:'', email:'',linkedin:''},
    profileSummary:{profileSummary:''},
    higherEducation: [
	    { degree: '', institution: '', passingYear: '', GPA: '' }
		],
    certificate: [
    	{ certificateTitle: '', certificateInstitute: '', certificateDuration: ''},
    ],
    internship: { internTitle: '', internCompany: '', internDuration: '', internDescription: '' },
    experience: [
    	{jobTitle:'', company:'', duration:'', description:''}
    ],
    award: [
    	{awardName:'', awardCompany:'', awardDate:'', awardDescription:''}
    ],
    achievement: [
    	{achievementName:'', achievementDescription:''}
    ],
    skills: {hardSkills:'', softSkills:''},
    project:[
    	{client:'', projectTitle:'', skillUsed:''}
    ],
    activity:[
    	{activityName:'', participateYear:''}
    ],
    interest:{interest:''}
  }
  const [formData, setFormData] = useState(initialFormState);

  // Handle input  change-------------------------------------------------------------------------
  const handleChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  // Function to add new higher education entry----------------------------------------------------
  // Education*************************************************************************************
	const addEducationField = () => {
	  setFormData((prev) => ({
	    ...prev,
	    higherEducation: [
	      ...prev.higherEducation,
	      { degree: '', institution: '', passingYear: '', GPA: '' }
	    ],
	  }));
	};

	// Function to remove higher education entry--------------------------------------------------
	const removeEducationField = (index) => {
	  setFormData((prev) => ({
	    ...prev,
	    higherEducation: prev.higherEducation.filter((_, i) => i !== index),
	  }));
	};

	// Handle input change for dynamic higher education fields-------------------------------------
	const handleEducationChange = (index, field, value) => {
	  const updatedEducation = formData.higherEducation.map((edu, i) =>
	    i === index ? { ...edu, [field]: value } : edu
	  );
	  setFormData((prev) => ({
	    ...prev,
	    higherEducation: updatedEducation,
	  }));
	};
// ************************************************************************************************

	// Function to add new  experience entry----------------------------------------------------
  // experience*************************************************************************************
	const addExperienceField = () => {
	  setFormData((prev) => ({
	    ...prev,
	    experience: [
	      ...prev.experience,
	      { jobTitle: '', company: '', duration: '', description: '' }
	    ],
	  }));
	};

	// Function to remove experience entry--------------------------------------------------
	const removeExperienceField = (index) => {
	  setFormData((prev) => ({
	    ...prev,
	    experience: prev.experience.filter((_, i) => i !== index),
	  }));
	};

	// Handle input change for dynamic experience fields-------------------------------------
	const handleExperienceChange = (index, field, value) => {
	  const updateExperience = formData.experience.map((expp, i) =>
	    i === index ? { ...expp, [field]: value } : expp
	  );
	  setFormData((prev) => ({
	    ...prev,
	    experience: updateExperience,
	  }));
	};
// ************************************************************************************************

	// Function to add new  award entry----------------------------------------------------
  // award*************************************************************************************
	const addAwardField = () => {
	  setFormData((prev) => ({
	    ...prev,
	    award: [
	      ...prev.award,
	      { awardName: '', awardCompany: '', awardDate: '', awardDescription: '' }
	    ],
	  }));
	};

	// Function to remove award entry--------------------------------------------------
	const removeAwardField = (index) => {
	  setFormData((prev) => ({
	    ...prev,
	    award: prev.award.filter((_, i) => i !== index),
	  }));
	};

	// Handle input change for dynamic award fields-------------------------------------
	const handleAwardChange = (index, field, value) => {
	  const updateAward = formData.award.map((awd, i) =>
	    i === index ? { ...awd, [field]: value } : awd
	  );
	  setFormData((prev) => ({
	    ...prev,
	    award: updateAward,
	  }));
	};
// ************************************************************************************************


	// Function to add new  project entry----------------------------------------------------
  // project*************************************************************************************
	const addProjectField = () => {
	  setFormData((prev) => ({
	    ...prev,
	    project: [
	      ...prev.project,
	      { client: '', projectTitle: '', skillUsed: '' }
	    ],
	  }));
	};

	// Function to remove project entry--------------------------------------------------
	const removeProjectField = (index) => {
	  setFormData((prev) => ({
	    ...prev,
	    project: prev.project.filter((_, i) => i !== index),
	  }));
	};

	// Handle input change for dynamic project fields-------------------------------------
	const handleProjectChange = (index, field, value) => {
	  const updateProject = formData.project.map((prj, i) =>
	    i === index ? { ...prj, [field]: value } : prj
	  );
	  setFormData((prev) => ({
	    ...prev,
	    project: updateProject,
	  }));
	};
// ************************************************************************************************

	// Function to add new  certificate entry----------------------------------------------------
  // certificate*************************************************************************************
	const addCertificateField = () => {
	  setFormData((prev) => ({
	    ...prev,
	    certificate: [
	      ...prev.certificate,
	      { certificateTitle: '', certificateInstitute: '', certificateDuration: '' }
	    ],
	  }));
	};

	// Function to remove certificate entry--------------------------------------------------
	const removeCertificateField = (index) => {
	  setFormData((prev) => ({
	    ...prev,
	    certificate: prev.certificate.filter((_, i) => i !== index),
	  }));
	};

	// Handle input change for dynamic certificate fields-------------------------------------
	const handleCertificateChange = (index, field, value) => {
	  const updateCertificate = formData.certificate.map((ctf, i) =>
	    i === index ? { ...ctf, [field]: value } : ctf
	  );
	  setFormData((prev) => ({
	    ...prev,
	    certificate: updateCertificate,
	  }));
	};
// ************************************************************************************************

// Function to add new activity entry----------------------------------------------------
  // activity*************************************************************************************
	const addActivityField = () => {
	  setFormData((prev) => ({
	    ...prev,
	    activity: [
	      ...prev.activity,
	      { activityName: '', participateYear: '' }
	    ],
	  }));
	};

	// Function to remove activity entry--------------------------------------------------
	const removeActivityField = (index) => {
	  setFormData((prev) => ({
	    ...prev,
	    activity: prev.activity.filter((_, i) => i !== index),
	  }));
	};

	// Handle input change for dynamic activity fields-------------------------------------
	const handleActivityChange = (index, field, value) => {
	  const updateActivity = formData.activity.map((act, i) =>
	    i === index ? { ...act, [field]: value } : act
	  );
	  setFormData((prev) => ({
	    ...prev,
	    activity: updateActivity,
	  }));
	};
// ************************************************************************************************

	// Function to add new achievement entry----------------------------------------------------
  // ahcievement*************************************************************************************
	const addAchievementField = () => {
	  setFormData((prev) => ({
	    ...prev,
	    achievement: [
	      ...prev.achievement,
	      { achievementName: '', achievementYear: '' }
	    ],
	  }));
	};

	// Function to remove activity entry--------------------------------------------------
	const removeAchievementField = (index) => {
	  setFormData((prev) => ({
	    ...prev,
	    achievement: prev.achievement.filter((_, i) => i !== index),
	  }));
	};

	// Handle input change for dynamic activity fields-------------------------------------
	const handleAchievementChange = (index, field, value) => {
	  const updateAchievement = formData.achievement.map((ach, i) =>
	    i === index ? { ...ach, [field]: value } : ach
	  );
	  setFormData((prev) => ({
	    ...prev,
	    achievement: updateAchievement,
	  }));
	};
// ************************************************************************************************

  // Handle form submission----------------------------------------------------------------------
  const handleSubmit = (e) => {
    e.preventDefault();
  };

   // Handle form reset---------------------------------------------------------------------------
  const handleReset = () => {
    setFormData(initialFormState); // Reset form data to initial state
  };

  

// sroll to bottom
	const scrollToBottom=()=>{
		window.scrollTo({
			top:document.documentElement.scrollHeight,
			behavior:'smooth'
		});
	}

  return (
  	<>

  <div className="Container-fluid Container-fluid-no-overflow">
		<div className="row justify-content-center align-items-center complete-rs-box">
			
			<div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 complete-hd-btn-box">
				<div className="row justify-content-start align-items-center ">
					<div className="col-5 col-sm-5 col-md-1 col-lg-1 col-xl-1 text-center"></div>
					<div className="col-3 col-sm-3 col-md-1 col-lg-1 col-xl-1 text-center">
						<button className=" btn-success complete-hd-btn-comman" onClick={goHome}><FontAwesomeIcon icon={faHouseUser} /></button>
					</div>
					<div className="col-3 col-sm-3 col-md-1 col-lg-1 col-xl-1 text-center">
						<button className=" btn-primary complete-hd-btn-comman" onClick={scrollToBottom}><FontAwesomeIcon icon={faAnglesDown} /></button>
					</div>
				</div>
			</div>
			<div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 complete-rs-heading">
				<FontAwesomeIcon icon={faFilePen} className="complete-hd-icon"/> COMPLETE&nbsp; YOUR&nbsp; RESUME&nbsp; DETAILS 
			</div>
			
		</div>
		<div className="row justify-content-center align-items-center create-form-box">
			<div className=" col-11 col-sm-11 col-md-10 col-lg-10 col-xl-10 ">
			{/*form start---------------------------------------------------------------------*/}
			<form onSubmit={handleSubmit}>
		      	<div className="row">

		      		{/* Personal Information Section --------------------------------------------*/}
		      		<h2>PERSONAL INFORMATION</h2>
				    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
				      <input className="form-control" 
				        type="text"
				        placeholder="Your Full Name"
				        value={formData.personalInfo.fullName}
				        onChange={(e) => handleChange('personalInfo', 'fullName', e.target.value)}
				      />
				    </div>
				    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
				      <input className="form-control"
				        type="text"
				        placeholder="Father's Name"
				        value={formData.personalInfo.fatherName}
				        onChange={(e) => handleChange('personalInfo', 'fatherName', e.target.value)}
				      />
				    </div>
				    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
				      <input className="form-control"
				        type="date"
				        placeholder="D.O.B"
				        value={formData.personalInfo.DOB}
				        onChange={(e) => handleChange('personalInfo', 'DOB', e.target.value)}
				      />
				    </div>
				    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 form-group">
				      <select className="form-control" value={formData.personalInfo.gender} onChange={(e) => handleChange('personalInfo', 'gender', e.target.value)}>
				        	<option>Select Gender</option>
				        	<option value="Male">Male</option>
				        	<option value="Female">Female</option>
				        	<option value="Other">Other</option>
				       </select>
				    </div>
				    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
				      <select className="form-control" value={formData.personalInfo.maritalStatus} onChange={(e) => handleChange('personalInfo', 'maritalStatus', e.target.value)}>
				        	<option >Select Marital Status</option>
				        	<option value="Married">Married</option>
				        	<option value="Unmarried">Unmarried</option>
				       </select>
				    </div>
				    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
				      <input className="form-control"
				        type="text"
				        placeholder="Nationality"
				        value={formData.personalInfo.nationality}
				        onChange={(e) => handleChange('personalInfo', 'nationality', e.target.value)}
				      />
				    </div>
				    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
				      <input className="form-control"
				        type="text"
				        placeholder="Religion"
				        value={formData.personalInfo.religion}
				        onChange={(e) => handleChange('personalInfo', 'religion', e.target.value)}
				      />
				    </div>
				    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
				      <input className="form-control"
				        type="text"
				        placeholder="Language(e.g. Hindi / English)"
				        value={formData.personalInfo.language}
				        onChange={(e) => handleChange('personalInfo', 'language', e.target.value)}
				      />
				    </div>
				    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
				      <input className="form-control"
				        type="text"
				        placeholder="Designation (if working)"
				        value={formData.personalInfo.designation}
				        onChange={(e) => handleChange('personalInfo', 'designation', e.target.value)}
				      />
				    </div>


				    {/* Contact Information Section --------------------------------------------*/}
		      		<h2>CONTACT INFORMATION</h2>
				    <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3">
				      <input className="form-control" 
				        type="text"
				        placeholder="Your Address"
				        value={formData.contact.address}
				        onChange={(e) => handleChange('contact', 'address', e.target.value)}
				      />
				    </div>
				    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
				      <input className="form-control"
				        type="tel"
				        placeholder="PIN Code"
				        value={formData.contact.pinCode}
				        onChange={(e) => handleChange('contact', 'pinCode', e.target.value)}
				      />
				    </div>
				    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
				      <input className="form-control"
				        type="text"
				        placeholder="City"
				        value={formData.contact.city}
				        onChange={(e) => handleChange('contact', 'city', e.target.value)}
				      />
				    </div>
				    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
				      <input className="form-control"
				        type="text"
				        placeholder="State"
				        value={formData.contact.state}
				        onChange={(e) => handleChange('contact', 'state', e.target.value)}
				      />
				    </div>
				    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 form-group">
				      <input className="form-control"
				        type="text"
				        placeholder="Country"
				        value={formData.contact.country}
				        onChange={(e) => handleChange('contact', 'country', e.target.value)}
				      />
				    </div>
				    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
				      <input className="form-control"
				        type="tel"
				        placeholder="Phone No."
				        value={formData.contact.phoneNo}
				        onChange={(e) => handleChange('contact', 'phoneNo', e.target.value)}
				      />
				    </div>
				    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
				      <input className="form-control"
				        type="email"
				        placeholder="Email"
				        value={formData.contact.email}
				        onChange={(e) => handleChange('contact', 'email', e.target.value)}
				      />
				    </div>
				    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
				      <input className="form-control"
				        type="text"
				        placeholder="Linkedin url"
				        value={formData.contact.linkedin}
				        onChange={(e) => handleChange('contact', 'linkedin', e.target.value)}
				      />
				    </div>

				    {/* Profile Summary Section ---------------------------------------------------------*/}
		      		<h2>PROFILE SUMMARY</h2>
				    <div className="col-12">
				      <textarea className="form-control"
				        placeholder="Briefly write your profile summary"
				        value={formData.profileSummary.profileSummary}
				        onChange={(e) => handleChange('profileSummary', 'profileSummary', e.target.value)}
				      />
				    </div>

				    {/*Higher Education Section ----------------------------------------------------*/}
		      		<h2>EDUCATION</h2>
				    {formData.higherEducation.map((education, index) => (
					  <div key={index} className="row justify-content-start  mb-3">
					    <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3">
					      <input
					        className="form-control"
					        type="text"
					        placeholder="Course/Class Name"
					        value={education.degree}
					        onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
					      />
					    </div>
					    <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3">
					      <input
					        className="form-control"
					        type="text"
					        placeholder="University / School / Institution"
					        value={education.institution}
					        onChange={(e) => handleEducationChange(index, 'institution', e.target.value)}
					      />
					    </div>
					    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
					      <input
					        className="form-control"
					        type="text"
					        placeholder="Passing Year"
					        value={education.passingYear}
					        onChange={(e) => handleEducationChange(index, 'passingYear', e.target.value)}
					      />
					    </div>
					    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
					      <input
					        className="form-control"
					        type="text"
					        placeholder="Perentage %"
					        value={education.GPA}
					        onChange={(e) => handleEducationChange(index, 'GPA', e.target.value)}
					      />
					    </div>
					    <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 d-flex align-items-center">
					      <button
					        type="button"
					        className="btn btn-danger me-2"
					        onClick={() => removeEducationField(index)}
					      >
					        Remove
					      </button>
					    </div>
					  </div>
					))}
					<div className="col-12 mb-3">
					  <button type="button" className="btn btn-success" onClick={addEducationField}>
					    Add More Education
					  </button>
					</div>


					{/* certificate Section ------------------------------------------------*/}
		      		<h2>COURSE / CERTIFICATION</h2>
		      		{formData.certificate.map((ctf, index)=>(
		      		<div key={index} className="row mb-3">
		      			<div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
						      <input className="form-control"
						        type="text"
						        placeholder="Certificate Title"
						        value={ctf.certificateTitle}
						        onChange={(e) => handleCertificateChange(index, 'certificateTitle', e.target.value)}
						      />
						    </div>
						    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
						      <input className="form-control"
						        type="text"
						        placeholder="Institute Name"
						        value={ctf.certificateInstitute}
						        onChange={(e) => handleCertificateChange(index, 'certificateInstitute', e.target.value)}
						      />
						    </div>
						    <div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
						      <input className="form-control"
						        type="text"
						        placeholder="Duration (e.g. 6 Months)"
						        value={ctf.certificateDuration}
						        onChange={(e) => handleCertificateChange(index, 'certificateDuration', e.target.value)}
						      />
						    </div>
						    <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 ">
						      <button
						        type="button"
						        className="btn btn-danger me-2"
						        onClick={() => removeCertificateField(index)}
						      >
						        Remove
						      </button>
						    </div>
		      		</div>
		      		))}
				    	<div className="col-12 mb-3">
						  <button type="button" className="btn btn-success" onClick={addCertificateField}>
						    Add More Certificates
						  </button>
							</div>				    

				    {/* Internship Section ------------------------------------------------*/}
		      		<h2>APPRENTICE / INTERNSHIP</h2>
				    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
				      <input className="form-control"
				        type="text"
				        placeholder="Job Title / Department"
				        value={formData.internship.internTitle}
				        onChange={(e) => handleChange('internship', 'internTitle', e.target.value)}
				      />
				    </div>
				    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
				      <input className="form-control"
				        type="text"
				        placeholder="Company Name"
				        value={formData.internship.internCompany}
				        onChange={(e) => handleChange('internship', 'internCompany', e.target.value)}
				      />
				    </div>
				    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
				      <input className="form-control"
				        type="text"
				        placeholder="Duration (e.g., 2018-2020)"
				        value={formData.internship.internDuration}
				        onChange={(e) => handleChange('internship', 'internDuration', e.target.value)}
				      />
				    </div>
				    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
				      <textarea className="form-control"
				        placeholder="Role Description (*Optional)"
				        value={formData.internship.internDescription}
				        onChange={(e) => handleChange('internship', 'internDescription', e.target.value)}
				      />
				    </div>

				    {/* Work Experience Section ------------------------------------------------*/}
		      		<h2>WORK EXPERIENCE</h2>
		      		{formData.experience.map((exp, index)=>(
		      			<div key={index} className="row mb-3">
		      				<div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
						      <input className="form-control"
						        type="text"
						        placeholder="Job Title / Fresher"
						        value={exp.jobTitle}
						        onChange={(e) => handleExperienceChange(index, 'jobTitle', e.target.value)}
						      />
						    </div>
						    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
						      <input className="form-control"
						        type="text"
						        placeholder="Company"
						        value={exp.company}
						        onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
						      />
						    </div>
						    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
						      <input className="form-control"
						        type="text"
						        placeholder="Duration (e.g., 2018-2020)"
						        value={exp.duration}
						        onChange={(e) => handleExperienceChange(index, 'duration', e.target.value)}
						      />
						    </div>
						    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
						      <textarea className="form-control"
						        placeholder="Job Description, separated by '/'"
						        value={exp.description}
						        onChange={(e) => handleExperienceChange(index, 'description', e.target.value)}
						      />
						    </div>
						    <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 ">
						      <button
						        type="button"
						        className="btn btn-danger me-2"
						        onClick={() => removeExperienceField(index)}
						      >
						        Remove
						      </button>
						    </div>
		      			</div>
		      		))}
				    <div className="col-12 mb-3">
					  <button type="button" className="btn btn-success" onClick={addExperienceField}>
					    Add More Experience
					  </button>
						</div>

						{/* Award Section ------------------------------------------------*/}
		      		<h2>AWARDS</h2>
							{formData.award.map((awd, index)=>(
			      			<div key={index} className="row mb-3">
			      				<div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
							      <input className="form-control"
							        type="text"
							        placeholder="Award Name"
							        value={awd.awardName}
							        onChange={(e) => handleAwardChange(index, 'awardName', e.target.value)}
							      />
							    </div>
							    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
							      <input className="form-control"
							        type="text"
							        placeholder="Company/Institute Name"
							        value={awd.awardCompany}
							        onChange={(e) => handleAwardChange(index, 'awardCompany', e.target.value)}
							      />
							    </div>
							    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
							      <input className="form-control"
							        type="date"
							        placeholder="Date of award"
							        value={awd.awardDate}
							        onChange={(e) => handleAwardChange(index, 'awardDate', e.target.value)}
							      />
							    </div>
							    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
							      <textarea className="form-control"
							        placeholder="Brief award Description "
							        value={awd.awardDescription}
							        onChange={(e) => handleAwardChange(index, 'awardDescription', e.target.value)}
							      />
							    </div>
							    <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 ">
							      <button
							        type="button"
							        className="btn btn-danger me-2"
							        onClick={() => removeAwardField(index)}
							      >
							        Remove
							      </button>
							    </div>
			      			</div>
			      		))}
					    <div className="col-12 mb-3">
						  <button type="button" className="btn btn-success" onClick={addAwardField}>
						    Add More Awards
						  </button>
							</div>

						{/* achievement Section ------------------------------------------------*/}
		      		<h2>ACHIEVEMENTS</h2>
		      		{formData.achievement.map((ach, index)=>(
		      			<div key={index} className="row mb-3">
		      				<div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
						      <input className="form-control"
						        type="text"
						        placeholder="Achievement Title"
						        value={ach.achievementName}
						        onChange={(e) => handleAchievementChange(index, 'achievementName', e.target.value)}
						      />
						    </div>
						    <div className="col-12 col-sm-6 col-md-8 col-lg-8 col-xl-8">
						      <textarea className="form-control"
						        placeholder="Brief Achievement Description"
						        value={ach.achievementDescription}
						        onChange={(e) => handleAchievementChange(index, 'achievementDescription', e.target.value)}
						      />
						    </div>
						    <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 ">
						      <button
						        type="button"
						        className="btn btn-danger me-2"
						        onClick={() => removeAchievementField(index)}
						      >
						        Remove
						      </button>
						    </div>
		      			</div>
		      		))}
				    <div className="col-12 mb-3">
					  <button type="button" className="btn btn-success" onClick={addAchievementField}>
					    Add More Achievement
					  </button>
						</div>


				    {/* Skills Section ----------------------------------------------------------*/}
		      		<h2>SKILLS</h2>
				    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
				      <textarea className="form-control"
				        placeholder="List your Hard Skills, separated by '/'"
				        value={formData.skills.hardSkills}
				        onChange={(e) => handleChange('skills', 'hardSkills', e.target.value)}
				      />
				    </div>

				    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
				      <textarea className="form-control"
				        placeholder="List your Soft Skills, separated by '/'"
				        value={formData.skills.softSkills}
				        onChange={(e) => handleChange('skills', 'softSkills', e.target.value)}
				      />
				    </div>

		      		{/* Project Section ------------------------------------------------*/}
		      		<h2>PROJECTS</h2>
		      		{formData.project.map((project, index)=>(
		      			<div key={index} className="row mb-3">
		      				<div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
						      <input className="form-control"
						        type="text"
						        placeholder="Client"
						        value={project.client}
						        onChange={(e) => handleProjectChange(index, 'client', e.target.value)}
						      />
						    </div>
						    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
						      <input className="form-control"
						        type="text"
						        placeholder="Project Title"
						        value={project.projectTitle}
						        onChange={(e) => handleProjectChange(index, 'projectTitle', e.target.value)}
						      />
						    </div>
						    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
						      <textarea className="form-control"
						        placeholder="Write Technology / Skill used, Separated by comma"
						        value={project.skillUsed}
						        onChange={(e) => handleProjectChange(index, 'skillUsed', e.target.value)}
						      />
						    </div>
						    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 ">
						      <button
						        type="button"
						        className="btn btn-danger me-2"
						        onClick={() => removeProjectField(index)}
						      >
						        Remove
						      </button>
						    </div>
		      			</div>
		      		))}
				    <div className="col-12 mb-3">
					  <button type="button" className="btn btn-success" onClick={addProjectField}>
					    Add More Project
					  </button>
					</div>

				    {/* Activity Section ------------------------------------------------*/}
		      		<h2>PARTICIPATE ACTIVITIES</h2>
		      		{formData.activity.map((activity
		      		, index)=>(
		      			<div key={index} className="row mb-3">
		      				<div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
						      <input className="form-control"
						        type="text"
						        placeholder="Activity Name"
						        value={activity.activityName}
						        onChange={(e) => handleActivityChange(index, 'activityName', e.target.value)}
						      />
						    </div>
						    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
						      <input className="form-control"
						        type="date"
						        placeholder="Participate Year / Date"
						        value={activity.participateYear}
						        onChange={(e) => handleActivityChange(index, 'participateYear', e.target.value)}
						      />
						    </div>
						    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
						      <button
						        type="button"
						        className="btn btn-danger me-2"
						        onClick={() => removeActivityField(index)}
						      >
						        Remove
						      </button>
						    </div>
		      			</div>
		      		))}
				    <div className="col-12 mb-3">
					  <button type="button" className="btn btn-success" onClick={addActivityField}>
					    Add More Activity
					  </button>
					</div>

		      		{/* Interest Section ----------------------------------------------------------*/}
		      		<h2>INTEREST / HOBBIES</h2>
				    <div className="col-12">
				      <textarea className="form-control"
				        placeholder="Interest / Hobbies , separated by '/'"
				        value={formData.interest.interest}
				        onChange={(e) => handleChange('interest', 'interest', e.target.value)}
				      />
				    </div>

				 </div>
			</form>
			{/*form end---------------------------------------------------------------------*/} 

			{/* Reset button Section --------------------------------------------------*/}
  		<div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4">
  			<button className="  create-reset-btn" onClick={handleReset} type="reset">RESET DETAILS</button>
  		</div>

		  </div>
		</div>

		<div className="row justify-content-around align-items-center resume-triger-box">
			{/* Fresher Resume Model 1------------------------------------------------------------------*/} 
			<div className="col-12 mb-5">
				<div className="row justify-content-start align-items-center ">
					<div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 template-btn-box-hd">
			   			Fresher's Templates 
			   	</div>
					<div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3">
		  			<button className="resume-triger-btn" type="submit" data-bs-toggle="modal" data-bs-target="#fresherTemplate1Model">
		  				Fresher <br/> Template 1
		  			</button>
		  		</div>
					<Freshertemplate1 formData={formData} />

				</div>
			</div>
  		
			{/*Resume Model------------------------------------------------------------------*/}

			{/* Intermidiate Resume Model 1------------------------------------------------------------------*/} 
			<div className="col-12 mb-5">
				<div className="row justify-content-start align-items-center ">
					<div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 template-btn-box-hd">
			   			Intermediate's Templates
			   	</div>
					<div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3">
		  			<button className="resume-triger-btn" type="submit" data-bs-toggle="modal" data-bs-target="#midTemplate1Model1">
		  				Intermediate <br/> Template 1
		  			</button>
		  		</div>
					<Midtemplate1 formData={formData} />

				</div>
			</div> 
  		
			{/*Resume Model------------------------------------------------------------------*/}

		</div>

	</div>

	<Footer/>
  </>

  );
}


export default Create