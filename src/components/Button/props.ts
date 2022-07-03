type ButtonProps = {
  size?: 'small' | 'medium' | 'big';
  variant?: 'primary' | 'secondary' | 'tertiary';
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: React.ReactNode;
  className?: string;
};

export default ButtonProps;
