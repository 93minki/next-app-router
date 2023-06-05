import Text from "@/components/atoms/Text/Text";
import UserAvatarName from "@/components/molecules/UserAvatarName/UserAvatarName";
import { RootState } from "@/redux/store";
import { User } from "@/redux/store/slice/userSlice";
import { useSelector } from "react-redux";

const UserMembershipInfo = async () => {
  const userInfo = useSelector((state: RootState) => {
    return state.user.userData as User;
  });
  return (
    <div className="border-2 border-slate-800 rounded-lg p-4 h-1/4 2xl:space-y-2">
      <UserAvatarName />
      <div className="flex flex-col">
        <div className="flex flex-col mt-4">
          <Text size="md" bold="bold">
            {userInfo.subscription} 이용권
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
            {userInfo.point}p
          </Text>
        </p>
      </div>
      <div>
        <p>
          <Text size="md">보유중인 쿠폰</Text>
          <Text size="lg" bold="bold">
            {userInfo.coupon}장
          </Text>
        </p>
      </div>
    </div>
  );
};

export default UserMembershipInfo;
