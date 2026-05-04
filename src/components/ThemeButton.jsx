import { useTheme } from "../hooks/useTheme.jsx";
import { Switch } from "./ui/switch";

export function ThemeButton() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <Switch
        checked={theme === "dark"}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
      />
    </div>
  );
}
