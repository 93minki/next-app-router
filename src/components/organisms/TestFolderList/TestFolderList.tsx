import MoreButton from "@/components/molecules/MoreButton/MoreButton";
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
        .catch((error) => reject(error));
    }, delay);
  });
};

const TestFolderList = async () => {
  const data = await delayFetch("http://localhost:3000/api/user", 3000);
  return (
    <div className="py-8 px-8 flex space-x-8">
      {data.folder.map((item) => {
        return <TestFolder content={item} key={item.name} />;
      })}
      <MoreButton className="border-2 rounded-full bg-cyan-300 font-bold text-lg w-8 h-8 text-center leading-2 self-center">
        +
      </MoreButton>
    </div>
  );
};

export default TestFolderList;
