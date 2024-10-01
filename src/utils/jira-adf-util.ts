type BLOCK = {
  type: string;
  content: any[];
};
export const processMarkdownWithADF = (markdownString: string) => {
  // Regular expression to find ADF blocks between {adf:__} and {adf}
  const adfRegex = /\{adf:[^\}]+\}(.*?)\{adf\}/gs;

  const result = markdownString.replace(adfRegex, (_, adfJson) => {
    try {
      // Parse the JSON block
      const adfObject = JSON.parse(adfJson.trim());
      // Convert the ADF block to Markdown
      const convertedMarkdown = adfToMarkdown(adfObject);
      // Replace the ADF block with the converted Markdown
      return convertedMarkdown;
    } catch (error) {
      console.error("Error parsing ADF block:", error);
      return "";
    }
  });
  return result;
};

// Utility to convert ADF blocks to Markdown
export const adfToMarkdown = (adf: JSON) => {
  let markdown = "";

  const processBlock = (block: BLOCK) => {
    switch (block.type) {
      case "paragraph":
        markdown += processParagraph(block);
        markdown += "\n\n"; // Two newlines for paragraph separation in markdown
        break;
      case "table":
        markdown += processTable(block);
        break;
      // You can add more cases for other block types (e.g., headings, lists, etc.)
      default:
        break;
    }
  };

  const processParagraph = (block: BLOCK) => {
    if (!block.content) return "";
    return block.content
      .map((item) => {
        if (item.type === "text") {
          return item.text;
        }
        return "";
      })
      .join("");
  };

  const processTable = (block: BLOCK) => {
    if (!block.content) return "";

    // let tableMarkdown = "";
    // const rows = block.content;

    // rows.forEach((row, rowIndex) => {
    //   const cells = row.content.map((cell) => processCell(cell)).join(" | ");

    //   // Add markdown row
    //   tableMarkdown += `| ${cells} |\n`;

    //   // Add the header separator after the first row
    //   if (rowIndex === 0) {
    //     const headerSeparator = row.content.map(() => "---").join(" | ");
    //     tableMarkdown += `| ${headerSeparator} |\n`;
    //   }
    // });

    let tableMarkdown = "<table>";
    const rows = block.content;

    rows.forEach((row) => {
      //   if (rowIndex === 0) {
      //     const headerSeparator = row.content.map(() => "---").join(" | ");
      //     tableMarkdown += `| ${headerSeparator} |\n`;
      //     return;
      //   }
      const cells = row.content
        .map((cell: any) => {
          const rowspan = cell.attrs?.rowspan || 1;
          const colspan = cell.attrs?.colspan || 1;
          return `<td rowspan="${rowspan}" colspan="${colspan}">${processCell(
            cell
          )}</td>`;
        })
        .join("  ");

      // Add markdown row
      const colspan = row.attrs?.colspan || 1;
      tableMarkdown += `<tr colspan="${colspan}"> ${cells} </tr>`;

      // Add the header separator after the first row
    });

    return tableMarkdown + "</table>";
  };

  const processCell = (cell: any) => {
    if (!cell.content) return "";
    return cell.content
      .map((item: any) => {
        if (item.type === "paragraph") {
          return processParagraph(item);
        }
        return "";
      })
      .join("");
  };

  // Traverse through the ADF document

  //   if (adf.type === "doc" && adf.content) {
  //     adf.content.forEach(processBlock);
  //   }
  processBlock(adf as any);

  return markdown.trim();
};
