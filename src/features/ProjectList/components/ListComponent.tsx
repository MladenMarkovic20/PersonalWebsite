function ListComponent({ bulletList }: { bulletList: string }) {
  return (
    <div className="self-start">
      <ul>
        <li className="leading-2 flex items-start justify-start gap-2 px-2 leading-6 xl:m-1 xl:pl-2">
          <img src="/assets/icons/hand-point-right-fill.svg" className="mt-1" alt="bulletPoint" />
          {bulletList}
        </li>
      </ul>
    </div>
  );
}

export default ListComponent;
