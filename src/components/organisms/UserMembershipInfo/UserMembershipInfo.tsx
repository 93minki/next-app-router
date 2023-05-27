import Text from "@/components/atoms/Text/Text";
import UserAvatarName from "@/components/molecules/UserAvatarName/UserAvatarName";

const UserMembershipInfo = () => {
  return (
    <div className="border-2 border-slate-800 rounded-lg p-4 h-1/4 space-y-2">
      <UserAvatarName avatar="" name="오투라인" />
      <div className="flex flex-col">
        <div className="flex flex-col mt-4">
          <Text className="font-bold lg:text-lg text-base">
            프리미엄 이용권
          </Text>
          <Text className="inline-block text-sm text-gray-400">
            이용권 유효기간이 7일 남았습니다.
          </Text>
        </div>
      </div>
      <div>
        <p>
          <Text className="lg:text-base text-sm">사용가능한 포인트</Text>
          <Text className="ml-2 lg:text-lg text-base font-bold">1300p</Text>
        </p>
      </div>
      <div>
        <p>
          <Text className="lg:text-base text-sm">보유중인 쿠폰</Text>
          <Text className="ml-2 lg:text-lg text-base font-bold">5장</Text>
        </p>
      </div>
    </div>
  );
};

export default UserMembershipInfo;
