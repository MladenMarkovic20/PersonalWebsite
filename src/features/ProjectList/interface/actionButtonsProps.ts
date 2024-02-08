export interface ActionButtonsProps {
  handleClientClick: (e: React.MouseEvent<HTMLAnchorElement>, type: string) => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setProjectIndex: React.Dispatch<React.SetStateAction<number>>;
  type: string;
  index: number;
  link: string;
}
