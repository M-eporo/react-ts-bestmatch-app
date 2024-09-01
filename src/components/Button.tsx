type ButtonProps = {
  text: string;
  buttonColor: string;
  handler?: () => void;
};

const Button = ({ text, buttonColor, handler }: ButtonProps) => {
  return (
    <button
      onClick={handler}
      style={{
        backgroundColor: buttonColor,
      }}
    >
      {text}
    </button>
  );
};

export default Button;