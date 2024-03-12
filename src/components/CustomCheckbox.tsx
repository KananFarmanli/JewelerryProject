
type CustomCheckbox = {
  checked: boolean;
  onChange: () => void;
  name:string
};
function CustomCheckbox({ checked, onChange, name }: CustomCheckbox) {
  return (
    <div className="flex items-center">
      <label className="inline-flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            className="sr-only"
            checked={checked}
            onChange={onChange}
          />
          <div className="w-3 h-3 bg-white border-2 border-black flex justify-center items-center">
            {checked && <div className="w-1 h-1 bg-black "></div>}
          </div>
        </div>
        <span className="ml-2 text-black">{name}</span>
      </label>
    </div>
  );
}

export default CustomCheckbox;
