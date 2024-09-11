import {
  faCalculator,
  faCalendar,
  faCalendarDays,
  faUserTie,
  faUserVneck,
} from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatCurrency } from "~/helpers";

const Top = ({ data }: any) => {
  console.log("121223", data);

  const Items = [
    {
      id: 1,
      label: "Gross Profit",
      label2: `(${
        Number(data?.gross_profit) > 0
          ? ((data?.gross_profit * 100) / data?.amount_invoiced).toFixed(2)
          : "0"
      }%)`,
      values: `${formatCurrency(Number(data?.gross_profit))}`,
      icon: faCalculator,
    },
    {
      id: 2,
      label: "Site Manager",
      label2: "",
      values: `-`,
      icon: faCalculator,
    },
    {
      id: 3,
      label: "Project Manager",
      label2: "",
      values: `-`,
      icon: faCalculator,
    },
    {
      id: 4,
      label: "Start/End Date",
      label2: "",
      values: `-`,
      icon: faCalculator,
    },
    {
      id: 5,
      label: " Schedule Completed",
      label2: "",
      values: `0%`,
      icon: faCalculator,
    },
  ];

  return (
    <div className="  grid grid-cols-1 lg:grid-cols-5 w-full h-full  gap-2 mt-3 ">
      {Items.map(({ id, bgColor, icon, label, label2, values, color }) => (
        <div
          className="col-span-1 rounded-lg border bg-white  hover:shadow-lg hover:transition-shadow hover:duration-500 px-4 py-2.5 w-full"
          key={id}
        >
          <div className="flex justify-start items-center gap-3 w-full  ">
            <div
              style={{ backgroundColor: bgColor }}
              className={`bg-[${bgColor}] w-12  h-10 rounded-full flex justify-center items-center`}
            >
              <FontAwesomeIcon
                icon={icon}
                style={{ color: color }}
                className={`text-2xl text-[${color}]`}
              />
            </div>
            <div className=" w-full">
              {" "}
              {label}
              <p className="flex justify-between items-center text-sm font-semibold">
                {label2}
                <span className="text-emerald-600 font-semibold">{values}</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Top;
