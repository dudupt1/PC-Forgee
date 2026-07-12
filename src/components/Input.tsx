type InputProps = {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: string;
};

export default function Input({
  placeholder = "",
  value = "",
  onChange,
  type = "text",
}: InputProps) {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange?.(e.target.value)}
      className="
        w-full
        bg-zinc-900
        border
        border-zinc-800
        rounded-xl
        px-4
        py-3
        text-white
        outline-none
        focus:border-blue-600
        transition
      "
    />
  );
} 