import { Link } from "react-scroll";
import { useNavigationData } from "../hooks/useNavigation";
import { Button } from "./ui/button";
import { ButtonGroup } from "./ui/button-group";

function Footer() {
  const { navigations } = useNavigationData();

  return (
    <footer className="flex flex-row justify-between text-muted-foreground">
      <p>© CodeCraft Studio — все права защищены</p>

      <div className="flex items-center gap-6">
        <ButtonGroup className="gap-4 px-4">
          {navigations?.data?.map((nav) => (
            <Button
              key={nav.label}
              variant="link"
              size="sm"
              className="cursor-pointer text-base text-foreground"
              asChild
            >
              <Link
                to={nav.href.replace("#", "")}
                smooth={true}
                duration={500}
                offset={-96}
              >
                {nav.label}
              </Link>
            </Button>
          ))}
        </ButtonGroup>
      </div>
    </footer>
  );
}
export default Footer;
