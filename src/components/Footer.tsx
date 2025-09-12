import { Heart } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-muted-foreground text-sm">
            <span>
              © {currentYear}{" "}
              <span className="font-semibold text-foreground">
                {personalInfo.name}
              </span>
              . All Rights Reserved.
            </span>

            {/* <span className="hidden md:inline">•</span> */}
          </div>
{/* ... */}
          <p className="text-sm text-muted-foreground/80">
            Crafting web experiences with passion and precision.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
