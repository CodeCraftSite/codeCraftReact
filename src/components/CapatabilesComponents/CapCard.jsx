import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

function CapCard({ name, description }) {
  return (
    <Card className="gap-0 py-0 shadow-sm transition duration-300 ease-in-out transform-gpu hover:shadow-md hover:scale-[1.05] ">
      <CardHeader className="gap-4 px-7 py-7">
        <div className="flex size-12 items-center justify-center rounded-2xl border border-gray-200 bg-white">
          <span
            className="size-6 rounded-full bg-gray-200"
            aria-hidden="true"
          />
        </div>

        <CardTitle className="text-3xl font-semibold tracking-tight">
          {name}
        </CardTitle>

        <CardDescription className="text-base leading-relaxed text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

export default CapCard;
