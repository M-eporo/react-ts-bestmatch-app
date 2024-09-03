type ButtonProps = {
  text: string | number;
  buttonColor: string;
  handler?: () => void;
  textColor?: "yellow" | "silver";
  padding: [number, number, number, number];
  borderRadius?: number;
};

const Button = ({ text, buttonColor, handler, textColor, padding, borderRadius }: ButtonProps) => {
  return (
    <button
      onClick={handler}
      style={{
        backgroundColor: buttonColor,
        padding: `${padding[0]}px
                  ${padding[1]}px
                  ${padding[2]}px
                  ${padding[3]}px`,
        color: textColor,
        borderRadius: borderRadius,
      }}
    >
      {text}
    </button>
  );
};

export default Button;