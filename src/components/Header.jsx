import { Link } from "react-scroll";
import { useBrandData } from "../hooks/useBrandApi";
import { useHeaderData } from "../hooks/useHeaderData";
import { useNavigationData } from "../hooks/useNavigation";
import TalkAboutProject from "./TalkAboutProject";
import { ThemeButton } from "./ThemeButton";
import { Button } from "./ui/button";
import { ButtonGroup } from "./ui/button-group";
import WatchProjectBtn from "./WatchProjectBtn";

function Header() {
  const { brand } = useBrandData();
  const { navigations } = useNavigationData();
  const { headerInfo } = useHeaderData();

  console.log(headerInfo);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 text-foreground backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between py-5">
        <div className="flex flex-col">
          <h1 className="text-lg font-semibold">{brand?.data?.title}</h1>
        </div>

        <div className="flex items-center gap-6">
          <ButtonGroup>
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

        <ThemeButton></ThemeButton>

        <div className="flex items-center gap-4">
          <WatchProjectBtn projectsButton={headerInfo?.data?.projectsButton} />
          <TalkAboutProject contactButton={headerInfo?.data?.contactButton} />
        </div>
      </div>
    </header>
  );
}

export default Header;
