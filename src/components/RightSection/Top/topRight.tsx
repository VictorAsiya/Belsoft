import person1 from "../../../assets/person1.jpg";
import person2 from "../../../assets/person2.jpg";
import { FaStar as Star } from "react-icons/fa";

function Right() {
  return (
    <div className="lg:flex sm:grid justify-between lg:h-[90%] sm:h-[190vh] lg:w-[90%] pt-9 overflow-y-scroll">
      <div className="lg:w-[42%] sm:w-[90%]  h-[100%]  flex flex-col justify-around text-[var(--text)]">
        <div className="h-[60%] w-[100%] bg-[#F7F4F4] rounded-xl flex flex-col justify-between py-3 pl-3 ">
          <p>Total User</p>
          <span className="flex items-end">
            <p className="font-semibold text-2xl">2K</p>
            <p className="text-[9px] pb-1">Users</p>
          </span>

          <span>
            <p className="text-[10px]">Monthly Subscribers</p>
            <div
              className="relative w-[90%] rounded-2xl h-3"
              style={{ backgroundColor: "var(--secondary" }}
            >
              <div className="absolute w-[80%] rounded-2xl h-3 bg-green-800"></div>
            </div>
          </span>
        </div>

        <div className="h-[25%] w-[100%] bg-[#F7F4F4] rounded-xl flex justify-between px-2 items-center">
          <div className="h-12 w-12 bg-[#FF9500] rounded-2xl"></div>
          <div
            className="flex flex-col h-[70%] w-[50%] justify-center items-center mr-2"
            style={{ backgroundColor: "#FCF8F8" }}
          >
            <div className="flex">
              <img src={person2} alt="" className="h-4 rounded-[50%]" />
              <img src={person1} alt="" className="h-4 rounded-[50%]" />
              <img src={person1} alt="" className="h-4 rounded-[50%]" />
              <p className="text-[10px]" style={{ color: "var(--text)" }}>
                +100
              </p>
            </div>
            <div>
              <p className="text-[12px]" style={{ color: "var(--text)" }}>
                Most rated
              </p>
              <span className="flex w-full justify-center items-center gap-1 text-amber-300">
                <Star />
                <Star />
                <Star />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:w-[55%] sm:w-[90%] h-[100%] rounded-xl flex flex-col justify-between pb-3">
        <div className="h-[25%] w-[100%] bg-[#F7F4F4] text-[var(--text)] rounded-xl flex flex-col justify-between py-2 pl-4 ">
          <p className="text-[11px]">Total Resolved Disputes</p>
          <span className="flex">
            <p className="font-semibold text-2xl">25%</p>
            <p>Disputes</p>
          </span>
        </div>
        <div className="h-[68%] w-[100%] pl-4 rounded-xl border-[3px] border-[#F7F4F4] flex flex-col justify-between">
          <p className="text-[11px]">Total Resolved Disputes</p>

          <span className="flex">
            <p className="font-semibold text-2xl">75%</p>
            <p>Disputes</p>
          </span>

          <table className="w-full h-[70%] text-sm cursor-pointer">
            <thead className="">
              <tr className="text-[10px] ">
                <th>User name</th>
                <th>Issues</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="hover:bg-gray-50">
                <td className=" flex justify-center gap-2 h-full items-center">
                  <img
                    src={person1}
                    alt=""
                    className="w-5 rounded-full object-cover"
                  />
                  <span className="text-[10px] w-[80px]">Janes Markus</span>
                </td>
                <td className="text-[10px]">
                  my task specia..
                </td>
                <td className="text-[10px]">Jan 14 2025</td>
              </tr>

              <tr className="hover:bg-gray-50">
                <td className=" flex justify-center gap-2 h-full items-center">
                  <img
                    src={person1}
                    alt=""
                    className="w-5 rounded-full object-cover"
                  />
                  <span className="text-[10px] w-[80px]">Ngozie Peter</span>
                </td>
                <td className="text-[10px]">
                  my task specia..
                </td>
                <td className="text-[10px]">Jan 14 2025 </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Right;
