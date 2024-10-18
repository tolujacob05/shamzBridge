"use client";

import { useEffect, useRef } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useState } from "react";
import Hamburger from "hamburger-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    const previous = scrollY.getPrevious();

    if (latest > (previous as number) && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      // Check if navRef is defined and if the click is outside of it
      if (
        navRef.current &&
        !(event.target instanceof Node && navRef.current.contains(event.target))
      ) {
        setIsNavOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef]);

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    const previous = scrollY.getPrevious();

    if (latest > (previous as number) && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <div className="relative">
      <div className="absolute right-0 w-28 h-28 md:w-40 md:h-40 rounded-l-full top-0 bg-[#1985dd] blur-3xl"></div>
      <motion.nav
        ref={navRef}
        variants={{
          visible: {
            x: "-50%",
            y: 0,
            origin: "center",
            opacity: 1,
            transition: {
              duration: 0.5,
            },
          },
          hidden: {
            x: "-50%",
            y: -100,
            opacity: 0,
            transition: {
              duration: 0.5,
            },
          },
        }}
        initial={{
          x: "-50%",
          y: -100,
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={cn(
          "fixed left-1/2 flex items-center justify-between w-11/12 max-w-screen-xl  px-6 py-3 lg:py-2  bg-white bg-opacity-40 shadow-md z-50  backdrop-blur-md rounded-b-3xl",
          { isNavOpen: "justify-center" } // Center the navigation when it's closed
        )}
      >
        <div className="h-full">
          <Link
            href="/"
            className={cn("flex flex-col items-center content-start", {
              "absolute top-0 left-0 px-6 py-4": isNavOpen,
              "w-auto": !isNavOpen,
            })}
            prefetch={false}
          >
            <div className="space-y-2 w-60 md:w-96 flex flex-col">
              <p className="relative top-2 text-pb md:text-xl text-black font-bold">
                SHAMZBRIDGE{" "}
                <span className="text-[#FF6347] font-light">CONSULT</span>
              </p>
              <p className="text-[10px] self-center font-thin">
                ... your trusted ally
              </p>
            </div>
          </Link>
          <div className="absolute right-5 top-3 lg:hidden">
            <Hamburger
              toggled={isNavOpen}
              rounded
              toggle={setIsNavOpen}
              size={28}
              label="Show menu"
              color="#1985dd"
            />
          </div>
        </div>

        <nav className=" flex w-full justify-center items-center">
          <section className="flex lg:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                transition={{ duration: 1, ease: "easeInOut" }}
                className={cn({ "": isNavOpen, hidden: !isNavOpen })}
              >
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{
                    opacity: isNavOpen ? 1 : 0,
                    y: isNavOpen ? 0 : -20,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <ul className="flex flex-col items-center gap-14 justify-between pt-28 pb-6 min-h-64">
                    <Link href={"/"}>
                      <Button onClick={() => setIsNavOpen(false)}>HOME</Button>
                    </Link>

                    <Link href="/about">
                      <Button onClick={() => setIsNavOpen(false)}>
                        ABOUT US
                      </Button>
                    </Link>

                    <Link href="/offer">
                      <Button onClick={() => setIsNavOpen(false)}>
                        SERVICES
                      </Button>
                    </Link>
                  </ul>

                  <div className="pt-20">
                    <p className="text-slate-600 text-center py-6">
                      Quick Connect
                    </p>

                    <ul className="flex items-center justify-center border gap-14 px-6 py-4 border-[#e5eef6] bg-[#c8dded]/50 rounded-lg w-full">
                      <li>
                        <a href="https://www.instagram.com/shamzbridge">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 256 256"
                          >
                            <g fill="none">
                              <rect
                                width="256"
                                height="256"
                                fill="url(#skillIconsInstagram0)"
                                rx="60"
                              />
                              <rect
                                width="256"
                                height="256"
                                fill="url(#skillIconsInstagram1)"
                                rx="60"
                              />
                              <path
                                fill="#fff"
                                d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396s-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413s.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5s6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355s22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334s-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334"
                              />
                              <defs>
                                <radialGradient
                                  id="skillIconsInstagram0"
                                  cx="0"
                                  cy="0"
                                  r="1"
                                  gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stop-color="#fd5" />
                                  <stop offset=".1" stop-color="#fd5" />
                                  <stop offset=".5" stop-color="#ff543e" />
                                  <stop offset="1" stop-color="#c837ab" />
                                </radialGradient>
                                <radialGradient
                                  id="skillIconsInstagram1"
                                  cx="0"
                                  cy="0"
                                  r="1"
                                  gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stop-color="#3771c8" />
                                  <stop offset=".128" stop-color="#3771c8" />
                                  <stop
                                    offset="1"
                                    stop-color="#60f"
                                    stop-opacity="0"
                                  />
                                </radialGradient>
                              </defs>
                            </g>
                          </svg>
                        </a>
                      </li>

                      <li>
                        <a href="https://x.com/shamzbridge">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 128 128"
                          >
                            <path d="M75.916 54.2L122.542 0h-11.05L71.008 47.06L38.672 0H1.376l48.898 71.164L1.376 128h11.05L55.18 78.303L89.328 128h37.296L75.913 54.2ZM60.782 71.79l-4.955-7.086l-39.42-56.386h16.972L65.19 53.824l4.954 7.086l41.353 59.15h-16.97L60.782 71.793Z" />
                          </svg>
                        </a>
                      </li>

                      <li>
                        <a href="https://www.linkedin.com/company/shamzbridge-consult">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 256 256"
                          >
                            <g fill="none">
                              <rect
                                width="256"
                                height="256"
                                fill="#fff"
                                rx="60"
                              />
                              <rect
                                width="256"
                                height="256"
                                fill="#0a66c2"
                                rx="60"
                              />
                              <path
                                fill="#fff"
                                d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4"
                              />
                            </g>
                          </svg>
                        </a>
                      </li>

                      <li>
                        <a href="https://www.youtube.com/channel/UCCT69YW8WVJeEbjPEtomkQg">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 512 116"
                          >
                            <path
                              fill="#f00"
                              d="M159.89 17.93a20.55 20.55 0 0 0-14.471-14.47C132.73 0 81.666 0 81.666 0S30.6.105 17.913 3.565a20.55 20.55 0 0 0-14.47 14.47c-3.838 22.545-5.327 56.896.105 78.538a20.55 20.55 0 0 0 14.47 14.47c12.688 3.46 63.753 3.46 63.753 3.46s51.065 0 63.753-3.46a20.55 20.55 0 0 0 14.47-14.47c4.047-22.576 5.295-56.906-.105-78.642"
                            />
                            <path
                              fill="#fff"
                              d="m65.413 81.788l42.362-24.536l-42.362-24.537z"
                            />
                            <path
                              fill="#282828"
                              d="M491.237 33.24c5.557 0 9.751 1.048 12.687 3.04q4.404 2.989 6.292 9.438c1.258 4.299 1.782 10.17 1.782 17.72v12.269H485.05v3.774l.42 10.381c.314 2.307.839 3.985 1.677 5.033c.84 1.049 2.202 1.573 3.985 1.573c2.412 0 4.09-.943 4.928-2.83c.944-1.888 1.363-5.034 1.468-9.333l13.946.839c.105.629.105 1.468.105 2.516c0 6.606-1.783 11.535-5.453 14.785s-8.703 4.928-15.309 4.928c-7.969 0-13.526-2.516-16.672-7.444C471 95 469.322 87.24 469.322 76.86V64.172c.356-17.825 3.491-30.88 21.915-30.932m-193.88 1.363v52.533c0 3.146.314 5.453 1.048 6.816c1.489 2.915 5.348 2.17 7.445.734a8.4 8.4 0 0 0 2.831-3.25V34.602h16.043v71.617h-12.583l-1.363-8.808h-.314c-3.46 6.606-8.599 9.961-15.414 9.961c-10.49-.026-13.057-7.584-13.668-15.26l-.04-.541a65 65 0 0 1-.133-3.492V34.603zm82.732 0v52.533c0 3.146.314 5.453 1.048 6.816c1.49 2.915 5.348 2.17 7.445.734a8.4 8.4 0 0 0 2.831-3.25V34.602h16.043v71.617h-12.583l-1.363-8.808h-.314c-3.46 6.606-8.599 9.961-15.414 9.961c-10.49-.026-13.057-7.584-13.668-15.26l-.04-.541a65 65 0 0 1-.133-3.492V34.603zM250.8 33.24c5.243 0 9.542 1.048 12.688 3.25c3.145 2.202 5.557 5.558 7.025 10.171c1.468 4.614 2.202 10.8 2.202 18.455v10.38c0 7.655-.734 13.737-2.202 18.35c-1.468 4.615-3.775 7.97-7.025 10.172c-3.25 2.097-7.655 3.25-13.107 3.25c-5.663.105-10.067-1.048-13.317-3.145c-3.25-2.202-5.558-5.558-6.92-10.171c-1.364-4.614-1.993-10.696-1.993-18.35V65.22c0-7.655.734-13.946 2.307-18.56c1.573-4.718 3.984-8.074 7.34-10.17c3.355-2.098 7.654-3.251 13.002-3.251m181.822-28.73v37.748h.105c1.468-2.726 3.355-4.928 5.977-6.606a14.8 14.8 0 0 1 8.283-2.516c3.88 0 6.816 1.048 9.018 3.04c2.202 2.098 3.775 5.348 4.718 9.857c.915 4.368 1.435 10.409 1.467 18.027l.001.743v11.324c0 10.59-1.363 18.455-3.88 23.488c-2.62 5.033-6.605 7.55-12.058 7.55c-3.04 0-5.767-.734-8.283-2.097a14.7 14.7 0 0 1-5.35-5.392l-.208-.376h-.314l-1.678 6.816h-13.317V4.51zm-64.173 3.67V21.18h-15.938v85.039h-15.728V21.181H320.74V8.18zm-172.909 0l.01.04c.153.681 2.273 10.106 4.605 21.087l.184.87l.278 1.315l.186.883l.093.443l.186.888l.093.445l.185.891l.27 1.303c1.575 7.604 3.078 15.23 3.977 20.698h.42c.861-4.905 2.112-11.182 3.446-17.591l.35-1.674q.263-1.258.53-2.512l.274-1.297a2039 2039 0 0 1 5.597-25.444l.03-.135l.048-.21h16.043l-18.56 66.165v31.771h-15.833V74.448h-.105l-18.35-66.27zm54.945 36.175c-2.202 0-3.67 1.154-4.613 3.566s-1.363 6.081-1.363 11.22v22.334c0 5.243.419 9.122 1.258 11.43q1.259 3.46 4.718 3.46q3.303 0 4.719-3.46c.944-2.308 1.363-6.187 1.363-11.43V59.139c0-5.138-.42-8.913-1.363-11.22c-.944-2.411-2.517-3.565-4.719-3.565m184.968 2.098c-1.278 1.18-2.187 2.635-2.728 4.454l-.103.369v40.684c1.3 2.202 3.146 3.67 6.396 3.775q2.516 0 4.09-1.887q1.572-1.887 2.201-6.292q.605-4.227.629-11.644v-9.956c0-5.662-.21-9.961-.524-13.002c-.42-3.041-.943-5.243-1.887-6.501c-1.825-2.622-5.767-2.59-8.074 0m55.47-2.412q-2.675.157-3.776 1.573c-.838 1.048-1.363 2.621-1.677 4.928c-.309 2.26-.415 10.16-.42 10.476v5.148h11.744v-4.54v.087c-.007 1.587-.04-.921-.112-4l-.01-.414c-.066-2.706-.162-5.723-.297-6.757c-.315-2.412-.84-4.09-1.678-5.033c-.839-.944-2.097-1.468-3.775-1.468"
                            />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </section>
        </nav>

        <div className="items-center gap-x-2 hidden lg:flex">
          <Link href={"/"}>
            <Button variant={"link"} className="px-6">
              HOME
            </Button>
          </Link>
          <Link href="/about">
            <Button variant={"link"} className="px-6">
              ABOUT US
            </Button>
          </Link>
          <Link href="/offer">
            <Button variant={"link"} className="px-6">
              SERVICES
            </Button>
          </Link>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
