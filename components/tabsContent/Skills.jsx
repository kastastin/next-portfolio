"use client";

import ToolsList from "@/components/lists/ToolsList";
import SkillsList from "@/components/lists/SkillsList";

import { useTranslation } from "@/hooks/useTranslation";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-16">
      {/* Skills */}
      <div>
        <h4 className="h4-skills max-xl:text-center">{t("aboutSkills")}</h4>
        <div className="mb-4 border-b border-border" />
        <SkillsList />
      </div>

      {/* Tools */}
      <div>
        <h4 className="h4-skills max-xl:text-center">{t("aboutTools")}</h4>
        <div className="mb-4 border-b border-border" />
        <ToolsList />
      </div>
    </div>
  );
};

export default Skills;
