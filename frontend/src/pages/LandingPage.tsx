"use client";
import { MainNav } from "../Components/landingNav";
import Landing from "../Components/textEffect";
import { Button } from "../components/ui/button";
import Globe from "../Components/globe";
import Plugin from "../assets/simplify.svg";

export default function HomePage() {
  return (
    <div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="flex flex-col">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <MainNav className="mx-6" />
          </div>
        </div>
        <div className="tems-center relative flex justify-center">
          <div className="mx-auto flex flex-col  text-center md:flex-row md:space-x-6 md:text-left">
            <div className="max-w-2xl">
              {/* <h1 className="mb-4 mt-40 text-6xl font-bold"></h1> */}
              <Landing />
              <p className="mb-6 text-lg">
                Hedera AI Network automates the distribution of AI models by
                generating web apps, APIs, and plugins from AI inferences, while
                handling payments and infrastructure.
              </p>
              <Button size="lg" className="bg-[#062056] rounded-full">
                Get Started
              </Button>
            </div>
            <div className="flex h-[600px] w-[600px] justify-center md:mt-0 md:justify-start">
              <Globe />
            </div>
          </div>
        </div>
        {/* Create the brand names. All should be in gray in a single line */}
      </div>
      <div className="my-10 mt-20 text-center">
        <div className="flex flex-col items-center">
          <h1 className="mb-4 text-5xl font-bold">What we are doing?</h1>
          <p className="mb-10 max-w-[800px] text-center text-lg text-gray-700">
            We are developing a platform that automates AI solution distribution
            and management using Hedera’s blockchain technology.
          </p>
        </div>
        <div className="flex justify-center gap-10 align-middle">
          <div className="flex w-1/4 flex-col gap-4 rounded-2xl border border-gray-200 p-6 shadow-lg transition duration-300 ease-in-out hover:shadow-2xl">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXzknlsqG5Bm0ahfPbTnrGQdcJP1xY0wfQyg&s"
              width={100}
              height={100}
              alt="ice loid"
              className="self-center"
            />
            <h1 className="mb-2 text-3xl font-bold">Easy Web App Generation</h1>
            <p className="text-lg text-gray-700">
              Streamlining payroll, grants, and contractor payments.Eliminating
              manual processes and reducing human error
            </p>
            <Button
              size="lg"
              variant="outline"
              className="hover:bg-[#062056] hover:text-white"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex w-1/4 flex-col gap-4 rounded-2xl border border-gray-200 p-6 shadow-lg transition duration-300 ease-in-out hover:shadow-2xl">
            <img
              src="https://static-00.iconduck.com/assets.00/hedera-hashgraph-hbar-icon-2048x2046-l58d6we4.png"
              width={100}
              height={100}
              alt="ice loid"
              className="self-center"
            />
            <h1 className="mb-2 text-3xl font-bold">
              AI Inference Deployments
            </h1>
            <p className="text-lg text-gray-700">
              Ensuring secure and transparent transactions. Enabling multi-token
              support and built-in currency conversion
            </p>
            <Button
              size="lg"
              variant="outline"
              className="hover:bg-[#062056] hover:text-white"
            >
              Get In Touch
            </Button>
          </div>
          <div className="flex w-1/4 flex-col gap-4 rounded-2xl border border-gray-200 p-6 shadow-lg transition duration-300 ease-in-out hover:shadow-2xl">
            <img
              src={Plugin}
              width={100}
              height={100}
              alt="ice loid"
              className="self-center"
            />
            <h1 className="mb-2 text-3xl font-bold">
              Plugin Extension Genertion
            </h1>
            <p className="text-lg text-gray-700">
              Providing smart notifications for timely payments. Offering
              scalable solutions from small teams to large enterprises
            </p>
            <Button
              size="lg"
              variant="outline"
              className="hover:bg-[#062056] hover:text-white"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
