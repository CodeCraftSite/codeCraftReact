import { AnimatedBadge } from "./ui/animatedbadge";

function InfoCard(props) {
  return (
    <div
      className={`h-full ${props.class || "w-1/2"} border border-border p-5 rounded-4xl animate-fade-in`}
    >
      <div className="flex flex-col gap-4">
        <AnimatedBadge
          text={props.name}
          borderColor="via-purple-500"
          className=""
        />
        <h2 className="text-3xl font-bold text-foreground">{props.title}</h2>

        <p className="text-lg text-left text-muted-foreground">
          {props.description}
        </p>

        {props.items_list && props.items_list.length > 0 && (
          <ul className="list-disc space-y-2 pl-6 text-lg font-bold text-muted-foreground">
            {props.items_list.map((item, index) => (
              <li key={index}>{item.text}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default InfoCard;
