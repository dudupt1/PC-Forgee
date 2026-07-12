 type Option = {
  label: string;
  value: string;
};

type SelectProps = {
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
};

export default function Select({
  options,
  value = "",
  onChange,
  placeholder = "Selecionar...",
}: SelectProps) {
  return (
    <select
      value={value}
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
    >
      <option value="">
        {placeholder}
      </option>

      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
}