import TalkAboutProject from "./TalkAboutProject";
import { Button } from "./ui/button";
import { ButtonGroup } from "./ui/button-group";
import WatchProjectBtn from "./WatchProjectBtn";

function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-10 py-5">
        <div className="flex flex-col">
          <h1 className="text-lg font-semibold">CodeCraft</h1>
          <p className="text-xs text-gray-400">
            Разработка продуктов для сложных систем
          </p>
        </div>

        <div className="flex items-center gap-6">
          <ButtonGroup>
            <Button variant="link" className="text-white">
              Продукты
            </Button>
            <Button variant="link" className="text-white">
              Услуги
            </Button>
            <Button variant="link" className="text-white">
              Showcase
            </Button>
            <Button variant="link" className="text-white">
              Процесс
            </Button>
            <Button variant="link" className="text-white">
              Экспертиза
            </Button>
            <Button variant="link" className="text-white">
              Контакты
            </Button>
          </ButtonGroup>
        </div>

        <div className="flex items-center gap-4">
          <WatchProjectBtn />
          <TalkAboutProject />
        </div>
      </div>
    </header>
  );
}

export default Header;
