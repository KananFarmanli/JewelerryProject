import { Link } from "react-router-dom";
import {fb, lin, inst, tw, yt} from "../assets"

export default function Footer() {
  return (
    <div className=" bg-cremaDark border-t-4 border-b-[20px] border-crema py-6">
      <div className="wrapper flex flex-col justify-between gap-4">
        <div className="flex flex-col justify-start items-center gap-2 md:flex-row sm:gap-4 ">
          <div className="py-2 flex flex-col sm:flex-row items-center sm:items-start justify-start gap-4 xl:gap-12 sm:gap-8 grow">
            <div className="flex flex-col gap-3 items-center sm:items-start">
              <h2 className="text-primary font-serif text-sm font-semibold">
                CUSTOMER SERVICES
              </h2>
              <menu className="flex flex-col items-center sm:items-start justify-center gap-2 text-xs text-info font-light">
                <li>
                  <Link to="/">Contact Us</Link>
                </li>
                <li>
                  <Link to="/">Track your Order</Link>
                </li>
                <li>
                  <Link to="/">Shipping & Returns</Link>
                </li>
                <li>
                  <Link to="/">Frequently Asked Questions</Link>
                </li>
                <li>
                  <Link to="/">Schedule an appointment</Link>
                </li>
              </menu>
            </div>
            <div className="flex flex-col gap-3 items-center sm:items-start">
              <h2 className="text-primary font-serif text-sm font-semibold">
                ABOUT US
              </h2>
              <menu className="flex flex-col items-center sm:items-start justify-center gap-2 text-xs text-info font-light">
                <li>
                  <Link to="/">Origins</Link>
                </li>
                <li>
                  <Link to="/">Our Purpose</Link>
                </li>
                <li>
                  <Link to="/">Careers</Link>
                </li>
                <li>
                  <Link to="/">Sustainability</Link>
                </li>
                <li>
                  <Link to="/">Giving Back</Link>
                </li>
              </menu>
            </div>
            <div className="flex flex-col gap-3 items-center sm:items-start">
              <h2 className="text-primary font-serif text-sm font-semibold">
                MATERIAL CARE
              </h2>
              <menu className="flex flex-col items-center sm:items-start justify-center gap-2 text-xs text-info font-light">
                <li>
                  <Link to="/">Jewelry Repair</Link>
                </li>
                <li>
                  <Link to="/">Ring Sizing</Link>
                </li>
                <li>
                  <Link to="/">Metal Allergy Resources</Link>
                </li>
                <li>
                  <Link to="/">Styling Tips</Link>
                </li>
              </menu>
            </div>
            <div className="flex flex-col gap-3 items-center sm:items-start">
              <h2 className="text-primary font-serif text-sm font-semibold">
                MAIN LOCATIONS
              </h2>
              <menu className="flex flex-col items-center sm:items-start justify-center gap-2 text-xs text-info font-light">
                <li>
                  <Link to="/">Moscow</Link>
                </li>
                <li>
                  <Link to="/">Rostov</Link>
                </li>
                <li>
                  <Link to="/">Saint Petersburg</Link>
                </li>
                <li>
                  <Link to="/">Ekaterinburg</Link>
                </li>
              </menu>
            </div>
          </div>
          <div className="w-full max-w-64 flex flex-col gap-3 text-center md:text-right">
            <h2 className="font-semibold ">You can be one step ahead.</h2>
            <p className=" text-xs text-info font-light">
              Sign up to hear about our updates on the dot.
            </p>
            <form action="" className="flex justify-center text-xs">
              <input
                className="grow py-2 px-3"
                type="text"
                placeholder="Your email address"
              />
              <button
                className="bg-white px-2 text-secondary hover:bg-black transition-all hover:text-white"
                type="button"
              >
                SIGN UP
              </button>
            </form>
            <div className=" flex items-center justify-around">
              <i className="w-[20px] h-[20px]">
                <a href="">
                  <img src={inst} alt="" />
                </a>
              </i>
              <i className="w-[20px] h-[20px]">
                <a href="">
                  <img src={tw} alt="" />
                </a>
              </i>
              <i className="w-[20px] h-[20px]">
                <a href="">
                  <img src={fb} alt="" />
                </a>
              </i>
              <i className="w-[20px] h-[20px]">
                <a href="">
                  <img src={yt} alt="" />
                </a>
              </i>
              <i className="w-[20px] h-[20px]">
                <a href="">
                  <img src={lin} alt="" />
                </a>
              </i>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center sm:justify-between gap-4 sm:gap-12 text-[10px] text-secondary font-light w-full sm:flex-row  md:justify-start">
          <div className="whitespace-nowrap">
            &#169; Valantis jewelerry LLC 2024.
          </div>
          <nav className=" mx-auto sm:w-full ">
            <menu className="w-full flex flex-col md:max-w-fit items-center justify-end gap-2 sm:gap-4  sm:flex-row md:items-start">
              <li>
                <Link to="/">PRIVACY POLICY </Link>
              </li>
              <li>
                <Link to="/">TERMS OF USE</Link>
              </li>
              <li>
                <Link to="/">SITEMAP</Link>
              </li>
              <li>
                <Link to="/"> TAKE ME AS FRONT EDN DEVELOPER</Link>
              </li>
              <li>
                <Link to="/">COOKIES</Link>
              </li>
            </menu>
          </nav>
        </div>
      </div>
    </div>
  );
}
