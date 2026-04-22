import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

function SelectBudget(props) {
  return (
    <Select value={props.budget} onValueChange={props.setBudget}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Выберите диапазон" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="10-30">10 000 – 30 000 ₽</SelectItem>
          <SelectItem value="30-60">30 000 – 60 000 ₽</SelectItem>
          <SelectItem value="60-100">60 000 – 100 000 ₽</SelectItem>
          <SelectItem value="100+">100 000 ₽+</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
export default SelectBudget;
