import type { MetaFunction } from "@remix-run/node";
import Dashboard from "~/components/Dashboard";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1 className="bg-[#223558] text-white text-center p-1 text-xl">
        {" "}
        Project-Summary{" "}
      </h1>
      <Dashboard />
    </div>
  );
}
