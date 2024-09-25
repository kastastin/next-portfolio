"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";

const CTASection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-tertiary py-24 dark:bg-secondary/40">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="h2 mb-8 max-w-xl text-center">{t("ctaTitle")}</h2>

          <Link href="/contact">
            <Button>{t("ctaBtn")}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
