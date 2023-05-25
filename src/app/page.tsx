import Avatar from "@/components/atoms/Avatar/Avatar";
import Button from "@/components/atoms/Button/Button";
import Text from "@/components/atoms/Text/Text";

export default function Home() {
  return (
    <div>
      <Avatar />
      <Button size="md" color="main" text="테스트 버튼" />
      <Text size="lg" content="Hello" />
    </div>
  );
}
