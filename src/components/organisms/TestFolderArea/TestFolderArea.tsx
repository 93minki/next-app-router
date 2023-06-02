import NavItem from "@/components/atoms/NavItem/NavItem";
import GridLow from "@/components/molecules/GridLow/GridLow";
import TestFolder from "@/components/molecules/TestFolder/TestFolder";
import { UserInfoProps } from "@/type/userInfo";

const delayFetch = async (
  url: string,
  delay: number
): Promise<UserInfoProps> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(url, { cache: "no-cache" })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .then((err) => reject(err));
    }, delay);
  });
};

const TestFolderArea = async () => {
  const data = await delayFetch("http://localhost:3000/api/user", 500);
  return (
    <div>
      <NavItem href="/">{"> 더보기"}</NavItem>
      <GridLow grid={3}>
        {data.folder.map((item) => {
          return <TestFolder content={item} key={item.name} />;
        })}
      </GridLow>
    </div>
  );
};

export default TestFolderArea;
