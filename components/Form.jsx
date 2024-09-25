"use client";

import { useRef } from "react";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";

import { toast } from "@/hooks/useToast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/lang/LanguageContext";

const Form = () => {
  const { language, translations } = useLanguage();

  const inputNameRef = useRef();
  const inputEmailRef = useRef();
  const inputMessageRef = useRef();

  const formHandler = async (e) => {
    e.preventDefault();

    const name = inputNameRef.current.value;
    const email = inputEmailRef.current.value;
    const message = inputMessageRef.current.value;

    try {
      const chatId = process.env.NEXT_PUBLIC_CHAT_ID;
      const botToken = process.env.NEXT_PUBLIC_BOT_TOKEN;
      const text = `Portfolio Form:%0A%0AName: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

      const requestURL = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${text}`;

      const response = await fetch(requestURL);
      const data = await response.json();

      if (!data.ok) {
        return toast({
          title: translations[language].toastTitleError,
          description: translations[language].toastDescriptionError,
          variant: "destructive",
        });
      }

      // clear the inputs
      inputNameRef.current.value = "";
      inputEmailRef.current.value = "";
      inputMessageRef.current.value = "";

      toast({
        title: translations[language].toastTitleSuccess,
        description: translations[language].toastDescriptionSuccess,
      });
    } catch (error) {
      return toast({
        title: translations[language].toastTitleError,
        description: translations[language].toastDescriptionError,
        variant: "destructive",
      });
    }
  };

  return (
    <form onSubmit={formHandler} className="flex flex-col gap-y-4">
      <div className="form-input">
        <Input
          type="name"
          placeholder={translations[language].placeholderName}
          ref={inputNameRef}
          required
        />
        <User size={20} className="absolute right-6" />
      </div>

      <div className="form-input">
        <Input
          type="email"
          placeholder={translations[language].placeholderEmail}
          ref={inputEmailRef}
          required
        />
        <MailIcon size={20} className="absolute right-6" />
      </div>

      <div className="form-input">
        <Textarea
          placeholder={translations[language].placeholderMessage}
          ref={inputMessageRef}
          required
        />
        <MessageSquare size={20} className="absolute right-6 top-4" />
      </div>

      <Button className="flex max-w-[166px] items-center gap-x-1">
        {translations[language].sendFormBtn}
        <ArrowRightIcon size={20} className="ml-2" />
      </Button>
    </form>
  );
};

export default Form;
