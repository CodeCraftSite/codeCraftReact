import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function ProofCard({ meta, title, text, className }) {
  return (
    <Card
      className={cn(
        "h-full rounded-3xl border border-border bg-card py-6 text-left shadow-sm ring-0",
        className,
      )}
    >
      <CardContent className="flex flex-col gap-3 px-6 py-0 sm:gap-4">
        {meta ? (
          <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-2563eb)] dark:text-primary">
            {meta}
          </p>
        ) : null}
        {title ? (
          <h3 className="text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-[1.625rem]">
            {title}
          </h3>
        ) : null}
        {text ? (
          <p className="text-base font-normal leading-relaxed text-muted-foreground">
            {text}
          </p>
        ) : null}
      </CardContent>
    </Card>
  );
}
