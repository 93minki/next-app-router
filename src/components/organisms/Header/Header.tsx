import Logo from "@/components/atoms/Logo/Logo";
import NavLow from "@/components/molecules/NavLow/NavLow";
import UserAvatarName from "@/components/molecules/UserAvatarName/UserAvatarName";

const Header = () => {
  return (
    <header className="flex justify-between border-2 border-slate-800 p-4 items-center rounded-lg">
      <Logo />
      <NavLow />
      <UserAvatarName />
    </header>
  );
};

export default Header;
