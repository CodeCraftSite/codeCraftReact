import { useState } from "react";

import { Button } from "@/components/ui/button";

import SelectBudget from "./SelectBudget";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "./ui/field";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

function Form({ data }) {
  const [budget, setBudget] = useState("");

  const f = data?.fields;

  if (!f) {
    return null;
  }

  return (
    <form>
      <FieldGroup>
        <FieldSet>
          <FieldGroup className="grid grid-cols-2 gap-x-6 gap-y-6">
            <Field>
              <FieldLabel htmlFor="checkout-name">{f.firstName?.label}</FieldLabel>
              <Input
                id="checkout-name"
                placeholder={f.firstName?.placeholder}
                required
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="checkout-lastname">
                {f.lastName?.label}
              </FieldLabel>
              <Input
                id="checkout-lastname"
                placeholder={f.lastName?.placeholder}
                required
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="checkout-phone">{f.phone?.label}</FieldLabel>
              <Input
                id="checkout-phone"
                placeholder={f.phone?.placeholder}
                required
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="checkout-company">
                {f.company?.label}
              </FieldLabel>
              <Input
                id="checkout-company"
                placeholder={f.company?.placeholder}
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="checkout-budget">{f.budget?.label}</FieldLabel>
              <SelectBudget
                budget={budget}
                setBudget={setBudget}
                options={data.budgetOptions}
                placeholder={f.budget?.placeholder}
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="checkout-email">{f.email?.label}</FieldLabel>
              <Input
                id="checkout-email"
                type="email"
                placeholder={f.email?.placeholder}
              />
              {f.email?.hint ? (
                <FieldDescription>{f.email.hint}</FieldDescription>
              ) : null}
            </Field>

            {data.rangeHint ? (
              <div className="col-span-2 rounded-3xl border border-border bg-input/30 px-4 py-3 text-sm">
                {data.rangeHint}
              </div>
            ) : null}

            <Field className="col-span-2">
              <FieldLabel htmlFor="checkout-task">{f.task?.label}</FieldLabel>
              <Textarea
                id="checkout-task"
                placeholder={f.task?.placeholder}
                className="min-h-40 resize-none"
                required
              />
            </Field>

            <div className="col-span-2 rounded-3xl border border-border border-dashed bg-transparent p-4 shadow-lg">
              <div className="text-sm font-medium">{f.file?.label}</div>
              <div className="mt-3 flex items-center gap-3 rounded-3xl border border-transparent bg-input/50 px-3 py-2">
                <input
                  id="checkout-attachment"
                  type="file"
                  className="w-full text-sm file:mr-3 file:rounded-2xl file:border-0 file:bg-background file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-foreground"
                />
              </div>
              {f.file?.hint ? (
                <FieldDescription className="mt-3">{f.file.hint}</FieldDescription>
              ) : null}
            </div>
          </FieldGroup>
        </FieldSet>

        <FieldSet>
          <FieldGroup className="grid items-center gap-x-6 gap-y-6 md:grid-cols-2">
            <Field>
              <Button type="submit" size="lg">
                {data.submitButton}
              </Button>
            </Field>
            {data.submitNote ? (
              <div className="text-sm text-muted-foreground">{data.submitNote}</div>
            ) : null}
          </FieldGroup>
        </FieldSet>
      </FieldGroup>
    </form>
  );
}

export default Form;
