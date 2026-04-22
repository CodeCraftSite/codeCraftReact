import Form from "./Form";
import { Badge } from "./ui/badge";

function ContactInfo() {
  return (
    <section className="max-w-full w-full rounded-2xl border border-border p-8">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="md:pr-10">
          <Badge className="h-9 rounded-full px-4 py-2 text-sm">
            Оставить заявку
          </Badge>

          <h2 className="mt-6 text-5xl font-bold ">
            Расскажите, что нужно сделать — мы разберём задачу по‑взрослому.
          </h2>

          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Оставьте короткое описание, прикрепите ТЗ или материалы, выберите
            ориентир по бюджету и контакт. Так входящее обращение сразу будет
            похоже на реальный старт проекта, а не на абстрактную форму
            “свяжитесь со мной”.
          </p>

          <ul className="mt-6 space-y-3 text-lg list-disc">
            <li className="flex gap-3">
              — первичный разбор задачи и формата работ
            </li>
            <li className="flex gap-3">
              — понятная обратная связь по следующему шагу
            </li>
            <li className="flex gap-3">
              — предварительная оценка диапазона и состава работ
            </li>
          </ul>

          <div className="mt-8 rounded-3xl border border-border bg-input/30 p-5 text-base text-muted-foreground">
            Подходит для сайтов, внутренних платформ, desktop‑продуктов,
            secure‑system, AI‑сервисов и нестандартных инженерных задач.
          </div>
        </div>

        <div className="md:border-l md:border-border md:pl-10">
          <Form />
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
