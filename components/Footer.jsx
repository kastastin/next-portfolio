import SocialIconsList from "@/components/lists/SocialIconsList";

const Footer = () => (
  <footer className="bg-secondary py-12">
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-between">
        <SocialIconsList
          containerStyles="mx-auto mb-4 flex gap-x-6 xl:mx-0"
          iconStyles="text-[20px] text-primary hover:text-white/70 dark:text-white/70 dark:hover:text-white/40"
        />

        <div className="text-center text-muted-foreground">
          Developed by Kastastin. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
