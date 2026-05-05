import { Menu } from "lucide-react";
import { Button } from "./ui/button";

export function MobileBtn(props) {
  return (
    <Button
      className="md:hidden"
      variant="outline"
      size="icon"
      onClick={props.isOpen}
    >
      <Menu></Menu>
    </Button>
  );
}
