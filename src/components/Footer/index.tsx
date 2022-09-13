// @ts-ignore
import { UilGithub } from '@iconscout/react-unicons';
import * as Separator from '@radix-ui/react-separator';
import Link from 'next/link';
import SubscribeForm from './Subscribe';

const Footer = () => {
  return (
    <div id="footer" className="fixed bg-[#F7FAFC] bottom-0 w-screen">
      <div className="w-screen bg-indigo-500 h-2.5" />
      <div className="w-11/12 lg:w-[calc(100vw*(10.5/12))] mx-auto">
        <div className="space-y-2.5 py-10 lg:py-12">
          <h2 className="tracking-wide leading-relaxed font-bold text-xl md:text-2xl text-center">
            Sign up for updates. Join Now!
          </h2>
          <h4 className="text-dark-primary font-medium text-sm md:text-base text-center pb-4">
            You can unsubscribe anytime.
          </h4>
          <SubscribeForm />
        </div>
        <Separator.Root
          orientation="horizontal"
          className="h-[1px] w-full bg-slate-400/50"
        />
        <div className="py-10 lg:py-12 space-y-4 lg:space-y-6">
          <h1 className="font-semibold text-dark-primary text-2xl tracking-wide">
            Raiyan Sarker Blog
          </h1>
          <div>
            <p className="text-sm text-dark-accent">
              This blog is created to share my knowledge and
            </p>
            <p className="text-sm text-dark-accent">
              experience of my life. Hope you find these articles enjoing and
              helpful.
            </p>
          </div>
          <div className="flex flex-row space-x-3 lg:space-x-5 items-center">
            <Link href="/about">
              <a className="text-bold text-sm underline__hover__link text-black">
                About
              </a>
            </Link>
            <Link href="/privacy-policy">
              <a className="text-bold text-sm underline__hover__link text-black">
                Privacy Policy
              </a>
            </Link>
            <Link href="/disclaimer">
              <a className="text-bold text-sm underline__hover__link text-black">
                Disclaimer
              </a>
            </Link>
            <Link href="//status.raiyansarker.com">
              <a className="text-bold text-sm underline__hover__link text-black">
                About
              </a>
            </Link>
            <Link href="/contact">
              <a className="text-bold text-sm underline__hover__link text-black">
                Contact
              </a>
            </Link>
          </div>
        </div>
        <Separator.Root
          orientation="horizontal"
          className="h-[1px] w-full bg-slate-400/50"
        />
        <div className="py-5 lg:py-8">
          <div className="flex flex-row justify-between items-center">
            <h4 className="hidden md:block text-slate-500 italic text-sm">
              &copy;{new Date().getFullYear()} <b>Raiyan Sarker</b>, All rights
              reserved.
            </h4>
            <h4 className="md:hidden text-slate-500 italic text-sm">
              &copy;{new Date().getFullYear()} <b>Raiyan Sarker</b>.
            </h4>
            <div className="flex flex-row justify-center items-center space-x-2">
              <Link href="https://github.com/raiyan_sarker_">
                <a className="hover:ring-1 hover:ring-dark-accent focus:ring-1 focus:ring-dark-accent outline-none rounded-full">
                  <UilGithub className="h-[1.6rem] w-[1.6rem] text-dark-primary" />
                </a>
              </Link>
              <Link href="https://github.com/raiyan_sarker_">
                <a className="hover:ring-1 p-0.5 hover:ring-dark-accent focus:ring-1 focus:ring-dark-accent outline-none rounded-full">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    className="text-dark-primary h-[1.4rem] w-[1.4rem]"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                      stroke="none"
                    />
                  </svg>
                </a>
              </Link>
              <Link href="https://github.com/raiyan_sarker_">
                <a className="hover:ring-1 hover:ring-dark-accent focus:ring-1 focus:ring-dark-accent outline-none rounded-full p-0.5">
                  <svg
                    viewBox="0 0 48 48"
                    xmlSpace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-dark-primary"
                  >
                    <circle cx={24} cy={24} fill="currentColor" r={24} />
                    <path
                      d="M36.8 15.4c-.9.5-2 .8-3 .9 1.1-.7 1.9-1.8 2.3-3.1-1 .6-2.1 1.1-3.4 1.4-1-1.1-2.3-1.8-3.8-1.8-2.9 0-5.3 2.5-5.3 5.7 0 .4 0 .9.1 1.3-4.4-.2-8.3-2.5-10.9-5.9-.5.8-.7 1.8-.7 2.9 0 2 .9 3.7 2.3 4.7-.9 0-1.7-.3-2.4-.7v.1c0 2.7 1.8 5 4.2 5.6-.4.1-.9.2-1.4.2-.3 0-.7 0-1-.1.7 2.3 2.6 3.9 4.9 3.9-1.8 1.5-4.1 2.4-6.5 2.4-.4 0-.8 0-1.3-.1 2.3 1.6 5.1 2.6 8.1 2.6 9.7 0 15-8.6 15-16.1v-.7c1.2-1 2.1-2 2.8-3.2z"
                      fill="white"
                    />
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
