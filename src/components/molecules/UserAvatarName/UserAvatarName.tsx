// avatar, username prop으로 받아야함.
interface UserAvatarNameProps {
  avatar: string;
  name: string;
}

const UserAvatarName = ({ avatar, name }: UserAvatarNameProps) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="rounded-full w-10 h-10 bg-orange-300">{avatar}</div>
      <div>{name}</div>
    </div>
  );
};

export default UserAvatarName;
