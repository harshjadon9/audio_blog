import React from "react";
import Input from './Input';
import Btn1 from "./buttons";
import './css.css';


const Footer = () => {
    return (
        // dark:bg-[#090d16]
        <footer class="bg-[#0c121f] mt-44 pt-4 pb-8 xl:pt-8 shadow-xl relative rounded-t-3xl">
            <div className="relative w-full">
                <div className="h-fit lg:h-36 m-auto rounded-2xl px-10 lg:flex grid place-items-center -mt-16 w-10/12 self-center bg-[#4337c9]">
                    <div className="grow">
                        <h2 className="font-bold text-white text-left text-xl lg:text-2xl mt-5 lg:mt-0">Want product news and updates?</h2>
                        <h4 className="font-regular text-white opacity-50 text-sm text-left lg:text-l">Sign up for our newsletter to stay up to date.</h4>
                    </div>
                    <div className="grid">
                        <div className="grid lg:flex mt-5 lg:mt-0">
                            <Input name="John@gmail.com" classes={' lg:w-80 invalid:ring-red-500'} />
                            <Btn1 name={"Notify"} classes={'bg-[#6366f1] flex-2 !w-full lg:w-32 !text-white mt-2 lg:mt-0 place-self-center lg:mx-3 hover:bg-[#4044d7] lg:px-6'} />
                        </div>
                        <div>
                            <h4 className="font-regular mt-2 text-[#a29be5] text-left text-[12px] mb-5 lg:mb-0">We care about the protection of your data. Read our <span className="underline-offset-1 !text-white underline cursor-pointer"> Privacy Policy.</span></h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-gray-300 lg:px-20  text-sm pt-20 text-center lg:text-left">

                <div className="w-full justify-items-stretch grid lg:flex">
                    <div className="m-auto lg:m-0 w-60 lg:w-64">
                        <h1 className="text-2xl font-extrabold mb-5">Company name. </h1>
                        <h3 className="text-[#9397a1]">If you need to use a one-off width value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.</h3>
                    </div>
                    <span className="w-60"></span>
                    <div className="grid lg:flex grow">
                        <div className="grow">
                            <h2 className="text-xl font-extrabold mb-5 lg:mt-0 mt-10">Resources</h2>
                            <ul className="grid gap-y-0.5 lg:gap-y-2 mt-2 lg:mt:5">
                                <li><a href="#" className="hover:opacity-70 cursor-pointer">Help Center</a></li>
                                <li><a href="#" className="hover:opacity-70 cursor-pointer">Developers API</a></li>
                                <li><a href="#" className="hover:opacity-70 cursor-pointer">Our Blog</a></li>
                                <li><a href="#" className="hover:opacity-70 cursor-pointer">Status</a></li>
                                <li><a href="#" className="hover:opacity-70 cursor-pointer">Sitemap</a></li>
                            </ul>
                        </div>
                        <div className="grow">
                            <h2 className="text-xl font-extrabold mb-5 lg:mt-0 mt-10">Products</h2>
                            <ul className="grid gap-y-0.5 lg:gap-y-2 mt-2 lg:mt:5">
                                <li><a href="#" className="hover:opacity-70 cursor-pointer">Features</a></li>
                                <li><a href="#" className="hover:opacity-70 cursor-pointer">Integration</a></li>
                                <li><a href="#" className="hover:opacity-70 cursor-pointer">Documentation</a></li>
                                <li><a href="#" className="hover:opacity-70 cursor-pointer">Pricing</a></li>
                            </ul>
                        </div>
                        <div className="grow">
                            <h2 className="text-xl font-extrabold mb-5 lg:mt-0 mt-10">About</h2>
                            <ul className="grid gap-y-0.5 lg:gap-y-2 mt-2 lg:mt:5">
                                <li><a href="#" className="hover:opacity-70 cursor-pointer">Our Story</a></li>
                                <li><a href="#" className="hover:opacity-70 cursor-pointer">Company</a></li>
                                <li><a href="#" className="hover:opacity-70 cursor-pointer">Our Team</a></li>
                                <li><a href="#" className="hover:opacity-70 cursor-pointer">Work with us</a></li>
                            </ul>
                        </div>
                        <div className="grow">
                            <h2 className="text-xl font-extrabold mb-5 lg:mt-0 mt-10">Contact</h2>
                            <ul className="grid gap-y-0.5 lg:gap-y-2 mt-2 lg:mt:5">
                                <li className="m-auto lg:m-0">
                                    <a href="#" className="hover:opacity-70 cursor-pointer flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 my-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <p className="mx-2">The Scindia School,<br /> Gwalior 474008, India</p>
                                    </a>
                                </li>
                                <li className="my-3 m-auto lg:m-0">
                                    <a href="#" className="hover:opacity-70 cursor-pointer flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <p className="mx-2">Hello@company.com</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr className="border-1 border-white opacity-10 rounded-lg mb-10 mt-20 lg:mx-0 mx-10 " />
                
                <div className="text-gray-500 ">
                    <div className="grid lg:flex my-3 px-7">
                        <p className="mb-10 lg:mb-0">© 2022 Company name</p>
                        {/* <h3 className="mx-6 grow text-left">Made With ❤️ from India</h3> */}
                        <span className="grow"></span>
                        <div className="flex space-x-6 m-auto lg:m-0 self-end">
                            <a href="#">
                                <svg width="20" height="20" fill="currentColor" class="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z">
                                    </path>
                                </svg>
                            </a>
                            <a href="#">
                                <svg width="20" height="20" fill="currentColor" class="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z">
                                    </path>
                                </svg>
                            </a>
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200" viewBox="0 0 1792 1792">
                                    <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z">
                                    </path>
                                </svg>
                            </a>
                            <a href="#">
                                <svg width="20" height="20" fill="currentColor" class="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z">
                                    </path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="h-96"></div> */}
        </footer>

    )
}

export default Footer;