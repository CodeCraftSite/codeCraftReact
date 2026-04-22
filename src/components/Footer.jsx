import { Button } from "./ui/button";
import { ButtonGroup } from "./ui/button-group";

function Footer() {
  const buttons = [
    { name: "Продукты", href: "#" },
    { name: "Услуги", href: "#" },
    { name: "Showcase", href: "#" },
    { name: "Процесс", href: "#" },
    { name: "Экспертиза", href: "#" },
    { name: "Контакты", href: "#" },
  ];

  return (
    <footer className="flex flex-row justify-between">
      <p>© CodeCraft Studio — все права защищены</p>

      <div className="flex items-center gap-6">
        <ButtonGroup>
          {buttons.map((button) => (
            <Button
              key={button.name}
              variant="link"
              size="sm"
              className=" text-base"
            >
              <a href={button.href}>{button.name}</a>
            </Button>
          ))}
        </ButtonGroup>
      </div>
    </footer>
  );
}
export default Footer;
