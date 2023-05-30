import Text from "@/components/atoms/Text/Text";
import UserAvatarName from "@/components/molecules/UserAvatarName/UserAvatarName";
import { UserInfoProps } from "@/type/userInfo";

const delayFetch = async (
  url: string,
  delay: number
): Promise<UserInfoProps> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    }, delay);
  });
};

const UserMembershipInfo = async () => {
  const data = await delayFetch("http://localhost:3000/api/user", 3000);
  return (
    <div className="border-2 border-slate-800 rounded-lg p-4 h-1/4 2xl:space-y-2">
      <UserAvatarName avatar="" name={data.name} />
      <div className="flex flex-col">
        <div className="flex flex-col mt-4">
          <Text className="font-bold lg:text-lg text-base">
            {data.subscription} 이용권
          </Text>
          <Text className="inline-block text-sm text-gray-400">
            이용권 유효기간이 7일 남았습니다.
          </Text>
        </div>
      </div>
      <div>
        <p>
          <Text className="lg:text-base text-sm">사용가능한 포인트</Text>
          <Text className="ml-2 lg:text-lg text-base font-bold">
            {data.point}p
          </Text>
        </p>
      </div>
      <div>
        <p>
          <Text className="lg:text-base text-sm">보유중인 쿠폰</Text>
          <Text className="ml-2 lg:text-lg text-base font-bold">
            {data.coupon}장
          </Text>
        </p>
      </div>
    </div>
  );
};

export default UserMembershipInfo;
