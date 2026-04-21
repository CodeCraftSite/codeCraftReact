import { Badge } from "./ui/badge";

function InfoCard(props) {
  return (
    <div
      className={`h-full ${props.class || "w-1/2"} border border-gray-400 p-5 rounded-4xl animate-fade-in`}
    >
      <div className="flex flex-col gap-4">
        <Badge className="text-base p-4 ">{props.name}</Badge>
        <h2 className="text-3xl font-bold text-gray-800">{props.title}</h2>

        <p className="text-lg text-gray-600 text-left">{props.description}</p>

        {props.items_list && props.items_list.length > 0 && (
          <ul className="list-disc pl-6 space-y-2 text-gray-600 text-lg font-bold">
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
