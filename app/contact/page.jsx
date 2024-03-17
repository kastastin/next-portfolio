import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";

import Form from "@/components/Form";

export default function ContactPage() {
  return (
    <main>
      <div className="container mx-auto">
        {/* Text and illustration */}
        <div className="mb-6 grid pt-12 xl:mb-24 xl:h-[480px] xl:grid-cols-2">
          {/* Text */}
          <div className="flex flex-col justify-center">
            <div className="mb-4 flex items-center gap-x-4 text-lg text-primary">
              <span className="h-[2px] w-[30px] bg-primary"></span>
              Say Hello ✌️
            </div>

            <h1 className="h1 mb-8 max-w-md">Let&apos;s work together.</h1>

            <p className="subtitle max-w-[400px]">
              Get in touch with me in any way convenient for you or leave your
              details and I&apos;ll write you as fast as possible.
            </p>
          </div>

          {/* Illustration */}
          <div className="bg-contact_illustration_light dark:bg-contact_illustration_dark hidden w-full bg-contain bg-top bg-no-repeat xl:flex" />
        </div>

        {/* Info and form */}
        <div className="mb-24 grid xl:mb-32 xl:grid-cols-2">
          {/* Info */}
          <div className="mb-12 flex flex-col gap-y-4 text-base xl:gap-y-8 xl:text-lg 2xl:mb-24 2xl:gap-y-14">
            {/* Email */}
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>kostya242421@gmail.com</div>
            </div>

            {/* Address */}
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary" />
              <div>Kyiv, Ukraine</div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className="text-primary" />
              <div>+380937171150</div>
            </div>
          </div>

          {/* Form */}
          <Form />
        </div>
      </div>
    </main>
  );
}
