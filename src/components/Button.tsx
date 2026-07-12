type ButtonProps = {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
};

export default function Button({
  text,
  onClick,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="
        w-full
        py-4
        px-6
        rounded-xl
        bg-blue-600
        hover:bg-blue-700
        active:scale-95
        disabled:bg-zinc-700
        disabled:cursor-not-allowed
        text-white
        text-lg
        font-semibold
        transition-all
        duration-200
      "
    >
      {text}
    </button>
  );
} 