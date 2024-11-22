const DashboardFooter = () => {
  return (
    <div className="h-10 border-t text-center flex items-center justify-center px-5 bg-slate-50">
      <p className="text-xs font-medium">
        Copyright © {new Date().getFullYear()}, {`Raian's`} Portfolio
      </p>
    </div>
  );
};

export default DashboardFooter;
