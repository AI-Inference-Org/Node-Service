export default function SideBar() {
  return (
    <div className="flex min-h-screen">
      <div className="bg-gradient-to-br from-[#6366F1] to-[#9333EA] p-6 md:p-8 lg:p-10 xl:p-12">
        <div className="flex items-center mb-8">
          <a href="#" className="flex items-center gap-2">
            <MountainIcon className="h-8 w-8 text-white" />
            <span className="text-xl font-semibold text-white">Acme Inc</span>
          </a>
        </div>
        <nav className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-white mb-3">General</h3>
            <div className="grid gap-3">
              <a
                href="#"
                className="flex items-center gap-3 rounded-md px-4 py-3 text-white hover:bg-[#7C3AED] transition-colors"
              >
                <HomeIcon className="h-6 w-6" />
                <span className="text-base font-medium">Home</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 rounded-md px-4 py-3 text-white hover:bg-[#7C3AED] transition-colors"
              >
                <LayoutDashboardIcon className="h-6 w-6" />
                <span className="text-base font-medium">Dashboard</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 rounded-md px-4 py-3 text-white hover:bg-[#7C3AED] transition-colors"
              >
                <CalendarIcon className="h-6 w-6" />
                <span className="text-base font-medium">Calendar</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-white mb-3">Projects</h3>
            <div className="grid gap-3">
              <a
                href="#"
                className="flex items-center gap-3 rounded-md px-4 py-3 text-white hover:bg-[#7C3AED] transition-colors"
              >
                <BriefcaseIcon className="h-6 w-6" />
                <span className="text-base font-medium">All Projects</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 rounded-md px-4 py-3 text-white hover:bg-[#7C3AED] transition-colors"
              >
                <FolderIcon className="h-6 w-6" />
                <span className="text-base font-medium">Ongoing</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 rounded-md px-4 py-3 text-white hover:bg-[#7C3AED] transition-colors"
              >
                <ClipboardIcon className="h-6 w-6" />
                <span className="text-base font-medium">Completed</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-white mb-3">Team</h3>
            <div className="grid gap-3">
              <a
                href="#"
                className="flex items-center gap-3 rounded-md px-4 py-3 text-white hover:bg-[#7C3AED] transition-colors"
              >
                <UsersIcon className="h-6 w-6" />
                <span className="text-base font-medium">Members</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 rounded-md px-4 py-3 text-white hover:bg-[#7C3AED] transition-colors"
              >
                <SlackIcon className="h-6 w-6" />
                <span className="text-base font-medium">Slack</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 rounded-md px-4 py-3 text-white hover:bg-[#7C3AED] transition-colors"
              >
                <MailIcon className="h-6 w-6" />
                <span className="text-base font-medium">Email</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-white mb-3">Settings</h3>
            <div className="grid gap-3">
              <a
                href="#"
                className="flex items-center gap-3 rounded-md px-4 py-3 text-white hover:bg-[#7C3AED] transition-colors"
              >
                <SettingsIcon className="h-6 w-6" />
                <span className="text-base font-medium">Account</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 rounded-md px-4 py-3 text-white hover:bg-[#7C3AED] transition-colors"
              >
                <LockIcon className="h-6 w-6" />
                <span className="text-base font-medium">Security</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 rounded-md px-4 py-3 text-white hover:bg-[#7C3AED] transition-colors"
              >
                <LogOutIcon className="h-6 w-6" />
                <span className="text-base font-medium">Logout</span>
              </a>
            </div>
          </div>
        </nav>
      </div>
      <div className="flex-1 p-6 md:p-8 lg:p-10 xl:p-12" />
    </div>
  );
}

function BriefcaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function ClipboardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  );
}

function FolderIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
    </svg>
  );
}

function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function LayoutDashboardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="7" height="9" x="3" y="3" rx="1" />
      <rect width="7" height="5" x="14" y="3" rx="1" />
      <rect width="7" height="9" x="14" y="12" rx="1" />
      <rect width="7" height="5" x="3" y="16" rx="1" />
    </svg>
  );
}

function LockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function LogOutIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  );
}

function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function SlackIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="3" height="8" x="13" y="2" rx="1.5" />
      <path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5" />
      <rect width="3" height="8" x="8" y="14" rx="1.5" />
      <path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5" />
      <rect width="8" height="3" x="14" y="13" rx="1.5" />
      <path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5" />
      <rect width="8" height="3" x="2" y="8" rx="1.5" />
      <path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5" />
    </svg>
  );
}

function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
