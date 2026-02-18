import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { languageMeta, useLanguage } from "@/components/LanguageProvider";
import { Languages, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage, availableLanguages } = useLanguage();
  const languages = availableLanguages.map((code) => languageMeta[code]);
  const currentLanguage = languages.find((lang) => lang.code === language);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="group border-primary/20 bg-background/80 shadow-card transition-all duration-500 hover:bg-primary hover:text-primary-foreground hover:shadow-glow"
        >
          <Languages className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
          <span className="hidden sm:inline">{currentLanguage?.flag}</span>
          <span className="ml-1 hidden md:inline">{currentLanguage?.name}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-48 border-primary/20 bg-background/95 p-2" align="end">
        <div className="space-y-1">
          {languages.map((lang) => (
            <Button
              key={lang.code}
              variant="ghost"
              className={cn(
                "w-full justify-start text-sm transition-all duration-300",
                language === lang.code
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-primary/10"
              )}
              onClick={() => {
                setLanguage(lang.code);
                setOpen(false);
              }}
            >
              <span className="mr-3">{lang.flag}</span>
              <span className="flex-1 text-left">{lang.name}</span>
              {language === lang.code && <Check className="ml-2 h-4 w-4" />}
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
