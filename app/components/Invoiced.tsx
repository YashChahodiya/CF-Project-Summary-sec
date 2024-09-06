import { faFileChartColumn } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Invoiced = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className=" w-full h-16 rounded-md shadow-sm bg-white"></div>
      <div className=" bg-white border h-full rounded-md  shadow-md hover:shadow-lg hover:transition-shadow hover:duration-500   px-4 py-2.5">
        <div className="flex gap-2  items-center">
          <div className="bg-blue-100 w-7 h-7 rounded-full flex justify-center items-center">
            <FontAwesomeIcon icon={faFileChartColumn} />
          </div>
          <span className="font-semibold text-xl">Invoiced vs Actual</span>
        </div>
        <div className="space-y-1 mt-3">
          <p className="flex justify-between items-center text-sm">
            Total Project Amount (no/Tax){" "}
            <span className="text-emerald-600 font-semibold">$11,330.00</span>
          </p>
          <p className="flex justify-between items-center text-sm">
            Invoiced to Date (no/Tax) (77%){" "}
            <span className="text-emerald-600 font-semibold">$8,735.00</span>
          </p>
          <p className="flex justify-between items-center text-sm">
            Remaining to Invoice (no/Tax) (23%){" "}
            <span className="text-emerald-600 font-semibold">$2,595.00</span>
          </p>
          <p className="flex justify-between items-center text-sm">
            Total Actual Costs{" "}
            <span className="text-red-600 font-semibold">$79,668.14</span>
          </p>
          <p className="flex justify-between items-center text-sm">
            Gross Profit{" "}
            <span className="text-emerald-600 font-semibold">$-70,933.14</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Invoiced;
// import { faFileChartColumn } from "@fortawesome/pro-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// const Invoiced = () => {
//   return (
//     <div className="grid grid-rows-3 gap-3">
//       <div className="row-span-1 w-full h-full rounded-md shadow-sm bg-white"></div>
//       <div className="row-span-2 bg-white border h-full rounded-md  shadow-md hover:shadow-lg hover:transition-shadow hover:duration-500   px-4 py-2.5">
//         <div className="flex gap-2  items-center">
//           <div className="bg-blue-100 w-7 h-7 rounded-full flex justify-center items-center">
//             <FontAwesomeIcon icon={faFileChartColumn} />
//           </div>
//           <span className="font-semibold text-xl">Invoiced vs Actual</span>
//         </div>
//         <div className="pt-3">
//           <p className="flex justify-between items-center text-sm">
//             Total Project Amount (no/Tax){" "}
//             <span className="text-emerald-600 font-semibold">$11,330.00</span>
//           </p>
//           <p className="flex justify-between items-center text-sm">
//             Invoiced to Date (no/Tax) (77%){" "}
//             <span className="text-emerald-600 font-semibold">$8,735.00</span>
//           </p>
//           <p className="flex justify-between items-center text-sm">
//             Remaining to Invoice (no/Tax) (23%){" "}
//             <span className="text-emerald-600 font-semibold">$2,595.00</span>
//           </p>
//           <p className="flex justify-between items-center text-sm">
//             Total Actual Costs{" "}
//             <span className="text-red-600 font-semibold">$79,668.14</span>
//           </p>
//           <p className="flex justify-between items-center text-sm">
//             Gross Profit{" "}
//             <span className="text-emerald-600 font-semibold">$-70,933.14</span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Invoiced;
