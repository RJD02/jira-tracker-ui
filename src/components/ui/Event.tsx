import ReactMarkdown from "react-markdown";
import { cn } from "../../utils/utils";
import { processMarkdownWithADF } from "../../utils/jira-adf-util";
import remarkGfm from "remark-gfm";
import rehype from "remark-rehype";
import rehypeRaw from "rehype-raw";

interface Event {
  date: string;
  title: string;
  description: string;
}

export const Timeline = ({
  events = [],
  layout = "horizontal",
}: {
  events: Event[];
  layout: "horizontal" | "vertical";
}) => {
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
          <p className="mb-4 text-sm font-normal text-gray-500 appearance-none">
            <div className="prose">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehype, rehypeRaw]}
              >
                {processMarkdownWithADF(event.description)}
              </ReactMarkdown>
            </div>
          </p>
        </li>
      ))}{" "}
    </ol>
  );
};

export default Timeline;
