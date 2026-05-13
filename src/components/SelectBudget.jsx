import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

function SelectBudget({ budget, setBudget, options, placeholder }) {
  const list = options ?? [];

  return (
    <Select value={budget} onValueChange={setBudget}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {list.map((label) => (
            <SelectItem key={label} value={label}>
              {label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
export default SelectBudget;
