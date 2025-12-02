interface TableProps {
  children: React.ReactNode;
}

function BlogTable({ children }: TableProps) {
  return (
    <div className="overflow-x-auto my-6 rounded-[14px] bg-[#14532d]/40  overflow-hidden p-1 border-1 border-[#14532d]">
      <table className="w-full text-sm rounded-[14px] bg-[linear-gradient(135deg,#28B849_0%,#26621E_100%)]">
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

function Header({ children }: TableProps) {
  return (
    <th className="border-b border-[#EEEAEB] dark:border-white/10 font-semibold text-left text-[18px] text-[#ffffff] px-4 py-2">
      {children}
    </th>
  );
}

function Cell({ children }: TableProps) {
  return (
    <td className="border-b  border-[#EEEAEB] dark:border-white/10 px-4 py-2">
      {children}
    </td>
  );
}

function Row({ children }: TableProps) {
  return <tr>{children}</tr>;
}

BlogTable.Row = Row;
BlogTable.Header = Header;
BlogTable.Cell = Cell;

export default BlogTable;
