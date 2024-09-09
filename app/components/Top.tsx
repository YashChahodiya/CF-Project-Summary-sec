import {
  faCalculator,
  faCalendar,
  faCalendarDays,
  faUserTie,
  faUserVneck,
} from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartMixed } from "@fortawesome/sharp-regular-svg-icons";
import { formatCurrency } from "~/helpers";

const Top = ({ data }: any) => {
  const Items = [
    {
      id: 1,
      label: "Gross Profit",
      label2: "-812.06%",
      values: `${formatCurrency(Number(data?.gross_profit))}`,
      icon: faChartMixed,
    },
    {
      id: 2,
      label: "Site Manager",
      label2: "",
      values: `-`,
      icon: faUserVneck,
    },
    {
      id: 3,
      label: "Project Manager",
      label2: "",
      values: `-`,
      icon: faUserTie,
    },
    {
      id: 4,
      label: "Start/End Date",
      label2: "",
      values: `-`,
      icon: faCalendar,
    },
    {
      id: 5,
      label: " Schedule Completed",
      label2: "",
      values: `0%`,
      icon: faCalendarDays,
    },
  ];

  return (
    <div className="  grid grid-cols-1 lg:grid-cols-5 w-full h-full  gap-2 mt-3 ">
      {Items.map((i) => (
        <div
          className="col-span-1 rounded-lg border bg-white  hover:shadow-lg hover:transition-shadow hover:duration-500 px-4 py-2.5 w-full"
          key={i.id}
        >
          <div className="flex justify-start items-center gap-3 w-full  ">
            <div className="bg-blue-100 w-12  h-10 rounded-full flex justify-center items-center ">
              <FontAwesomeIcon icon={i.icon} className="text-2xl" />
            </div>
            <div className=" w-full">
              {" "}
              {i.label}
              <p className="flex justify-between items-center text-sm font-semibold">
                {i.label2}
                <span className="text-emerald-600 font-semibold">
                  {i.values}
                </span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Top;
