const SidePanel = () => {
  return (
    <nav className="h-[calc(75%-1rem)] border-2 border-slate-800 rounded-lg">
      <ul className="pt-8 flex flex-col space-y-8 p-4">
        <li className="text-lg">✨ 대시보드 </li>
        <li className="text-lg">🧑 프로필 관리</li>
        <li className="text-lg">💳 이용권 관리</li>
        <li className="text-lg">📁 내 시험지</li>
        <li className="text-lg">📞 고객센터</li>
      </ul>
    </nav>
  );
};

export default SidePanel;
