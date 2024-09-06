import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "dhtmlx-scheduler/codebase/dhtmlxscheduler.css";
import "./dhtmlxs.css";
import { faCalendarDay } from "@fortawesome/pro-solid-svg-icons";
import axios from "axios";

const SchedulerWidget = () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const formData = new FormData();
        formData.append("op", "get_schedule_calendar_events");
        formData.append("project_id", "147534");
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
        formData.append("user_id", "109871");
        formData.append("company_id", "829");

        const response = await axios.post(
          "https://api-cfdev.contractorforeman.net/service.php?opp=get_schedule_calendar_events&c=829&u=109871&p=manage_projects",
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
      // Cleanup function to be called when the component unmounts
      // console.log("Cleanup function called");
      clearTimeout(timeOut);
    };
  }, []);

  const schedulerContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadScheduler = async () => {
      const scheduler: any = (await import("dhtmlx-scheduler")).default;

      if (schedulerContainer.current) {
        scheduler.config.header = ["date", "prev", "today", "next"];
        scheduler.config.multi_day = false;
        scheduler.config.first_hour = 0;
        scheduler.config.last_hour = 24;
        scheduler.config.scale_width = 0;
        scheduler.config.readonly = true;
        scheduler.config.drag_resize = false;
        scheduler.config.drag_move = false;
        scheduler.xy.scale_width = 0;

        scheduler.config.left_border = false;

        scheduler.templates.event_class = function (
          start: any,
          end: any,
          event: any
        ) {
          return event.classname || "";
        };

        const currentDate = new Date(2024, 8, 1);
        scheduler.init(schedulerContainer.current, currentDate, "week");
        scheduler.parse(data);

        scheduler.templates.week_scale_date = function (date: Date) {
          return scheduler.date.date_to_str("%D, %j %M")(date);
        };

        scheduler.ignore_week = function (date: Date) {
          if (date.getDay() == 0 || date.getDay() == 7) return true;
        };

        scheduler.templates.week_date = function (start: Date) {
          const end = scheduler.date.add(start, 7, "day");
          const formatDate = (date: Date) => {
            const day = date.getDate();
            const month = date.toLocaleString("default", { month: "short" });
            return `${day} ${month}`;
          };
          return `Sun, ${formatDate(
            start
          )} ${start.getFullYear()} - Sat, ${formatDate(
            end
          )} ${end.getFullYear()}`;
        };

        scheduler.updateView();
      }
    };
    loadScheduler();
    return () => {
      import("dhtmlx-scheduler").then((module: any) =>
        module.default.clearAll()
      );
    };
  }, []);

  return (
    <div className="w-full  relative ">
      <div className="space-y-2 text-sm absolute z-50 top-2">
        <div className="flex gap-2 items-center">
          <div className="bg-blue-100 w-7 h-7 rounded-full flex justify-center items-center">
            <FontAwesomeIcon icon={faCalendarDay} className="text-base" />
          </div>
          <span className="font-semibold text-xl">Project Summary</span>
        </div>
      </div>
      <div>
        <div
          ref={schedulerContainer}
          style={{ width: "100%", height: "100%" }}
        ></div>
      </div>
    </div>
  );
};

export default SchedulerWidget;
