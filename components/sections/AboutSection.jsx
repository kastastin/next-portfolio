import DevImg from "@/components/DevImg";
import { aboutData as data } from "@/constants";
import Skills from "@/components/tabsContent/Skills";
import PersonalInfo from "@/components/tabsContent/PersonalInfo";
import Qualifications from "@/components/tabsContent/Qualifications";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const AboutSection = () => (
  <section id="about" className="pb-8 pt-16 max-xl:mb-20 xl:h-[860px] xl:py-24">
    <div className="container mx-auto">
      <h2 className="section-title-center">About me</h2>

      {/* Content */}
      <div className="flex flex-col xl:flex-row">
        {/* Image */}
        <div className="relative hidden flex-1 xl:flex">
          <DevImg
            imgSrc="/about/developer.svg"
            imgStyles="translate-x-[5px]"
            containerStyles="relative size-[505px] bg-about_shape_light bg-no-repeat dark:bg-about_shape_dark"
          />
        </div>

        {/* Tabs */}
        <div className="flex-1">
          <Tabs defaultValue="Personal Info">
            <TabsList variant="about">
              {data.tabs.map((tab) => (
                <TabsTrigger key={tab.name} value={tab.name}>
                  {tab.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {data.tabs.map((tab) => (
              <TabsContent key={tab.name} value={tab.name}>
                <h3 className="h3 mb-8 max-xl:text-center">{tab.title}</h3>

                {tab.name === "Personal Info" && <PersonalInfo />}
                {tab.name === "Skills" && <Skills />}
                {tab.name === "Qualifications" && <Qualifications />}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
