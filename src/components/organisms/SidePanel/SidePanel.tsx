import Link from "@/components/atoms/NavItem/NavItem";
import UserMembershipInfo from "../UserMembershipInfo/UserMembershipInfo";
import NavColumn from "@/components/molecules/NavColumn/NavColumn";
import FlexColumn from "@/components/molecules/FlexColumn/FlexColumn";
import NavItem from "@/components/atoms/NavItem/NavItem";

const SidePanel = () => {
  return (
    <div className="flex flex-col h-full justify-between gap-5">
      <UserMembershipInfo />
      <FlexColumn>
        <NavItem href="/">✨ 대시보드</NavItem>
        <NavItem href="/">🧑 프로필 관리</NavItem>
        <NavItem href="/">💳 이용권 관리</NavItem>
        <NavItem href="/">📁 내 시험지</NavItem>
        <NavItem href="/">📞 고객센터</NavItem>
      </FlexColumn>
    </div>
  );
};

export default SidePanel;
