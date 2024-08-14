import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";

function AIApplicationForm() {
  return (
    <>
      <div className="flex-1 p-6 md:p-8 lg:p-10 xl:p-12 bg-gradient-to-br from-[#6366F1] to-[#9333EA] flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="grid grid-cols-3 gap-4 mb-6">
            <Card className="bg-[#7C3AED] text-white">
              <CardContent>
                <div className="text-2xl font-bold">125</div>
                <div className="text-sm">Form Submissions</div>
              </CardContent>
            </Card>
            <Card className="bg-[#7C3AED] text-white">
              <CardContent>
                <div className="text-2xl font-bold">98%</div>
                <div className="text-sm">Conversion Rate</div>
              </CardContent>
            </Card>
            <Card className="bg-[#7C3AED] text-white">
              <CardContent>
                <div className="text-2xl font-bold">$12,345</div>
                <div className="text-sm">Revenue Generated</div>
              </CardContent>
            </Card>
          </div>
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-xl text-white">Sign Up</CardTitle>
              <CardDescription className="text-white">
                Enter your information to create an account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name" className="text-white">
                      First name
                    </Label>
                    <Input
                      id="first-name"
                      placeholder="Lee"
                      required
                      className="bg-[#7C3AED] text-white placeholder:text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name" className="text-white">
                      Last name
                    </Label>
                    <Input
                      id="last-name"
                      placeholder="Robinson"
                      required
                      className="bg-[#7C3AED] text-white placeholder:text-white"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    className="bg-[#7C3AED] text-white placeholder:text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-white">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    className="bg-[#7C3AED] text-white placeholder:text-white"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#9333EA] hover:bg-[#7C3AED] text-white"
                >
                  Create an account
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-white text-white hover:bg-[#7C3AED]"
                >
                  Sign up with GitHub
                </Button>
              </div>
              <div className="mt-4 text-center text-sm text-white">
                Already have an account?{" "}
                <a href="#" className="underline">
                  Sign in
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

export default AIApplicationForm;
