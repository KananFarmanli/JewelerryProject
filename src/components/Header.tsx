import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className=" border-crema bg-cremaLight  flex flex-col fixed w-full z-10">
      <div className="bg-black h-6 flex items-center text-white text-xs justify-center">
        <p>Some advertisement like -50% discount</p>
      </div>
      <div className=" border-b-2 border-x-2 border-crema grow">
        <div className="wrapper   ">
          <div className="flex flex-col items-center justify-center py-2">
            <h1 className="font-serif text-2xl  ">Valantis jewelerry</h1>
            <p className="text-tertiary text-sm font-serif ">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="flex items-center justify-center py-2 text-sm gap-10 font-light h-[56px]">
            <menu className="flex items-center justify-center py-2 gap-10 text-primary ">
              <li className=" transition-all hover:border-b-[1px] hover:border-primary">
                <Link to={"/"}>Rings</Link>
              </li>
              <li className=" transition-all hover:border-b-[1px] hover:border-primary">
                <Link to={"/"}>Necklaces</Link>
              </li>
              <li className=" transition-all hover:border-b-[1px] hover:border-primary">
                <Link to={"/"}>Earings</Link>
              </li>
            </menu>
          </div>
        </div>
      </div>
    </header>
  );
}
