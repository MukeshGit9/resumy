import React from 'react';

function StrToListModule(formData){
			// interest list---------------------------------------------------------------------
			 const interestList = formData.interest.interest.split('/').filter((item) => item.trim() !== '');

			// skills list
			const hardSkillsList = formData.skills.hardSkills.split('/').filter((item)=>item.trim() !=='');
			const softSkillsList = formData.skills.softSkills.split('/').filter((item)=>item.trim() !=='');

			// experience description
			const expDescriptionList = formData.experience
				  .flatMap((exp) =>
				    typeof exp.description === 'string'
				      ? exp.description.split('/').map((item) => item.trim())
				      : []
				  )
				  .filter((item) => item !== '');
	return{
		interestList,
		hardSkillsList,
		softSkillsList,
		expDescriptionList
	};
}

export default StrToListModule;