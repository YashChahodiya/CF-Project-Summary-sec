import React, { useEffect, useRef, useState } from "react";
import "dhtmlx-scheduler/codebase/dhtmlxscheduler.css";
import "../styles/dhtmlxs.css";
import { faCalendarDay } from "@fortawesome/pro-solid-svg-icons";
import axios from "axios";
import CustomIcon from "./CustomIcon";
import { IndexProps } from "~/routes/_index";

const SchedulerWidget = ({ projectId, userId, compId }: IndexProps) => {
  const [data, setData] = useState<any>([]);
  const schedulerContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const formData = new FormData();
        formData.append("op", "get_schedule_calendar_events");
        formData.append("project_id", projectId);
        formData.append("for", "dashboard_summary");
        formData.append("start_date_range", "2024-9-01 00:00:00");
        formData.append("version", "web");
        formData.append("from", "panel");
        formData.append("iframe_call", "0");
        formData.append("tz", "+5:30");
        formData.append("tzid", "Asia/Calcutta");
        formData.append("curr_time", "2024-08-31 15:50:38");
        formData.append("force_login", "0");
        formData.append("global_project", "");
        formData.append("user_id", userId);
        formData.append("company_id", compId);

        const response = await axios.post(
          `https://api-cfdev.contractorforeman.net/service.php?opp=get_schedule_calendar_events&c=${Number(
            compId
          )}&u=${Number(userId)}&p=manage_projects`,
          formData
        );

        // Return the data fetched from the API
        setData(response?.data?.data?.modules);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    const timeOut = setTimeout(() => {
      fetchData();
    }, 500);

    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  useEffect(() => {
    const loadScheduler = async () => {
      const scheduler: any = (await import("dhtmlx-scheduler")).default;

      if (schedulerContainer.current) {
        // Define the scheduler configuration
        scheduler.config.header = ["date", "prev", "today", "next"];
        scheduler.config.multi_day = false;
        scheduler.config.first_hour = 0;
        scheduler.config.last_hour = 24;
        scheduler.config.scale_width = 0;
        scheduler.config.readonly = true;
        scheduler.config.drag_resize = false;
        scheduler.config.drag_move = false;
        scheduler.xy.scale_width = 0;
        scheduler.config.responsive = true;
        scheduler.config.left_border = false;

        // Function to reset the scheduler configuration
        const resetConfig = () => {
          if (window.innerWidth < 768) {
            scheduler.config.header = ["prev", "date", "next"];
            scheduler.xy.scale_width = 40;
            scheduler.templates.week_scale_date = function (date: Date) {
              return scheduler.date.date_to_str("%D")(date);
            };
          } else {
            scheduler.config.header = ["date", "today", "prev", "next"];
            scheduler.xy.scale_width = 50;
            scheduler.templates.week_scale_date = function (date: Date) {
              return scheduler.date.date_to_str("%D, %F %j")(date);
            };
          }
          // Only update the view after initialization
          if (schedulerContainer.current) {
            scheduler.updateView();
          }
          return true;
        };

        // Initialize the scheduler after setting configuration
        const currentDate = new Date();
        scheduler.init(schedulerContainer.current, currentDate, "week");

        scheduler.parse(data); // Populate the scheduler with data

        resetConfig(); // Call resetConfig after initialization

        // Attach event listeners for responsiveness
        scheduler.attachEvent("onBeforeViewChange", resetConfig);
        scheduler.attachEvent("onSchedulerResize", resetConfig);

        scheduler.templates.event_class = function (
          start: any,
          end: any,
          event: any
        ) {
          return event.classname || "";
        };

        // scheduler.templates.week_scale_date = function (date: Date) {
        //   return scheduler.date.date_to_str("%D, %F %j")(date);
        // };

        scheduler.ignore_week = function (date: Date) {
          if (date.getDay() === 0 || date.getDay() === 6) return true;
        };

        scheduler.templates.week_date = function (start: Date) {
          const end = scheduler.date.add(start, 6, "day");
          const formatDate = (date: Date) => {
            const day = date.getDate() - 1;
            const month = date.toLocaleString("default", { month: "short" });
            return `${day} ${month}`;
          };
          return `Sun, ${formatDate(
            start
          )} ${start.getFullYear()} - Sat, ${formatDate(
            end
          )} ${end.getFullYear()}`;
        };

        // Add event listener for window resize to make the scheduler responsive
        window.addEventListener("resize", resetConfig);
      }
    };

    loadScheduler();

    return () => {
      import("dhtmlx-scheduler").then((module: any) =>
        module.default.clearAll()
      );
    };
  }, [data]); // Ensure this effect runs when 'data' changes

  return (
    <div className="w-full relative">
      <div className="lg:absolute mt-4 lg:mt-0 lg:top-4 z-50 ">
        <CustomIcon
          icon={faCalendarDay}
          label="Schedule"
          bgColor="#ECF3FF"
          color="#78AEFE"
        />
      </div>

      <div
        ref={schedulerContainer}
        style={{ width: "100%", height: "100%" }}
      ></div>
    </div>
  );
};

export default SchedulerWidget;
