import { Link } from "react-scroll";
import { Button } from "./ui/button";
import { ButtonGroup } from "./ui/button-group";

function Footer() {
  const buttons = [
    { name: "Продукты", href: "product" },
    { name: "Услуги", href: "services" },
    { name: "Витрина", href: "showcase" },
    { name: "Процесс", href: "process" },
    { name: "Экспертиза", href: "capatabilies" },
    { name: "Контакты", href: "contacs" },
  ];

  return (
    <footer className="flex flex-row justify-between text-muted-foreground">
      <p>© CodeCraft Studio — все права защищены</p>

      <div className="flex items-center gap-6">
        <ButtonGroup>
          {buttons.map((button) => (
            <Button
              key={button.name}
              variant="link"
              size="sm"
              className="text-base text-foreground"
              asChild
            >
              <Link to={button.href} smooth={true} duration={500} offset={-96}>
                {button.name}
              </Link>
            </Button>
          ))}
        </ButtonGroup>
      </div>
    </footer>
  );
}
export default Footer;
