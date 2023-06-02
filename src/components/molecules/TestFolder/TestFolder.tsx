import Text from "@/components/atoms/Text/Text";
import Title from "@/components/atoms/Title/Title";

interface TestFolderProps {
  content: {
    count: number;
    name: string;
  };
}

const TestFolder = ({ content }: TestFolderProps) => {
  return (
    <div className="w-28 text-center">
      <div className="flex flex-col items-center border-2 border-slate-500 h-32 rounded-md">
        {/* <Text className="border-2 rounded-full bg-cyan-300 font-bold text-lg w-8 h-8 text-center leading-2 self-end">
          +
        </Text> */}
        <Text size="lg" bold="semibold">
          시험지 수
        </Text>
        <Text>{content.count}</Text>
      </div>
      <Title size="lg" bold="semibold">
        {content.name}
      </Title>
    </div>
  );
};

export default TestFolder;
