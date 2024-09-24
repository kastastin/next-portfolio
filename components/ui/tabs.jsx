"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

const TabsVariantContext = React.createContext("about");

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef(
  ({ className, variant = "about", ...props }, ref) => {
    const baseStyles =
      "rounded-[30px] p-1 text-muted-foreground dark:md:bg-secondary xl:bg-white mx-auto grid place-content-center dark:border-none";

    const variants = {
      about: "w-full sm:max-w-[520px] sm:grid-cols-3 sm:border mb-12 xl:mb-8",
      projectsPage:
        "mb-12 size-full md:grid-cols-4 md:border lg:max-w-screen-sm",
    };

    return (
      <TabsVariantContext.Provider value={variant}>
        <TabsPrimitive.List
          ref={ref}
          className={cn(baseStyles, variants[variant], className)}
          {...props}
        />
      </TabsVariantContext.Provider>
    );
  }
);
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef(
  ({ className, variant, ...props }, ref) => {
    const contextVariant = React.useContext(TabsVariantContext);
    const appliedVariant = variant || contextVariant;

    const baseStyles =
      "inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-1.5 text-base font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-sm h-[48px] w-[162px]";

    const variants = {
      about: "xl:w-auto",
      projectsPage: "uppercase md:w-auto",
    };

    return (
      <TabsPrimitive.Trigger
        ref={ref}
        className={cn(baseStyles, variants[appliedVariant], className)}
        {...props}
      />
    );
  }
);
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-lg",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
