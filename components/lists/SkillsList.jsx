import { aboutData as data } from "@/constants";

const SkillsList = () => (
  <ul className="space-y-5 xl:space-y-2">
    {data.skills.map((skill, index) => (
      <li
        key={index}
        className="mx-auto text-center xl:mx-0 xl:text-left"
      >
        <span className="font-medium">{skill}</span>
      </li>
    ))}
  </ul>
);

export default SkillsList;
