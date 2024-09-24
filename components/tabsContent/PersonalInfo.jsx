import { aboutData as data } from "@/constants";

const PersonalInfo = () => (
  <>
    <p className="subtitle mx-auto max-w-xl xl:mx-0">
      I specialize in crafting intuitive websites with cutting-edge technology,
      delivering dynamic and engaging user experiences. Watching how the
      Internet is constantly changing and evolving, I always set myself the task
      of learning and improving my work in practice.
    </p>

    {/* Icons */}
    <ul className="mb-12 grid gap-4 xl:grid-cols-2">
      {data.personalInfo.map((item, index) => (
        <li key={index} className="mx-auto flex items-center gap-x-4 xl:mx-0">
          <div className="text-primary">{item.icon}</div>
          <div>{item.text}</div>
        </li>
      ))}
    </ul>

    {/* Languages */}
    <div className="flex flex-col gap-y-2 max-xl:text-center">
      <div className="text-primary">Language Skill</div>
      <div className="border-b border-border" />
      <div>Ukrainian, Russian, English</div>
    </div>
  </>
);

export default PersonalInfo;
