import React from "react";

function ProjectItem({ name, about, technologies }) {
  // console.log("name", name)
  let technologiesArr = technologies.map((technology) => {
    return technology
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        <span>{technologiesArr}</span>
      </div>
    </div>
  );
}

export default ProjectItem;
