import { Activities } from "../../utils/activity-helper";
import { formatDate } from "../../lib/utils";
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@radix-ui/react-accordion";
import { Badge } from "../ui/Badge";
import { WorkItem } from "./WorkItem.type";
import { StatusIcon, statusColors } from "./StatusIcon";
import Timeline from "../ui/Event";
import moment from "moment";
import ReactMarkdown from "react-markdown";
import { processMarkdownWithADF } from "../../utils/jira-adf-util";
import remarkGfm from "remark-gfm";
import rehype from "remark-rehype";
import rehypeRaw from "rehype-raw";

interface WorkItemComponentProps {
  item: WorkItem & Activities;
  className?: string;
}

export function WorkItemComponent({ item, className }: WorkItemComponentProps) {
  return (
    <AccordionItem
      value={item.key}
      className={` relative p-3 rounded shadow-sm border  ${className} `}
    >
      <AccordionTrigger className="w-full">
        <div className="flex items-start space-x-2 ">
          <div className="p-1">
            <StatusIcon status={item.status} />
          </div>

          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <a
                className="font-medium text-amber-600"
                // href={item.url}
                href={
                  item.url.startsWith('http://') || item.url.startsWith('https://')
                    ? item.url // Use the URL directly if it starts with http or https
                    : `https://${item.url}` // Prepend https:// if it doesn't
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.key}
              </a>
              <div className="flex flex-1">
                <Badge
                  variant={
                    item.issuetype.name === "Story" ? "outline" : "secondary"
                  }
                >
                  {item.issuetype.name}
                </Badge>
              </div>

              <div className="self-end text-amber-500 text-xs">
                ({item.role.join(",")})
              </div>
            </div>

            <div className="font-medium flex flex-1 items-start flex-col text-start">
              <div className="text-pretty text-gray-700 text-sm italic mb-2">
                {item.title}
                <span className="text-xs text-red-400 font-light ml-2">
                  {moment(item.lastUpdated).fromNow()},{" "}
                </span>
                <span className="text-xs font-thin">
                  {moment(item.lastUpdated).calendar()}
                </span>
              </div>
              <div className="flex flex-wrap break-words text-wrap items-start flex-col font-thin text-xs text-gray-400 ">
                {item.parent.issuetype.name && (
                  <div>
                    <span className="font-semibold">
                      {item.parent.issuetype.name}
                    </span>
                    : {item.parent.key}: {item.parent.title}
                  </div>
                )}

                {item.recentActivity.map((activity, i) => (
                  <span
                    key={i}
                    className="mr-2 break-all overflow-hidden max-h-20"
                  >
                    <span className="text-red-500">{activity.type}</span>:{" "}
                    {activity.content}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <div className="space-y-2 ml-4 mt-2  px-4 py-2 ">
          <div className="text-pretty text-gray-700 text-sm italic mb-2">
            {"Created At"}
            <span className="text-xs text-red-400 font-light ml-2">
              {moment(item.createdAt).fromNow()},{" "}
            </span>
            <span className="text-xs font-thin">
              {moment(item.createdAt).format("DD, MMM YY")}
            </span>
          </div>
          <div className="text-pretty text-gray-700 text-sm italic mb-2">
            {"Due Date"}
            {item.duedate ? (
              <>
                <span className="text-xs text-red-400 font-light ml-2">
                  {moment(item.duedate).fromNow()},{" "}
                </span>
                <span className="text-xs font-thin">
                  {moment(item.duedate).calendar()}
                </span>
              </>
            ) : (
              ": NA"
            )}
          </div>
          <p
            className="text-xs font-light text-gray-600 appearance-none"
            title={item.description}
          >
            <div className="prose">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehype, rehypeRaw]}
              >
                {/* {markdownContent} */}
                {item.description && processMarkdownWithADF(item.description)}
              </ReactMarkdown>
            </div>
          </p>
          <div className="flex items-center space-x-2">
            <Badge className={statusColors[item.status]}>{item.status}</Badge>
            <Badge variant="outline">{item.assignee.displayName}</Badge>
          </div>
          <div className="flex items-center space-x-2">
            <Timeline
              layout="horizontal"
              events={item.hoursLogged?.map((timelog) => ({
                date: formatDate(timelog.createdAt),
                title: timelog.author.displayName,
                description: timelog.timeSpent,
              }))}
            />
          </div>

          {item.comments.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold">Comments:</h4>
              <Timeline
                layout="vertical"
                events={item.comments.map((timelog) => ({
                  date: formatDate(timelog.createdAt),
                  title: timelog.author.displayName,
                  description: timelog.content,
                }))}
              />
            </div>
          )}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
