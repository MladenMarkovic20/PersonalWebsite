import ListComponent from './ListComponent';

export const sectionContext = (title: string, data: string[]) => (
  <div className="flex w-full flex-col items-center p-2 text-justify xl:h-full xl:w-1/3">
    <h3 className="self-center pb-4 text-center text-base font-bold uppercase underline decoration-black decoration-solid decoration-2 underline-offset-4 xl:pl-2 xl:text-left">
      {title}
    </h3>
    {data.map((sentence: string, index: number) => (
      <ListComponent key={index} bulletList={sentence} />
    ))}
  </div>
);
