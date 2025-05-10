import person1 from "../../../assets/person1.jpg";
import { FaLocationDot } from "react-icons/fa6";

function BottomLeft() {
  return (
    <div className="w-[98%] h-[98%] flex flex-col justify-center">
      <div className="flex flex-col h-[20%] w-[100%]">
        <p className="text-[#070F65] font-semibold pl-3">Job Oversight</p>
        <span className="w-95% flex justify-around items-center h-[71px]">
          <input
            type="text"
            placeholder="search for Jobs"
            className="border-[1.5px] border-[#123456] h-[30px] pl-3 rounded-[10px]"
          />
          <button className="border-[1.5px] border-[#123456] h-[30px] px-3 rounded-[10px]">
            filter
          </button>
          <select
            name=""
            id=""
            className="border-[1.5px] border-[#123456] h-[30px] px-2 rounded-[10px] w-18"
          >
            <option value="">Date</option>
            <option value="">Last 1 week</option>
            <option value="">Last 2 week</option>
            <option value="">Last Month</option>
            <option value="">Last 5 Months</option>
          </select>
          <select
            name=""
            id=""
            className="border-[1.5px] border-[#123456] h-[30px] px-2 rounded-[10px] w-18"
          >
            <option value="">Jobs</option>
            <option value="">Technological Jobs</option>
            <option value="">Business Jobs</option>
            <option value="">Handy Jobs</option>
            <option value="">Scientific Jobs</option>
            
          </select>
        </span>
      </div>

      <div className="flex flex-col h-[100%] w-[100%]">
        <div className="flex flex-col justify-around h-[100%] gap-3">
          <div className="pl-2 text-[var(--text)] flex flex-col gap-.5 ">
            <span className="flex items-center gap-1">
              <img src={person1} alt="" className="h-4 rounded-[50%]" />
              <p className="text-[10px]">Mark Zuckerberg</p>
            </span>
            <span className="flex flex-col gap-1">
              <h3 className="font-semibold">
                Install Security Cameras for TechHub
              </h3>
              <p className="text-[11px] pl-3">Budget: N4000</p>
              <p className="text-[9px] opacity-60 pt-1">
                Lorem ywydh dshsd shd ip corrupti totam id fuga, dolorem
                reprehenderit unde expedita error rerum iusto dicta sequi ab
                omnis, pariatur modi a officia nam minus.
              </p>
            </span>
            <article>
              <p className="text-[10px] text-green-800 font-semibold">
                View More
              </p>
              <span className="flex items-center text-[10px] ">
                <FaLocationDot />
                <p>Lagos, Nigeria</p>
              </span>
            </article>
          </div>

          <div className="pl-2 text-[var(--text)] flex flex-col gap-.5">
            <span className="flex items-center gap-1">
              <img src={person1} alt="" className="h-4 rounded-[50%]" />
              <p className="text-[10px]">Mark Zuckerberg</p>
            </span>
            <span className="flex flex-col gap-1">
              <h3 className="font-semibold">
                Install Security Cameras for TechHub
              </h3>
              <p className="text-[11px] pl-3">Budget: N4000</p>
              <p className="text-[9px] opacity-60 pt-1">
                Lorem ywydh dshsd shd ip corrupti totam id fuga, dolorem
                reprehenderit unde expedita error rerum iusto dicta sequi ab
                omnis, pariatur modi a officia nam minus.
              </p>
            </span>
            <article>
              <p className="text-[10px] text-green-800 font-semibold">
                View More
              </p>
              <span className="flex items-center text-[10px] ">
                <FaLocationDot />
                <p>Lagos, Nigeria</p>
              </span>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomLeft;