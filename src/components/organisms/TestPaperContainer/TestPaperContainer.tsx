import TestPaperFilter from "@/components/molecules/TestPaperFilter/TestPaperFilter";
import TestPaperTab from "@/components/molecules/TestPaperTab/TestPaperTab";
import TestPaperTableHeader from "@/components/molecules/TestPaperTableHeader/TestPaperTableHeader";
import TestPaperItem from "@/components/molecules/TestPaperItem/TestPaperItem";
import { UserInfoProps } from "@/type/userInfo";
import axios from "axios";

const delayFetch = async (
  url: string,
  delay: number
): Promise<UserInfoProps> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(url, { cache: "no-cache" })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    }, delay);
  });
};

const TestPaperContainer = async () => {
  const data = await delayFetch("http://localhost:3000/api/user", 600);
  const ttt = await axios.get("http://localhost:3000/api/user");
  console.log("ttt", ttt);
  console.log("data.paper!!!!!", data.paper);
  return (
    <div className="flex flex-col space-y-4 py-4 px-4 border-2 border-slate-300 rounded-lg h-full">
      <TestPaperTab />
      <TestPaperFilter />
      <TestPaperTableHeader />
      {data.paper.map((item) => {
        return <TestPaperItem paper={item} />;
      })}
    </div>
  );
};

export default TestPaperContainer;
