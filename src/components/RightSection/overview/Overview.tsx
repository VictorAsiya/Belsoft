import person1 from "../../../assets/person1.jpg";
import person2 from "../../../assets/person2.jpg";
import { FaStar as Star } from "react-icons/fa";
import AccountManagement from "../Table/table";
import BottomLeft from "../bottomLeft";
import Right from "../Top/topRight";
import { RevenueOverview } from "../Top/topLeft";

function Overview() {
  return (
    <div
      className="lg:h-[98%] w-full flex flex-col rounded-[20px]"
      style={{ backgroundColor: "#F7F4F4" }}
    >
      <h3 className="p-6 pt-2 h-[5%]">Overview</h3>

      <div className="flex flex-col lg:flex-row h-auto lg:h-[100%] lg:w-full justify-center items-center gap-4 px-4 lg:pl-[20px]">
        <div className="rounded-[20px] bg-white lg:h-[90%] w-full lg:w-[60%] flex flex-col justify-center">
          <RevenueOverview />
        </div>

        <div className="rounded-[20px] bg-white lg:h-[100%] sm:h-fit w-full lg:w-[40%] flex flex-col justify-center items-center relative">
          <p className="text-[#070F65] font-semibold p-3 absolute top-1 left-2 m:p-1 ">
            Performance
          </p>
          <Right/>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between h-auto lg:h-[485px] w-full rounded-[20px] px-4 lg:pl-[20px] gap-4 mt-6">
        <div className="rounded-[20px] bg-white lg:h-[90%] w-full lg:w-[50%] flex flex-col justify-center items-center">
          <BottomLeft />
        </div>

        <div className="lg:h-[94%] w-full lg:w-[48%] gap-2 flex flex-col justify-around items-end pt-8">
          <AccountManagement />

          <div
            className="rounded-[20px] flex flex-col sm:flex-row justify-between items-center bg-white h-auto sm:h-[106px] w-full p-4"
            style={{ color: "var(--text)" }}
          >
            <div className="flex flex-col sm:flex-row sm:h-full sm:w-[70%] relative sm:pt-10 sm:pl-4 w-full">
              <p className="sm:absolute sm:top-0 font-bold">
                Popular Task Specialist
              </p>

              <div className="flex flex-col gap-2 w-full text-center mt-2 sm:mt-0">
                <p className="text-[10px]">Task Completion in Due Date</p>
                <div
                  className="relative w-[90%] rounded-2xl h-3"
                  style={{ backgroundColor: "var(--secondary" }}
                >
                  <div className="absolute w-[80%] rounded-2xl h-3 bg-green-800"></div>
                  <p className="text-[10px] ml-28">80%</p>
                </div>
              </div>

              <div className="flex flex-col text-center gap-2 w-full mt-2 sm:mt-0">
                <p className="text-[10px]">Uncompleted Task</p>
                <div
                  className="relative w-[90%] rounded-2xl h-3"
                  style={{ backgroundColor: "var(--secondary" }}
                >
                  <div className="absolute w-[20%] rounded-2xl h-3 bg-red-800"></div>
                  <p className="text-[10px] ml-28">20%</p>
                </div>
              </div>
            </div>

            <div
              className="flex flex-col h-auto sm:h-[70%] sm:w-[17%] justify-center items-center sm:mr-2 mt-4 sm:mt-0"
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
      </div>
    </div>
  );
}

export default Overview;
