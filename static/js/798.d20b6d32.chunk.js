(self.webpackChunkresumemaker=self.webpackChunkresumemaker||[]).push([[417,798],{9798:(e,l,t)=>{"use strict";t.r(l),t.d(l,{default:()=>x});var a=t(5043),o=(t(6579),t(579));const c=a.lazy((()=>Promise.all([t.e(762),t.e(873)]).then(t.bind(t,9873)))),s=a.lazy((()=>Promise.all([t.e(929),t.e(762),t.e(790)]).then(t.bind(t,7790)))),r=a.lazy((()=>Promise.all([t.e(929),t.e(762),t.e(5)]).then(t.bind(t,1005)))),n=a.lazy((()=>Promise.all([t.e(929),t.e(762),t.e(411)]).then(t.bind(t,792)))),i=a.lazy((()=>Promise.all([t.e(929),t.e(762),t.e(892),t.e(688)]).then(t.bind(t,4688)))),m=a.lazy((()=>Promise.all([t.e(929),t.e(762),t.e(892),t.e(22)]).then(t.bind(t,7641)))),d=a.lazy((()=>Promise.all([t.e(929),t.e(762),t.e(892),t.e(114)]).then(t.bind(t,5114)))),p=a.lazy((()=>Promise.all([t.e(929),t.e(762),t.e(892),t.e(151)]).then(t.bind(t,4151)))),u=a.lazy((()=>Promise.all([t.e(929),t.e(762),t.e(892),t.e(426)]).then(t.bind(t,426)))),h=a.lazy((()=>Promise.all([t.e(929),t.e(762),t.e(892),t.e(641)]).then(t.bind(t,22))));const x=function(){const e={personalInfo:{fullName:"",fatherName:"",DOB:"",gender:"",maritalStatus:"",nationality:"",religion:"",language:"",designation:""},contact:{address:"",pinCode:"",city:"",state:"",country:"",phoneNo:"",email:"",linkedin:""},profileSummary:{profileSummary:""},higherEducation:[{degree:"",institution:"",passingYear:"",GPA:""}],certificate:[{certificateTitle:"",certificateInstitute:"",certificateDuration:""}],internship:{internTitle:"",internCompany:"",internDuration:"",internDescription:""},experience:[{jobTitle:"",company:"",duration:"",description:""}],award:[{awardName:"",awardCompany:"",awardDate:"",awardDescription:""}],achievement:[{achievementName:"",achievementDescription:""}],skills:{hardSkills:"",softSkills:""},project:[{client:"",projectTitle:"",skillUsed:""}],activity:[{activityName:"",participateYear:""}],interest:{interest:""}},[l,t]=(0,a.useState)(e),x=(e,l,a)=>{t((t=>({...t,[e]:{...t[e],[l]:a}})))},b=(e,a,o)=>{const c=l.higherEducation.map(((l,t)=>t===e?{...l,[a]:o}:l));t((e=>({...e,higherEducation:c})))},f=(e,a,o)=>{const c=l.experience.map(((l,t)=>t===e?{...l,[a]:o}:l));t((e=>({...e,experience:c})))},g=(e,a,o)=>{const c=l.award.map(((l,t)=>t===e?{...l,[a]:o}:l));t((e=>({...e,award:c})))},j=(e,a,o)=>{const c=l.project.map(((l,t)=>t===e?{...l,[a]:o}:l));t((e=>({...e,project:c})))},v=(e,a,o)=>{const c=l.certificate.map(((l,t)=>t===e?{...l,[a]:o}:l));t((e=>({...e,certificate:c})))},y=(e,a,o)=>{const c=l.activity.map(((l,t)=>t===e?{...l,[a]:o}:l));t((e=>({...e,activity:c})))},N=(e,a,o)=>{const c=l.achievement.map(((l,t)=>t===e?{...l,[a]:o}:l));t((e=>({...e,achievement:c})))};return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"Container-fluid Container-fluid-no-overflow",id:"resumeform-target",children:[(0,o.jsx)("div",{className:"row justify-content-center align-items-center create-form-box",children:(0,o.jsxs)("div",{className:" col-11 col-sm-11 col-md-10 col-lg-10 col-xl-10 ",children:[(0,o.jsx)("form",{onSubmit:e=>{e.preventDefault()},children:(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)("h2",{children:"PERSONAL INFORMATION"}),(0,o.jsx)("div",{className:"col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3",children:(0,o.jsxs)("label",{children:["Full Name",(0,o.jsx)("input",{className:"form-control",type:"text",placeholder:"",value:l.personalInfo.fullName,onChange:e=>x("personalInfo","fullName",e.target.value)})]})}),(0,o.jsx)("div",{className:"col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3",children:(0,o.jsxs)("label",{children:["Father's Name",(0,o.jsx)("input",{className:"form-control",type:"text",placeholder:"",value:l.personalInfo.fatherName,onChange:e=>x("personalInfo","fatherName",e.target.value)})]})}),(0,o.jsx)("div",{className:"col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3",children:(0,o.jsxs)("label",{children:["D.O.B",(0,o.jsx)("input",{className:"form-control",type:"date",placeholder:"",value:l.personalInfo.DOB,onChange:e=>x("personalInfo","DOB",e.target.value)})]})}),(0,o.jsx)("div",{className:"col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 form-group",children:(0,o.jsxs)("label",{children:["Gender",(0,o.jsxs)("select",{className:"form-control",value:l.personalInfo.gender,onChange:e=>x("personalInfo","gender",e.target.value),children:[(0,o.jsx)("option",{children:"Select One"}),(0,o.jsx)("option",{value:"Male",children:"Male"}),(0,o.jsx)("option",{value:"Female",children:"Female"}),(0,o.jsx)("option",{value:"Other",children:"Other"})]})]})}),(0,o.jsx)("div",{className:"col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3",children:(0,o.jsxs)("label",{children:["Marital Status",(0,o.jsxs)("select",{className:"form-control",value:l.personalInfo.maritalStatus,onChange:e=>x("personalInfo","maritalStatus",e.target.value),children:[(0,o.jsx)("option",{children:"Select One"}),(0,o.jsx)("option",{value:"Married",children:"Married"}),(0,o.jsx)("option",{value:"Unmarried",children:"Unmarried"})]})]})}),(0,o.jsx)("div",{className:"col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3",children:(0,o.jsxs)("label",{children:["Nationality",(0,o.jsx)("input",{className:"form-control",type:"text",placeholder:"",value:l.personalInfo.nationality,onChange:e=>x("personalInfo","nationality",e.target.value)})]})}),(0,o.jsx)("div",{className:"col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3",children:(0,o.jsxs)("label",{children:["Religion",(0,o.jsx)("input",{className:"form-control",type:"text",placeholder:"",value:l.personalInfo.religion,onChange:e=>x("personalInfo","religion",e.target.value)})]})}),(0,o.jsx)("div",{className:"col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3",children:(0,o.jsxs)("label",{children:["Language",(0,o.jsx)("input",{className:"form-control",type:"text",placeholder:"(e.g. Hindi / English)",value:l.personalInfo.language,onChange:e=>x("personalInfo","language",e.target.value)})]})}),(0,o.jsx)("div",{className:"col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3",children:(0,o.jsxs)("label",{children:["Designation",(0,o.jsx)("input",{className:"form-control",type:"text",placeholder:"(if working)",value:l.personalInfo.designation,onChange:e=>x("personalInfo","designation",e.target.value)})]})}),(0,o.jsx)("h2",{children:"CONTACT INFORMATION"}),(0,o.jsx)("div",{className:"col-6 col-sm-12 col-md-4 col-lg-3 col-xl-3",children:(0,o.jsxs)("label",{children:["Your Address",(0,o.jsx)("input",{className:"form-control",type:"text",placeholder:"",value:l.contact.address,onChange:e=>x("contact","address",e.target.value)})]})}),(0,o.jsx)("div",{className:"col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3",children:(0,o.jsxs)("label",{children:["PIN Code",(0,o.jsx)("input",{className:"form-control",type:"tel",placeholder:"",value:l.contact.pinCode,onChange:e=>x("contact","pinCode",e.target.value)})]})}),(0,o.jsx)("div",{className:"col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3",children:(0,o.jsxs)("label",{children:["City",(0,o.jsx)("input",{className:"form-control",type:"text",placeholder:"",value:l.contact.city,onChange:e=>x("contact","city",e.target.value)})]})}),(0,o.jsx)("div",{className:"col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3",children:(0,o.jsxs)("label",{children:["State",(0,o.jsx)("input",{className:"form-control",type:"text",placeholder:"",value:l.contact.state,onChange:e=>x("contact","state",e.target.value)})]})}),(0,o.jsx)("div",{className:"col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 form-group",children:(0,o.jsxs)("label",{children:["Country",(0,o.jsx)("input",{className:"form-control",type:"text",placeholder:"",value:l.contact.country,onChange:e=>x("contact","country",e.target.value)})]})}),(0,o.jsx)("div",{className:"col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3",children:(0,o.jsxs)("label",{children:["Phone No.",(0,o.jsx)("input",{className:"form-control",type:"tel",placeholder:"",value:l.contact.phoneNo,onChange:e=>x("contact","phoneNo",e.target.value)})]})}),(0,o.jsx)("div",{className:"col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3",children:(0,o.jsxs)("label",{children:["Email",(0,o.jsx)("input",{className:"form-control",type:"email",placeholder:"(e.g. xyz@gmail.com)",value:l.contact.email,onChange:e=>x("contact","email",e.target.value)})]})}),(0,o.jsx)("div",{className:"col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3",children:(0,o.jsxs)("label",{children:["Linkedin url",(0,o.jsx)("input",{className:"form-control",type:"text",placeholder:"",value:l.contact.linkedin,onChange:e=>x("contact","linkedin",e.target.value)})]})}),(0,o.jsx)("h2",{children:"PROFILE SUMMARY"}),(0,o.jsx)("div",{className:"col-12",children:(0,o.jsx)("textarea",{className:"form-control",placeholder:"Briefly write your profile summary",value:l.profileSummary.profileSummary,onChange:e=>x("profileSummary","profileSummary",e.target.value)})}),(0,o.jsx)("h2",{children:"EDUCATION"}),l.higherEducation.map(((e,l)=>(0,o.jsxs)("div",{className:"row justify-content-start  mb-3",children:[(0,o.jsx)("div",{className:"col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3",children:(0,o.jsxs)("label",{children:["Course/Class Name",(0,o.jsx)("input",{className:"form-control",type:"text",placeholder:"",value:e.degree,onChange:e=>b(l,"degree",e.target.value)})]})}),(0,o.jsx)("div",{className:"col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3",children:(0,o.jsxs)("label",{children:["University / School / Collage",(0,o.jsx)("input",{className:"form-control",type:"text",placeholder:"",value:e.institution,onChange:e=>b(l,"institution",e.target.value)})]})}),(0,o.jsx)("div",{className:"col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3",children:(0,o.jsxs)("label",{children:["Passing Year",(0,o.jsx)("input",{className:"form-control",type:"text",placeholder:"",value:e.passingYear,onChange:e=>b(l,"passingYear",e.target.value)})]})}),(0,o.jsx)("div",{className:"col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3",children:(0,o.jsxs)("label",{children:["Perentage %",(0,o.jsx)("input",{className:"form-control",type:"text",placeholder:"",value:e.GPA,onChange:e=>b(l,"GPA",e.target.value)})]})}),(0,o.jsx)("div",{className:"col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 d-flex align-items-center",children:(0,o.jsx)("button",{type:"button",className:"btn btn-danger me-2 remove-btn",onClick:()=>(e=>{t((l=>({...l,higherEducation:l.higherEducation.filter(((l,t)=>t!==e))})))})(l),children:"Remove"})})]},l))),(0,o.jsx)("div",{className:"col-12 mb-3",children:(0,o.jsx)("button",{type:"button",className:"btn btn-success add-btn",onClick:()=>{t((e=>({...e,higherEducation:[...e.higherEducation,{degree:"",institution:"",passingYear:"",GPA:""}]})))},children:"Add More Education"})}),(0,o.jsx)("h2",{children:"COURSE / CERTIFICATION"}),l.certificate.map(((e,l)=>(0,o.jsxs)("div",{className:"row mb-3",children:[(0,o.jsx)("div",{className:"col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3",children:(0,o.jsxs)("label",{children:["Certificate Title",(0,o.jsx)("input",{className:"form-control",type:"text",placeholder:"",value:e.certificateTitle,onChange:e=>v(l,"certificateTitle",e.target.value)})]})}),(0,o.jsx)("div",{className:"col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3",children:(0,o.jsxs)("label",{children:["Duration",(0,o.jsx)("input",{className:"form-control",type:"text",placeholder:"(e.g. 6 Months)",value:e.certificateDuration,onChange:e=>v(l,"certificateDuration",e.target.value)})]})}),(0,o.jsx)("div",{className:"col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6",children:(0,o.jsxs)("label",{children:["Institute Name",(0,o.jsx)("input",{className:"form-control",type:"text",placeholder:"",value:e.certificateInstitute,onChange:e=>v(l,"certificateInstitute",e.target.value)})]})}),(0,o.jsx)("div",{className:"col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ",children:(0,o.jsx)("button",{type:"button",className:"btn btn-danger me-2 remove-btn",onClick:()=>(e=>{t((l=>({...l,certificate:l.certificate.filter(((l,t)=>t!==e))})))})(l),children:"Remove"})})]},l))),(0,o.jsx)("div",{className:"col-12 mb-3",children:(0,o.jsx)("button",{type:"button",className:"btn btn-success add-btn",onClick:()=>{t((e=>({...e,certificate:[...e.certificate,{certificateTitle:"",certificateInstitute:"",certificateDuration:""}]})))},children:"Add More Certificates"})}),(0,o.jsx)("h2",{children:"APPRENTICE / INTERNSHIP"}),(0,o.jsx)("div",{className:"col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3",children:(0,o.jsxs)("label",{children:["Job Title / Department",(0,o.jsx)("input",{className:"form-control",type:"text",placeholder:"",value:l.internship.internTitle,onChange:e=>x("internship","internTitle",e.target.value)})]})}),(0,o.jsx)("div",{className:"col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3",children:(0,o.jsxs)("label",{children:["Duration",(0,o.jsx)("input",{className:"form-control",type:"text",placeholder:"(e.g., 2018-2020)",value:l.internship.internDuration,onChange:e=>x("internship","internDuration",e.target.value)})]})}),(0,o.jsx)("div",{className:"col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3",children:(0,o.jsxs)("label",{children:["Company Name",(0,o.jsx)("input",{className:"form-control",type:"text",placeholder:"",value:l.internship.internCompany,onChange:e=>x("internship","internCompany",e.target.value)})]})}),(0,o.jsx)("div",{className:"col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3",children:(0,o.jsxs)("label",{children:["Role Description",(0,o.jsx)("textarea",{className:"form-control",placeholder:"(*Optional)",value:l.internship.internDescription,onChange:e=>x("internship","internDescription",e.target.value)})]})}),(0,o.jsx)("h2",{children:"WORK EXPERIENCE"}),l.experience.map(((e,l)=>(0,o.jsxs)("div",{className:"row mb-3",children:[(0,o.jsx)("div",{className:"col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3",children:(0,o.jsxs)("label",{children:["Job Title / Fresher",(0,o.jsx)("input",{className:"form-control",type:"text",placeholder:"",value:e.jobTitle,onChange:e=>f(l,"jobTitle",e.target.value)})]})}),(0,o.jsx)("div",{className:"col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3",children:(0,o.jsxs)("label",{children:["Duration",(0,o.jsx)("input",{className:"form-control",type:"text",placeholder:"(e.g., 2018-2020)",value:e.duration,onChange:e=>f(l,"duration",e.target.value)})]})}),(0,o.jsx)("div",{className:"col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3",children:(0,o.jsxs)("label",{children:["Company",(0,o.jsx)("input",{className:"form-control",type:"text",placeholder:"",value:e.company,onChange:e=>f(l,"company",e.target.value)})]})}),(0,o.jsx)("div",{className:"col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3",children:(0,o.jsxs)("label",{children:["Job Description",(0,o.jsx)("textarea",{className:"form-control",placeholder:"separated by '/'",value:e.description,onChange:e=>f(l,"description",e.target.value)})]})}),(0,o.jsx)("div",{className:"col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ",children:(0,o.jsx)("button",{type:"button",className:"btn btn-danger me-2 remove-btn",onClick:()=>(e=>{t((l=>({...l,experience:l.experience.filter(((l,t)=>t!==e))})))})(l),children:"Remove"})})]},l))),(0,o.jsx)("div",{className:"col-12 mb-3",children:(0,o.jsx)("button",{type:"button",className:"btn btn-success add-btn",onClick:()=>{t((e=>({...e,experience:[...e.experience,{jobTitle:"",company:"",duration:"",description:""}]})))},children:"Add More Experience"})}),(0,o.jsx)("h2",{children:"AWARDS"}),l.award.map(((e,l)=>(0,o.jsxs)("div",{className:"row mb-3",children:[(0,o.jsx)("div",{className:"col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3",children:(0,o.jsxs)("label",{children:["Award Name",(0,o.jsx)("input",{className:"form-control",type:"text",placeholder:"",value:e.awardName,onChange:e=>g(l,"awardName",e.target.value)})]})}),(0,o.jsx)("div",{className:"col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3",children:(0,o.jsxs)("label",{children:["Date of award",(0,o.jsx)("input",{className:"form-control",type:"date",placeholder:"",value:e.awardDate,onChange:e=>g(l,"awardDate",e.target.value)})]})}),(0,o.jsx)("div",{className:"col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3",children:(0,o.jsxs)("label",{children:["Company/Institute Name",(0,o.jsx)("input",{className:"form-control",type:"text",placeholder:"",value:e.awardCompany,onChange:e=>g(l,"awardCompany",e.target.value)})]})}),(0,o.jsx)("div",{className:"col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3",children:(0,o.jsxs)("label",{children:["Award Description",(0,o.jsx)("textarea",{className:"form-control",placeholder:"Brief",value:e.awardDescription,onChange:e=>g(l,"awardDescription",e.target.value)})]})}),(0,o.jsx)("div",{className:"col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ",children:(0,o.jsx)("button",{type:"button",className:"btn btn-danger me-2 remove-btn",onClick:()=>(e=>{t((l=>({...l,award:l.award.filter(((l,t)=>t!==e))})))})(l),children:"Remove"})})]},l))),(0,o.jsx)("div",{className:"col-12 mb-3",children:(0,o.jsx)("button",{type:"button",className:"btn btn-success add-btn",onClick:()=>{t((e=>({...e,award:[...e.award,{awardName:"",awardCompany:"",awardDate:"",awardDescription:""}]})))},children:"Add More Awards"})}),(0,o.jsx)("h2",{children:"ACHIEVEMENTS"}),l.achievement.map(((e,l)=>(0,o.jsxs)("div",{className:"row mb-3",children:[(0,o.jsx)("div",{className:"col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4",children:(0,o.jsxs)("label",{children:["Achievement Title",(0,o.jsx)("input",{className:"form-control",type:"text",placeholder:"",value:e.achievementName,onChange:e=>N(l,"achievementName",e.target.value)})]})}),(0,o.jsx)("div",{className:"col-12 col-sm-6 col-md-8 col-lg-8 col-xl-8",children:(0,o.jsxs)("label",{children:["Achievement Description",(0,o.jsx)("textarea",{className:"form-control",placeholder:"Brief ",value:e.achievementDescription,onChange:e=>N(l,"achievementDescription",e.target.value)})]})}),(0,o.jsx)("div",{className:"col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ",children:(0,o.jsx)("button",{type:"button",className:"btn btn-danger me-2 remove-btn",onClick:()=>(e=>{t((l=>({...l,achievement:l.achievement.filter(((l,t)=>t!==e))})))})(l),children:"Remove"})})]},l))),(0,o.jsx)("div",{className:"col-12 mb-3",children:(0,o.jsx)("button",{type:"button",className:"btn btn-success add-btn",onClick:()=>{t((e=>({...e,achievement:[...e.achievement,{achievementName:"",achievementDescription:""}]})))},children:"Add More Achievement"})}),(0,o.jsx)("h2",{children:"SKILLS"}),(0,o.jsx)("div",{className:"col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6",children:(0,o.jsx)("textarea",{className:"form-control",placeholder:"List your Hard Skills, separated by '/'",value:l.skills.hardSkills,onChange:e=>x("skills","hardSkills",e.target.value)})}),(0,o.jsx)("div",{className:"col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6",children:(0,o.jsx)("textarea",{className:"form-control",placeholder:"List your Soft Skills, separated by '/'",value:l.skills.softSkills,onChange:e=>x("skills","softSkills",e.target.value)})}),(0,o.jsx)("h2",{children:"PROJECTS"}),l.project.map(((e,l)=>(0,o.jsxs)("div",{className:"row mb-3",children:[(0,o.jsx)("div",{className:"col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4",children:(0,o.jsxs)("label",{children:["Client",(0,o.jsx)("input",{className:"form-control",type:"text",placeholder:"",value:e.client,onChange:e=>j(l,"client",e.target.value)})]})}),(0,o.jsx)("div",{className:"col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4",children:(0,o.jsxs)("label",{children:["Project Title",(0,o.jsx)("input",{className:"form-control",type:"text",placeholder:"",value:e.projectTitle,onChange:e=>j(l,"projectTitle",e.target.value)})]})}),(0,o.jsx)("div",{className:"col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4",children:(0,o.jsxs)("label",{children:["Technology / Skill used",(0,o.jsx)("textarea",{className:"form-control",placeholder:"Separated by comma",value:e.skillUsed,onChange:e=>j(l,"skillUsed",e.target.value)})]})}),(0,o.jsx)("div",{className:"col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ",children:(0,o.jsx)("button",{type:"button",className:"btn btn-danger me-2 remove-btn",onClick:()=>(e=>{t((l=>({...l,project:l.project.filter(((l,t)=>t!==e))})))})(l),children:"Remove"})})]},l))),(0,o.jsx)("div",{className:"col-12 mb-3",children:(0,o.jsx)("button",{type:"button",className:"btn btn-success add-btn",onClick:()=>{t((e=>({...e,project:[...e.project,{client:"",projectTitle:"",skillUsed:""}]})))},children:"Add More Project"})}),(0,o.jsx)("h2",{children:"PARTICIPATE ACTIVITIES"}),l.activity.map(((e,l)=>(0,o.jsxs)("div",{className:"row mb-3",children:[(0,o.jsx)("div",{className:"col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8",children:(0,o.jsxs)("label",{children:["Activity Name",(0,o.jsx)("input",{className:"form-control",type:"text",placeholder:"",value:e.activityName,onChange:e=>y(l,"activityName",e.target.value)})]})}),(0,o.jsx)("div",{className:"col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4",children:(0,o.jsxs)("label",{children:["Participate Year / Date",(0,o.jsx)("input",{className:"form-control",type:"date",placeholder:"",value:e.participateYear,onChange:e=>y(l,"participateYear",e.target.value)})]})}),(0,o.jsx)("div",{className:"col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ",children:(0,o.jsx)("button",{type:"button",className:"btn btn-danger me-2 remove-btn",onClick:()=>(e=>{t((l=>({...l,activity:l.activity.filter(((l,t)=>t!==e))})))})(l),children:"Remove"})})]},l))),(0,o.jsx)("div",{className:"col-12 mb-3",children:(0,o.jsx)("button",{type:"button",className:"btn btn-success add-btn",onClick:()=>{t((e=>({...e,activity:[...e.activity,{activityName:"",participateYear:""}]})))},children:"Add More Activity"})}),(0,o.jsx)("h2",{children:"INTEREST / HOBBIES"}),(0,o.jsx)("div",{className:"col-12",children:(0,o.jsx)("textarea",{className:"form-control",placeholder:"Interest / Hobbies , separated by '/'",value:l.interest.interest,onChange:e=>x("interest","interest",e.target.value)})})]})}),(0,o.jsx)("div",{className:"col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6",children:(0,o.jsx)("button",{className:"  create-reset-btn",onClick:()=>{t(e)},type:"reset",children:"RESET DETAILS"})})]})}),(0,o.jsxs)("div",{className:"row justify-content-around align-items-center resume-triger-box",id:"resumebutton-target",children:[(0,o.jsx)("div",{className:" col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ",children:(0,o.jsx)("h1",{children:"CHOOSE YOUR PERFECT RESUME TEMPLATE"})}),(0,o.jsx)("div",{className:"col-12 mb-3",children:(0,o.jsxs)("div",{className:"row justify-content-start align-items-center ",children:[(0,o.jsx)("div",{className:"col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 template-btn-box-hd",children:"Fresher's Templates"}),(0,o.jsx)("div",{className:"col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3",children:(0,o.jsxs)("button",{className:"resume-triger-btn",type:"submit","data-bs-toggle":"modal","data-bs-target":"#fresherTemplateModel",children:["Fresher ",(0,o.jsx)("br",{})," Template 1"]})}),(0,o.jsx)(c,{formData:l}),(0,o.jsx)("div",{className:"col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3",children:(0,o.jsxs)("button",{className:"resume-triger-btn",type:"submit","data-bs-toggle":"modal","data-bs-target":"#fresherTemplateModel2",children:["Fresher ",(0,o.jsx)("br",{})," Template 2"]})}),(0,o.jsx)(s,{formData:l}),(0,o.jsx)("div",{className:"col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3",children:(0,o.jsxs)("button",{className:"resume-triger-btn",type:"submit","data-bs-toggle":"modal","data-bs-target":"#fresherTemplateModel3",children:["Fresher ",(0,o.jsx)("br",{})," Template 3"]})}),(0,o.jsx)(r,{formData:l}),(0,o.jsx)("div",{className:"col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3",children:(0,o.jsxs)("button",{className:"resume-triger-btn",type:"submit","data-bs-toggle":"modal","data-bs-target":"#fresherTemplateModel4",children:["Fresher ",(0,o.jsx)("br",{})," Template 4"]})}),(0,o.jsx)(n,{formData:l})]})}),(0,o.jsx)("div",{className:"col-12 mb-3",children:(0,o.jsxs)("div",{className:"row justify-content-start align-items-center ",children:[(0,o.jsx)("div",{className:"col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 template-btn-box-hd",children:"Intermediate's Templates"}),(0,o.jsx)("div",{className:"col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3",children:(0,o.jsxs)("button",{className:"resume-triger-btn",type:"submit","data-bs-toggle":"modal","data-bs-target":"#midTemplateModel1",children:["Intermediate ",(0,o.jsx)("br",{})," Template 1"]})}),(0,o.jsx)(i,{formData:l}),(0,o.jsx)("div",{className:"col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3",children:(0,o.jsxs)("button",{className:"resume-triger-btn",type:"submit","data-bs-toggle":"modal","data-bs-target":"#midTemplateModel2",children:["Intermediate ",(0,o.jsx)("br",{})," Template 2"]})}),(0,o.jsx)(m,{formData:l}),(0,o.jsx)("div",{className:"col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3",children:(0,o.jsxs)("button",{className:"resume-triger-btn",type:"submit","data-bs-toggle":"modal","data-bs-target":"#midTemplateModel3",children:["Intermediate ",(0,o.jsx)("br",{})," Template 3"]})}),(0,o.jsx)(d,{formData:l})]})}),(0,o.jsx)("div",{className:"col-12 mb-3",children:(0,o.jsxs)("div",{className:"row justify-content-start align-items-center ",children:[(0,o.jsx)("div",{className:"col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 template-btn-box-hd",children:"Professional's Templates"}),(0,o.jsx)("div",{className:"col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3",children:(0,o.jsxs)("button",{className:"resume-triger-btn",type:"submit","data-bs-toggle":"modal","data-bs-target":"#professionalTemplateModel1",children:["Professional ",(0,o.jsx)("br",{})," Template 1"]})}),(0,o.jsx)(p,{formData:l}),(0,o.jsx)("div",{className:"col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3",children:(0,o.jsxs)("button",{className:"resume-triger-btn",type:"submit","data-bs-toggle":"modal","data-bs-target":"#professionalTemplateModel2",children:["Professional ",(0,o.jsx)("br",{})," Template 2"]})}),(0,o.jsx)(u,{formData:l}),(0,o.jsx)("div",{className:"col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3",children:(0,o.jsxs)("button",{className:"resume-triger-btn",type:"submit","data-bs-toggle":"modal","data-bs-target":"#professionalTemplateModel3",children:["Professional ",(0,o.jsx)("br",{})," Template 3"]})}),(0,o.jsx)(h,{formData:l})]})})]})]})})}},6579:(e,l,t)=>{"use strict";t.d(l,{g:()=>v});var a=t(3710),o=t(5173),c=t.n(o),s=t(5043);function r(e,l){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);l&&(a=a.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),t.push.apply(t,a)}return t}function n(e){for(var l=1;l<arguments.length;l++){var t=null!=arguments[l]?arguments[l]:{};l%2?r(Object(t),!0).forEach((function(l){m(e,l,t[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(t,l))}))}return e}function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function m(e,l,t){return l in e?Object.defineProperty(e,l,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[l]=t,e}function d(e,l){if(null==e)return{};var t,a,o=function(e,l){if(null==e)return{};var t,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],l.indexOf(t)>=0||(o[t]=e[t]);return o}(e,l);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function p(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,l){if(!e)return;if("string"===typeof e)return u(e,l);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return u(e,l)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,l){(null==l||l>e.length)&&(l=e.length);for(var t=0,a=new Array(l);t<l;t++)a[t]=e[t];return a}function h(e){return l=e,(l-=0)===l?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,l){return l?l.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var l}var x=["style"];var b=!1;try{b=!0}catch(N){}function f(e){return e&&"object"===i(e)&&e.prefix&&e.iconName&&e.icon?e:a.qg.icon?a.qg.icon(e):null===e?null:e&&"object"===i(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}function g(e,l){return Array.isArray(l)&&l.length>0||!Array.isArray(l)&&l?m({},e,l):{}}var j={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},v=s.forwardRef((function(e,l){var t=n(n({},j),e),o=t.icon,c=t.mask,s=t.symbol,r=t.className,i=t.title,d=t.titleId,u=t.maskId,h=f(o),x=g("classes",[].concat(p(function(e){var l,t=e.beat,a=e.fade,o=e.beatFade,c=e.bounce,s=e.shake,r=e.flash,n=e.spin,i=e.spinPulse,d=e.spinReverse,p=e.pulse,u=e.fixedWidth,h=e.inverse,x=e.border,b=e.listItem,f=e.flip,g=e.size,j=e.rotation,v=e.pull,y=(m(l={"fa-beat":t,"fa-fade":a,"fa-beat-fade":o,"fa-bounce":c,"fa-shake":s,"fa-flash":r,"fa-spin":n,"fa-spin-reverse":d,"fa-spin-pulse":i,"fa-pulse":p,"fa-fw":u,"fa-inverse":h,"fa-border":x,"fa-li":b,"fa-flip":!0===f,"fa-flip-horizontal":"horizontal"===f||"both"===f,"fa-flip-vertical":"vertical"===f||"both"===f},"fa-".concat(g),"undefined"!==typeof g&&null!==g),m(l,"fa-rotate-".concat(j),"undefined"!==typeof j&&null!==j&&0!==j),m(l,"fa-pull-".concat(v),"undefined"!==typeof v&&null!==v),m(l,"fa-swap-opacity",e.swapOpacity),l);return Object.keys(y).map((function(e){return y[e]?e:null})).filter((function(e){return e}))}(t)),p((r||"").split(" ")))),v=g("transform","string"===typeof t.transform?a.qg.transform(t.transform):t.transform),N=g("mask",f(c)),C=(0,a.Kk)(h,n(n(n(n({},x),v),N),{},{symbol:s,title:i,titleId:d,maskId:u}));if(!C)return function(){var e;!b&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",h),null;var T=C.abstract,O={ref:l};return Object.keys(t).forEach((function(e){j.hasOwnProperty(e)||(O[e]=t[e])})),y(T[0],O)}));v.displayName="FontAwesomeIcon",v.propTypes={beat:c().bool,border:c().bool,beatFade:c().bool,bounce:c().bool,className:c().string,fade:c().bool,flash:c().bool,mask:c().oneOfType([c().object,c().array,c().string]),maskId:c().string,fixedWidth:c().bool,inverse:c().bool,flip:c().oneOf([!0,!1,"horizontal","vertical","both"]),icon:c().oneOfType([c().object,c().array,c().string]),listItem:c().bool,pull:c().oneOf(["right","left"]),pulse:c().bool,rotation:c().oneOf([0,90,180,270]),shake:c().bool,size:c().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:c().bool,spinPulse:c().bool,spinReverse:c().bool,symbol:c().oneOfType([c().bool,c().string]),title:c().string,titleId:c().string,transform:c().oneOfType([c().string,c().object]),swapOpacity:c().bool};var y=function e(l,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof t)return t;var o=(t.children||[]).map((function(t){return e(l,t)})),c=Object.keys(t.attributes||{}).reduce((function(e,l){var a=t.attributes[l];switch(l){case"class":e.attrs.className=a,delete t.attributes.class;break;case"style":e.attrs.style=a.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,l){var t,a=l.indexOf(":"),o=h(l.slice(0,a)),c=l.slice(a+1).trim();return o.startsWith("webkit")?e[(t=o,t.charAt(0).toUpperCase()+t.slice(1))]=c:e[o]=c,e}),{});break;default:0===l.indexOf("aria-")||0===l.indexOf("data-")?e.attrs[l.toLowerCase()]=a:e.attrs[h(l)]=a}return e}),{attrs:{}}),s=a.style,r=void 0===s?{}:s,i=d(a,x);return c.attrs.style=n(n({},c.attrs.style),r),l.apply(void 0,[t.tag,n(n({},c.attrs),i)].concat(p(o)))}.bind(null,s.createElement)},1497:(e,l,t)=>{"use strict";var a=t(3218);function o(){}function c(){}c.resetWarningCache=o,e.exports=function(){function e(e,l,t,o,c,s){if(s!==a){var r=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw r.name="Invariant Violation",r}}function l(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:l,element:e,elementType:e,instanceOf:l,node:e,objectOf:l,oneOf:l,oneOfType:l,shape:l,exact:l,checkPropTypes:c,resetWarningCache:o};return t.PropTypes=t,t}},5173:(e,l,t)=>{e.exports=t(1497)()},3218:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=798.d20b6d32.chunk.js.map