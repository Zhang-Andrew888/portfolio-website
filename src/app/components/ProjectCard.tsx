import React from "react";

type Props = {
  imgUrl: string;
  title: string;
  description: string;
};

const ProjectCard = ({ imgUrl, title, description }: Props) => {
  return (
    <div className="">
      <div
        className="h-52 md:h-72 rounded-t-xl"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      ></div>
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
        <h5 className="text-xl">{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
