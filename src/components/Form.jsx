import { useState } from "react";

import { Button } from "@/components/ui/button";
import * as z from "zod";

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

function Form() {
  const [budget, setBudget] = useState("");

  const formSchema = z.object({
    name: z
      .string()
      .min(2, "Имя должно иметь как минимум 2 символа")
      .max(32, "Имя не должно превышать 32 символа"),
    lastname: z
      .string()
      .min(2, "Фамилия должна иметь как минимум 2 символа")
      .max(100, "Фамилия не должна превышать 100 символов"),
    phone: z.string().min(6).max(32),
    company: z.string().max(40).optional(),
    price: z.enum(["10-30", "30-60", "60-100", "100+"]),
    email: z.string().email().optional(),
  });

  return (
    <form>
      <FieldGroup>
        <FieldSet>
          <FieldGroup className="grid grid-cols-2 gap-x-6 gap-y-6">
            <Field>
              <FieldLabel htmlFor="checkout-name">Имя</FieldLabel>
              <Input id="checkout-name" placeholder="Иван" required />
            </Field>

            <Field>
              <FieldLabel htmlFor="checkout-lastname">Фамилия</FieldLabel>
              <Input id="checkout-lastname" placeholder="Иванов" required />
            </Field>

            <Field>
              <FieldLabel htmlFor="checkout-phone">Номер телефона</FieldLabel>
              <Input
                id="checkout-phone"
                placeholder="+7 (999) 123-45-67"
                required
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="checkout-company">
                Компания
                <span className="font-normal text-muted-foreground">
                  {" "}
                  · необязательно
                </span>
              </FieldLabel>
              <Input
                id="checkout-company"
                placeholder="Название компании, если есть"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="checkout-budget">
                Вилка цены / бюджет
              </FieldLabel>
              <SelectBudget
                budget={budget}
                setBudget={setBudget}
              ></SelectBudget>
            </Field>

            <Field>
              <FieldLabel htmlFor="checkout-email">
                Email
                <span className="font-normal text-muted-foreground">
                  {" "}
                  · необязательно
                </span>
              </FieldLabel>
              <Input
                id="checkout-email"
                type="email"
                placeholder="name@company.com"
              />
              <FieldDescription>
                Можно оставить пустым, если удобнее общаться по телефону.
              </FieldDescription>
            </Field>

            <div className="col-span-2 rounded-3xl border border-border bg-input/30 px-4 py-3 text-sm">
              Чем точнее бюджетная вилка и описание задачи, тем быстрее можно
              дать полезную обратную связь.
            </div>

            <Field className="col-span-2">
              <FieldLabel htmlFor="checkout-task">Что нужно сделать</FieldLabel>
              <Textarea
                id="checkout-task"
                placeholder="Опишите задачу: какой продукт нужен, в каком состоянии проект сейчас, что уже есть, что нужно спроектировать, разработать или упаковать."
                className="min-h-40 resize-none"
              />
            </Field>

            <div className="col-span-2 rounded-3xl border border-border border-dashed bg-transparent p-4 shadow-lg">
              <div className="text-sm font-medium">
                Прикрепить файл ТЗ / материалы
                <span className="font-normal text-muted-foreground">
                  {" "}
                  · необязательно
                </span>
              </div>
              <div className="mt-3 flex items-center gap-3 rounded-3xl border border-transparent bg-input/50 px-3 py-2">
                <input
                  id="checkout-attachment"
                  type="file"
                  className="w-full text-sm file:mr-3 file:rounded-2xl file:border-0 file:bg-background file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-foreground"
                />
              </div>
              <FieldDescription className="mt-3">
                Подойдут ТЗ, схемы, мокапы, выгрузки, скриншоты и любые рабочие
                материалы.
              </FieldDescription>
            </div>
          </FieldGroup>
        </FieldSet>

        <FieldSet>
          <FieldGroup className="grid items-center gap-x-6 gap-y-6 md:grid-cols-2">
            <Field>
              <Button type="submit" size="lg">
                Оставить заявку
              </Button>
            </Field>
            <div className="text-sm text-muted-foreground">
              Отправляя заявку, вы соглашаетесь с политикой Конфидициальности на
              сайте
            </div>
          </FieldGroup>
        </FieldSet>
      </FieldGroup>
    </form>
  );
}

export default Form;
