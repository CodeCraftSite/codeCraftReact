import { AnimatedBadge } from "./ui/animatedbadge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

function FullInfoCard({ isOpen, setOpen }) {
  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogContent
        className="max-w-none! w-[min(1500px,calc(100%-18px))]! max-h-[calc(100vh-36px)]! p-6 rounded-2xl
  "
      >
        <DialogHeader>
          <DialogTitle>
            <div className="flex flex-wrap gap-2 border-b border-gray-400 py-1 ">
              <AnimatedBadge
                text="Project View"
                borderColor="via-yellow-500"
                className="bg-gray-900"
              />
              <AnimatedBadge
                text="Graphics & Engines"
                className="bg-gray-900"
              />
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-4 my-5">
                <AnimatedBadge
                  text="3D / Graphics Runtime"
                  borderColor="via-yellow-500"
                  className="bg-gray-900"
                />
                <AnimatedBadge
                  text="Engine Architecture + Rendering"
                  className="bg-gray-900"
                />

                <AnimatedBadge text="11 месяцев" className="bg-gray-900" />

                <AnimatedBadge text="Java" className="bg-gray-900" />

                <AnimatedBadge text="Vulkan" className="bg-gray-900" />

                <AnimatedBadge text="OpenGL" className="bg-gray-900" />
              </div>
              <h1 className="text-5xl font-semibold">
                KWD 3D Engine (Java + Vulkan/OpenGL)
              </h1>
            </div>
          </DialogTitle>

          <DialogDescription className="text-left text-xl">
            Собственный 3D‑движок для визуализаций, симуляторов и интерактивных
            инструментов. Архитектура разделяет рендер‑бэкенды и позволяет
            управлять производительностью и жизненным циклом GPU‑ресурсов на
            уровне платформы.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default FullInfoCard;
