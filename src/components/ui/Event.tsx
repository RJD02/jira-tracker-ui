import { cn } from "../../utils/utils";
const eventSample = [
  {
    date: "February 2022",
    title: "Application UI code in Tailwind CSS",
    description:
      "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
  },
  {
    date: "March 2022",
    title: "Marketing UI design in Figma",
    description:
      "All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.",
  },
  {
    date: "April 2022",
    title: "E-Commerce UI code in Tailwind CSS",
    description:
      "Get started with dozens of web components and interactive elements built on top of Tail",
  },
];

export const Timeline = ({ events = eventSample, layout = "horizontal" }) => {
  return (
    <ol
      className={cn(
        "relative  border-gray-200  m-5 ",
        layout === "horizontal" ? "flex flex-row border-t" : "border-l"
      )}
    >
      {events.map((event, index) => (
        <li
          key={index}
          className={cn(
            " ms-4 ",
            layout === "horizontal" ? "text-center" : "mb-10"
          )}
        >
          <div
            className={cn(
              "w-3 h-3 bg-gray-200 rounded-full  -start-1.5 ",
              layout === "horizontal" ? "m-auto -mt-1.5" : "absolute mt-1.5"
            )}
          ></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">
            {event.date}
          </time>
          <h3 className="font-semibold text-gray-900 ">{event.title}</h3>
          <p className="mb-4 text-sm font-normal text-gray-500 ">
            {event.description}
          </p>
        </li>
      ))}{" "}
    </ol>
  );
};

export default Timeline;
