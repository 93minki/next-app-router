import Text from "@/components/atoms/Text/Text";
import UserAvatarName from "@/components/molecules/UserAvatarName/UserAvatarName";

const UserMembershipInfo = () => {
  return (
    <article className="bg-purple-500 rounded-lg p-4 h-1/3">
      <UserAvatarName avatar="" name="오투라인" />
      <div className="flex flex-col">
        <div className="flex flex-col mt-4">
          <Text>프리미엄 이용권</Text>
          <Text>이용권 유효기간이 7일 남았습니다.</Text>
        </div>
      </div>
      <div>
        <p>
          <Text>사용가능한 포인트</Text>
          <Text>1300p</Text>
        </p>
      </div>
      <div>
        <p>
          <Text>보유중인 쿠폰</Text>
          <Text>5장</Text>
        </p>
      </div>
    </article>
  );
};

export default UserMembershipInfo;
