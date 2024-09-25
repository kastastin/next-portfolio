import Image from "next/image";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lang/LanguageContext";

const LanguageSwitcher = ({...props}) => {
  const { language, switchLanguage } = useLanguage();

  return (
    <div className="flex gap-4" {...props}>
      <Button
        size="icon"
        variant="outline"
        className="focus-visible:ring-0"
        onClick={() => switchLanguage(language === "en" ? "uk" : "en")}
      >
        <Image
          src={`/flags/${language}.svg`}
          alt="Flag"
          width={30}
          height={30}
        />
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
