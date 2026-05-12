import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const DEFAULT_TRUST_PILLS = [
  "Сложные системы",
  "Сайты и web-сервисы",
  "Миграция ПО",
  "AI / Data",
  "Desktop-разработка",
];

const DEFAULT_TRUST_RIGHT =
  "Web / Backend / Desktop / Data / Security / Product delivery";

const pillClass =
  "h-auto min-h-8 rounded-full border-border bg-background px-4 py-2 text-sm font-bold text-foreground whitespace-normal shadow-none dark:bg-muted/50 dark:font-semibold dark:text-primary";

function normalizePillLabel(pill) {
  if (typeof pill === "string") return pill;
  if (pill && typeof pill === "object") {
    return pill.text ?? pill.label ?? "";
  }
  return "";
}

export function TrustComponent({ className, trustPills, trustRight }) {
  const pillsRaw = Array.isArray(trustPills) ? trustPills : [];
  const pills =
    pillsRaw.length > 0
      ? pillsRaw.map(normalizePillLabel).filter(Boolean)
      : DEFAULT_TRUST_PILLS;

  const rightText =
    typeof trustRight === "string" && trustRight.trim()
      ? trustRight
      : DEFAULT_TRUST_RIGHT;

  return (
    <Card
      className={cn(
        "animate-fade-in flex flex-row items-start justify-between gap-5 border border-gray-400 bg-muted/30 py-5 shadow-none ring-0 sm:gap-8 dark:border-0 dark:bg-card",
        className,
      )}
    >
      <CardContent className="flex min-w-0 flex-1 flex-col px-5 py-0 sm:max-w-[62%]">
        <div className="flex flex-wrap gap-2">
          {pills.map((label, index) => (
            <Badge
              key={`${label}-${index}`}
              variant="outline"
              className={pillClass}
            >
              {label}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardContent className="shrink-0 px-5 py-0 sm:max-w-[38%]">
        <CardDescription className="text-left leading-snug">
          {rightText}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
