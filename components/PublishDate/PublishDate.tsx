import { format } from "date-fns";

interface PublishDateProps {
  date: string | number;
}

const PublishDate = ({ date }: PublishDateProps) => {
  const dateObj = new Date(date);
  return (
    <time dateTime={format(dateObj, "yy-MM-dd")}>
      {format(dateObj, "LLLL d, yyyy")}
    </time>
  );
};

export default PublishDate;
