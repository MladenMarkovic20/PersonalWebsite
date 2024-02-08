function HorizontalLine({ text }: { text: string }) {
  return (
    <div className="relative flex w-full items-center justify-center bg-red-50 font-body">
      <hr className="h-px w-11/12 border-2 border-stone-50" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-stone-50 p-2 text-xs">
        {text}
      </div>
    </div>
  );
}

export default HorizontalLine;
