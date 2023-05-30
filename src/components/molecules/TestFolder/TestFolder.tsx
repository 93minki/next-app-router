import Text from "@/components/atoms/Text/Text";

interface TestFolderProps {
  content: {
    count: number;
    name: string;
  };
}

const TestFolder = ({ content }: TestFolderProps) => {
  return (
    <div className="w-28">
      <div className="flex flex-col items-center border-2 border-slate-500 h-32 rounded-md">
        <Text className="border-2 rounded-full bg-cyan-300 font-bold text-lg w-8 h-8 text-center leading-2 self-end">
          +
        </Text>
        <div className="text-center">
          <p>시험지 수</p>
          <Text>{content.count}</Text>
        </div>
      </div>
      <div className="text-center">{content.name}</div>
    </div>
  );
};

export default TestFolder;
