"use client";

import { useRef } from "react";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

export default function Form() {
  const inputNameRef = useRef();
  const inputEmailRef = useRef();
  const inputMessageRef = useRef();

  async function formHandler(e) {
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

      if (!data.ok) throw new Error("Failed to send message");
      alert("Message successfully sent!");

      // clear the inputs
      inputNameRef.current.value = "";
      inputEmailRef.current.value = "";
      inputMessageRef.current.value = "";
    } catch (error) {
      alert("Error sending message! Please try again.");
    }
  }

  return (
    <form onSubmit={formHandler} className="flex flex-col gap-y-4">
      <div className="relative flex items-center">
        <Input type="name" placeholder="Name" ref={inputNameRef} required />
        <User size={20} className="absolute right-6" />
      </div>

      <div className="relative flex items-center">
        <Input type="email" placeholder="Email" ref={inputEmailRef} required />
        <MailIcon size={20} className="absolute right-6" />
      </div>

      <div className="relative flex items-center">
        <Textarea
          placeholder="Type message here..."
          ref={inputMessageRef}
          required
        />
        <MessageSquare size={20} className="absolute right-6 top-4" />
      </div>

      <Button className="flex max-w-[166px] items-center gap-x-1">
        Let&apos;s Talk
        <ArrowRightIcon size={20} className="ml-2" />
      </Button>
    </form>
  );
}
