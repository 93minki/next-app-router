import Text from "@/components/atoms/Text/Text";
import UserAvatarName from "@/components/molecules/UserAvatarName/UserAvatarName";

const UserMembershipInfo = async () => {
  return (
    <div className="border-2 border-slate-800 rounded-lg p-4 h-1/4 2xl:space-y-2">
      <UserAvatarName />
      <div className="flex flex-col">
        <div className="flex flex-col mt-4">
          <Text size="md" bold="bold">
            {"프리미엄"} 이용권
          </Text>
          <Text size="sm" bold="normal">
            이용권 유효기간이 7일 남았습니다.
          </Text>
        </div>
      </div>
      <div>
        <p>
          <Text size="md">사용가능한 포인트</Text>
          <Text size="lg" bold="bold">
            {1390}p
          </Text>
        </p>
      </div>
      <div>
        <p>
          <Text size="md">보유중인 쿠폰</Text>
          <Text size="lg" bold="bold">
            {4}장
          </Text>
        </p>
      </div>
    </div>
  );
};

export default UserMembershipInfo;
