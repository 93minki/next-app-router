import Text from "@/components/atoms/Text/Text";
import UserAvatarName from "@/components/molecules/UserAvatarName/UserAvatarName";

const UserMembershipInfo = () => {
  return (
    <div className="border-2 border-slate-800 rounded-lg p-4 h-1/4 space-y-2">
      <UserAvatarName avatar="" name="오투라인" />
      <div className="flex flex-col">
        <div className="flex flex-col mt-4">
          <Text className="font-bold text-lg">프리미엄 이용권</Text>
          <Text className="inline-block text-sm text-gray-400">
            이용권 유효기간이 7일 남았습니다.
          </Text>
        </div>
      </div>
      <div>
        <p>
          <Text>사용가능한 포인트</Text>
          <Text className="ml-2 text-lg font-bold">1300p</Text>
        </p>
      </div>
      <div>
        <p>
          <Text>보유중인 쿠폰</Text>
          <Text className="ml-2 text-lg font-bold">5장</Text>
        </p>
      </div>
    </div>
  );
};
{
  /* <div>
  <div className="flex items-center space-x-4">
    <div id="avatar" className="rounded-full w-10 h-10 bg-orange-300"></div>
    <div>오투라인님</div>
  </div>
  <div className="flex-col space-y-2">
    <div className="flex flex-col mt-4">
      <span className="font-bold text-lg">프리미엄 이용권</span>
      <span className="inline-block text-sm text-gray-400">
        이용권 유효기간이 7일 남았습니다.
      </span>
    </div>
    <div>
      <p>
        사용가능한 포인트
        <span className="ml-2 text-lg font-bold">1300p</span>
      </p>
    </div>
    <div>
      <p>
        보유중인 쿠폰:
        <span className="ml-2 text-lg font-bold">5장</span>
      </p>
    </div>
  </div>
</div>; */
}

export default UserMembershipInfo;
