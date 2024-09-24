import ToolsList from "@/components/lists/ToolsList";
import SkillsList from "@/components/lists/SkillsList";

const Skills = () => (
  <div className="space-y-16">
    {/* Skills */}
    <div>
      <h4 className="h4-skills max-xl:text-center">Skills</h4>
      <div className="mb-4 border-b border-border" />
      <SkillsList />
    </div>

    {/* Tools */}
    <div>
      <h4 className="h4-skills max-xl:text-center">Tools</h4>
      <div className="mb-4 border-b border-border" />
      <ToolsList />
    </div>
  </div>
);

export default Skills;
