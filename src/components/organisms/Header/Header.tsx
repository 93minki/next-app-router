import Logo from "@/components/atoms/Logo/Logo";
import NavItem from "@/components/atoms/NavItem/NavItem";
import FlexLow from "@/components/molecules/FlexLow/FlexLow";
import NavLow from "@/components/molecules/NavLow/NavLow";
import UserAvatarName from "@/components/molecules/UserAvatarName/UserAvatarName";

interface HeaderProps {
  userInfo: {
    name: string;
    subscription: string;
  };
}

const Header = ({ userInfo }: HeaderProps) => {
  return (
    <header className="flex justify-between border-2 border-slate-800 p-4 items-center rounded-lg">
      <Logo />
      <FlexLow>
        <NavItem href="/">메뉴1</NavItem>
        <NavItem href="/">메뉴2</NavItem>
      </FlexLow>
      <UserAvatarName avatar="" name={`${userInfo.name}`} />
    </header>
  );
};

export default Header;
