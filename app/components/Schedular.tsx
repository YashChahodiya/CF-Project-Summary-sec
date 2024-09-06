import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "dhtmlx-scheduler/codebase/dhtmlxscheduler.css";
import "./dhtmlxs.css";
import { faCalendarDay } from "@fortawesome/pro-solid-svg-icons";

const SchedulerWidget: React.FC = () => {
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
      <div className="h-60">
        <div
          ref={schedulerContainer}
          style={{ width: "100%", height: "100%" }}
        ></div>
      </div>
    </div>
  );
};

export default SchedulerWidget;
