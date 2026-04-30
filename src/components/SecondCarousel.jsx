import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

import { useState } from "react";
import { Link } from "react-scroll";
import FullInfoCard from "./FullInfoCard";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

function SecondCarousel({ categoryTitle, categoryMeta, cases = [], onBack }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white p-0 text-gray-900 shadow-sm">
      <div className="px-6 py-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-3">
              <Badge className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold tracking-wide text-gray-900">
                КЕЙСЫ КАТЕГОРИИ
              </Badge>
              <span className="text-base text-gray-700">
                {categoryTitle ?? "Выбранная категория"}: {cases.length} кейса в
                3D‑витрине.
              </span>
            </div>
            {categoryMeta ? (
              <p className="mt-1 text-sm text-gray-500">{categoryMeta}</p>
            ) : null}
          </div>

          <div className="flex items-center gap-3">
            {onBack ? (
              <Button
                variant="outline"
                className="rounded-full"
                onClick={onBack}
              >
                Назад
              </Button>
            ) : null}
          </div>
        </div>
      </div>

      <div className="px-6 pb-6">
        {cases.length === 0 ? (
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6">
            <p className="text-base text-gray-600">
              Для этой категории пока нет кейсов. Передай массив в проп `cases`.
            </p>
          </div>
        ) : (
          <Carousel className="w-full">
            <div className="pointer-events-none absolute right-6 py-2 z-10 flex items-center gap-2">
              <CarouselPrevious
                variant="outline"
                size="icon"
                className="pointer-events-auto h-10 w-10 rounded-full"
              />
              <CarouselNext
                variant="outline"
                size="icon"
                className="pointer-events-auto h-10 w-10 rounded-full"
              />
            </div>

            <CarouselContent className="-ml-6">
              {cases.map((caseItem) => (
                <CarouselItem
                  key={caseItem.id ?? caseItem.title}
                  className="basis-full pl-6"
                >
                  <Card className="rounded-2xl border border-gray-200 bg-white shadow-sm">
                    <CardContent className="grid gap-6 p-7 md:grid-cols-[1.15fr_0.85fr]">
                      <div className="flex flex-col gap-5">
                        <div className="flex flex-wrap items-center gap-3">
                          <Badge className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold tracking-wide text-gray-900">
                            {caseItem.category ?? categoryTitle ?? "CATEGORY"}
                          </Badge>
                          {caseItem.duration ? (
                            <Badge
                              className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-gray-700"
                              variant="outline"
                            >
                              {caseItem.duration}
                            </Badge>
                          ) : null}
                          {caseItem.demo ? (
                            <Badge
                              className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-gray-700"
                              variant="outline"
                            >
                              {caseItem.demo}
                            </Badge>
                          ) : null}
                        </div>

                        <div className="space-y-3">
                          <h4 className="text-4xl font-semibold leading-tight tracking-tight text-gray-900">
                            {caseItem.title}
                          </h4>
                          {caseItem.description ? (
                            <p className="max-w-2xl text-base leading-relaxed text-gray-600">
                              {caseItem.description}
                            </p>
                          ) : null}
                        </div>

                        <div className="grid gap-3 md:grid-cols-3">
                          <div className="rounded-2xl border border-gray-200 bg-white p-4">
                            <p className="text-xs font-semibold tracking-wide text-gray-400">
                              ОТРАСЛЬ
                            </p>
                            <p className="mt-2 text-base font-medium text-gray-800">
                              {caseItem.industry ?? "—"}
                            </p>
                          </div>
                          <div className="rounded-2xl border border-gray-200 bg-white p-4">
                            <p className="text-xs font-semibold tracking-wide text-gray-400">
                              РОЛЬ
                            </p>
                            <p className="mt-2 text-base font-medium text-gray-800">
                              {caseItem.role ?? "—"}
                            </p>
                          </div>
                          <div className="rounded-2xl border border-gray-200 bg-white p-4">
                            <p className="text-xs font-semibold tracking-wide text-gray-400">
                              СТЕК
                            </p>
                            <p className="mt-2 text-base font-medium text-gray-800">
                              {caseItem.stackLabel ?? "—"}
                            </p>
                          </div>
                        </div>

                        {Array.isArray(caseItem.tags) &&
                        caseItem.tags.length ? (
                          <div className="flex flex-wrap gap-2 pt-1">
                            {caseItem.tags.map((t) => (
                              <Badge
                                key={t}
                                className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-gray-700"
                                variant="outline"
                              >
                                {t}
                              </Badge>
                            ))}
                          </div>
                        ) : null}

                        <div className="mt-2 flex flex-wrap gap-3">
                          <Button
                            className="rounded-full px-6"
                            onClick={() => setOpen(true)}
                          >
                            Открыть кейс
                          </Button>
                          <Button
                            variant="outline"
                            className="rounded-full px-6"
                          >
                            <Link
                              to="contact"
                              smooth={true}
                              duration={500}
                              offset={-96}
                            >
                              Обсудить похожую задачу
                            </Link>
                          </Button>
                        </div>
                      </div>

                      <div className="grid gap-4">
                        <div className="rounded-3xl border border-gray-200 bg-white p-5">
                          <p className="text-xs font-semibold tracking-wide text-gray-400">
                            {caseItem.previewTitle ?? "PREVIEW"}
                          </p>
                          <div className="mt-4 h-28 rounded-2xl border border-gray-200 bg-[linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(0deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-size-[18px_18px] p-4">
                            <div className="flex h-full items-end gap-2">
                              {[18, 34, 26, 48, 40, 62, 54].map((h, i) => (
                                <div
                                  key={i}
                                  className="w-3 rounded-full bg-linear-to-t from-amber-400 to-orange-300"
                                  style={{ height: `${h}%` }}
                                />
                              ))}
                            </div>
                          </div>

                          <p className="mt-4 text-xs font-semibold tracking-wide text-gray-400">
                            STACK SNAPSHOT
                          </p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {(caseItem.stackSnapshot ?? caseItem.tags ?? [])
                              .slice(0, 6)
                              .map((t) => (
                                <Badge
                                  key={t}
                                  className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-gray-700"
                                  variant="outline"
                                >
                                  {t}
                                </Badge>
                              ))}
                          </div>
                        </div>

                        <div className="rounded-3xl border border-gray-200 bg-white p-5">
                          <p className="text-xs font-semibold tracking-wide text-gray-400">
                            SYSTEM LANES
                          </p>
                          <div className="mt-4 space-y-3">
                            {Array.from({ length: 4 }).map((_, i) => (
                              <div
                                key={i}
                                className="h-3 rounded-full bg-gray-100"
                                aria-hidden="true"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        )}
        {open === true && <FullInfoCard isOpen={open} setOpen={setOpen} />}
      </div>
    </div>
  );
}

export default SecondCarousel;
