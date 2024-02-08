import { Hashtag } from '../interface/hashTag';

function HashtagDiv({ hashtag, hashTagIndex }: Hashtag) {
  return (
    <div
      className="mr-2 inline bg-slate-400 px-5 py-1 text-xs lg:text-base xl:text-lg"
      key={hashTagIndex}
    >
      {hashtag}
    </div>
  );
}

export default HashtagDiv;
