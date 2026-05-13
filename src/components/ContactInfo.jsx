import { useContactApi } from "../hooks/useContactApi";
import Form from "./Form";
import { AnimatedBadge } from "./ui/animatedbadge";

function ContactInfo() {
  const { contactInfo } = useContactApi();
  console.log(contactInfo);


  return (
    <section
      className="max-w-full w-full rounded-2xl border border-border p-8"
      id="contact"
    >
      <div className="grid gap-10 md:grid-cols-2">
        <div className="md:pr-10">
          <AnimatedBadge
            text={contactInfo?.data?.eyebrow}
            borderColor="via-purple-500"
            className="max-w-full"
            contentClassName="text-[11px] font-semibold uppercase tracking-widest"
            textClassName="whitespace-normal sm:whitespace-nowrap"
            icon={
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                aria-hidden
              />
            }
          />

          <h2 className="mt-6 text-5xl font-bold text-foreground">{contactInfo?.data?.title}</h2>

          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {contactInfo?.data?.text}
          </p>

          {contactInfo?.data?.bullets?.length ? (
            <ul className="mt-6 list-disc space-y-3 text-lg text-muted-foreground">
              {contactInfo?.data?.bullets.map((item) => (
                <li key={item} className="flex gap-3">
                  — {item}
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className="md:border-l md:border-border md:pl-10">
          <Form data={contactInfo?.data} />
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
