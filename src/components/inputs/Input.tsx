interface IInput {
  label: string;
  type: string;
  placeholder: string;
  value: string;
}

const Input = ({ label, type, placeholder, value }: IInput) => {
  return (
    <div>
      <label className="flex flex-col gap-1 ">
        <span className="text-xs font-bold">{label}</span>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          className="w-full p-2 transition-all ease-in border-none rounded-sm outline-none appearance-none bg-tertiary placeholder-primary-default placeholder:text-sm shadow-default focus:shadow-inside hover:shadow-inside"
        />
      </label>
    </div>
  );
};

export default Input;