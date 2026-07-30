export default function PhoneFrame({
  time = "9:41",
  children,
  className = "",
}) {
  return (
    <div className={className}>
      <div className="relative h-full w-full overflow-hidden rounded-[46px] border-[8px] border-[#161616] bg-black shadow-[0_50px_100px_-25px_rgba(0,0,0,0.55)]">
        {/* Dynamic Island */}

        <div className="absolute left-1/2 top-2 z-20 h-[20px] w-[90px] -translate-x-1/2 rounded-full bg-black ring-1 ring-white/10" />

        <div className="flex h-full w-full flex-col bg-black">
          {/* Status Bar */}

          <div className="flex items-center justify-between px-5 pt-4 text-[11px] font-medium text-white">
            <span>{time}</span>

            <div className="flex items-center gap-[5px]">
              <div className="flex items-end gap-[2px]">
                <span className="h-[3px] w-[3px] rounded-[1px] bg-white" />
                <span className="h-[5px] w-[3px] rounded-[1px] bg-white" />
                <span className="h-[7px] w-[3px] rounded-[1px] bg-white" />
                <span className="h-[9px] w-[3px] rounded-[1px] bg-white" />
              </div>

              <div className="relative flex h-[11px] w-[22px] items-center rounded-[3.5px] border border-white/70 p-[1.5px]">
                <span className="h-full w-[80%] rounded-[1.5px] bg-white" />
                <span className="absolute -right-[3px] top-1/2 h-[4px] w-[1.5px] -translate-y-1/2 rounded-r-[1px] bg-white/70" />
              </div>
            </div>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}
