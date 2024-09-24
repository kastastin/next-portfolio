import { aboutData as data } from "@/constants";

const SkillsList = () => (
  <ul>
    {data.skills.map((skill, index) => (
      <li
        key={index}
        className="mx-auto w-2/4 text-center xl:mx-0 xl:text-left"
      >
        <span className="font-medium">{skill}</span>
      </li>
    ))}
  </ul>
);

export default SkillsList;
