export interface AppModalProps {
  title?: string;
  description?: string;
  open: boolean;
  close: () => void;
}

export type UseModal = () => [boolean, () => void, () => void];
