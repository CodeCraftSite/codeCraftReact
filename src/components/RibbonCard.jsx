import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

function ribbonList(ribbon) {
  const fromApi = Array.isArray(ribbon)
    ? ribbon
    : (ribbon?.data?.items ?? ribbon?.data);
  return Array.isArray(fromApi) ? fromApi : [];
}

export function RibbonCard({ className, ribbon }) {
  const items = ribbonList(ribbon);

  return (
    <div
      className={cn(
        "grid gap-4 animate-fade-in sm:grid-cols-2 lg:grid-cols-4 lg:gap-6",
        className,
      )}
    >
      {items.map((item, i) => (
        <Card
          key={`${item.title}-${i}`}
          className={cn(
            "flex h-full flex-col rounded-2xl border border-sky-200/80 bg-white text-left",
            "shadow-[0_10px_40px_-12px_rgba(56,189,248,0.35)]",
            "dark:border-border dark:bg-card dark:shadow-none",
          )}
        >
          <CardContent className="flex flex-1 flex-col gap-3 px-6 py-7 sm:gap-3.5 sm:px-7 sm:py-8">
            <div
              className="flex size-10 shrink-0 items-center justify-center rounded-full bg-sky-100 text-xs font-bold tabular-nums text-primary sm:size-11 sm:text-sm dark:bg-primary/20"
              aria-hidden
            >
              {item.index ?? item.step ?? String(i + 1).padStart(2, "0")}
            </div>
            <p className="text-[11px] font-bold uppercase leading-none tracking-[0.14em] text-primary sm:text-xs">
              {item.meta ?? item.label ?? item.category}
            </p>
            <div className="mt-1 flex flex-col gap-2">
              <h3 className="text-lg font-bold leading-snug tracking-tight text-foreground sm:text-xl lg:text-[1.375rem]">
                {item.title}
              </h3>
              <p className="text-sm font-normal leading-relaxed text-muted-foreground sm:text-[0.9375rem]">
                {item.text ?? item.description}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
