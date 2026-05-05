import { Link } from "react-scroll";

import { useState } from "react";
import { useBrandData } from "../hooks/useBrandApi";
import { useHeaderData } from "../hooks/useHeaderData";
import { useNavigationData } from "../hooks/useNavigation";
import { MobileBtn } from "./MobileBtn";
import TalkAboutProject from "./TalkAboutProject";
import { ThemeButton } from "./ThemeButton";
import { Button } from "./ui/button";
import { ButtonGroup } from "./ui/button-group";
import WatchProjectBtn from "./WatchProjectBtn";

function Header() {
  const { brand } = useBrandData();
  const { navigations } = useNavigationData();
  const { headerInfo } = useHeaderData();

  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50  w-full border-b border-border bg-background/95 text-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-between py-5">
        <div className="flex flex-col">
          <h1 className="text-lg font-semibold">{brand?.data?.title}</h1>
        </div>

        <div className="hidden items-center rounded-2xl border border-border bg-muted/40 p-1 px-4 sm:inline-flex">
          <ButtonGroup className="gap-4">
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

        <div className="flex flex-row items-center gap-2 mx-2">
          <ThemeButton />
          <MobileBtn isOpen={() => setOpen((v) => !v)} />
        </div>

        <div className="hidden items-center gap-4 sm:flex">
          <WatchProjectBtn projectsButton={headerInfo?.data?.projectsButton} />
          <TalkAboutProject contactButton={headerInfo?.data?.contactButton} />
        </div>
      </div>

      {open && (
        <div className="w-full border-t border-border bg-background/95 px-4 py-4 text-foreground backdrop-blur supports-backdrop-filter:bg-background/80 sm:hidden">


          <ButtonGroup className="flex w-full flex-col gap-4">
            {navigations?.data?.map((nav) => (
              <Button
                key={nav.label}
                variant="outline"
                size="sm"
                className="cursor-pointer text-base text-foreground"
                asChild
              >
                <Link
                  to={nav.href.replace("#", "")}
                  smooth={true}
                  duration={500}
                  offset={-96}
                  onClick={() => setOpen(false)}
                >
                  {nav.label}
                </Link>
              </Button>
            ))}
          </ButtonGroup>
        </div>
      )}
    </header>
  );
}

export default Header;
