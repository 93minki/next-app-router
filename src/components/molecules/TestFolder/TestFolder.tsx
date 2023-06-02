import Text from "@/components/atoms/Text/Text";
import Title from "@/components/atoms/Title/Title";

const TestFolder = () => {
  return (
    <div className="w-28 text-center">
      <div className="flex flex-col items-center border-2 border-slate-500 h-32 rounded-md">
        <Text size="lg" bold="semibold">
          시험지 수
        </Text>
        <Text>10</Text>
      </div>
      <Title size="xs" bold="semibold">
        중3 1학기
      </Title>
    </div>
  );
};

export default TestFolder;
