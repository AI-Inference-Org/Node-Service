import Section from "../types/sideBarTypes";
import { Button } from "../components/ui/button";

interface sectionProps {
  section: Section[];
}

export default function SideBar({ section }: sectionProps) {
  return (
    <div className="flex min-h-screen">
      <div className="bg-black p-6 md:p-8 lg:p-10 xl:p-12 w-1/3">
        <nav className="space-y-6">
          {section.map((section, index) => (
            <div key={index}>
              <h3 className="text-sm font-medium text-white mb-3">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="flex items-center gap-3 rounded-md px-4 py-3 text-white hover:bg-[#7C3AED] transition-colors"
                    >
                      <link.icon className="h-6 w-6" />
                      <span className="text-base font-medium">
                        {link.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
        <div className="mt-8 bg-white rounded-md p-6">
          <h3 className="text-lg font-semibold text-black mb-3">
            Get in Touch
          </h3>
          <p className="text-black mb-4">
            Have a question or need help? Contact our support team.
          </p>
          <Button
            variant="outline"
            className="w-full border-black text-black hover:bg-[#7C3AED]"
          >
            Contact Support
          </Button>
        </div>
      </div>

      {/* <div className="flex-1 p-6 md:p-8 lg:p-10 xl:p-12" /> */}
    </div>
  );
}
