import type { IAppTheme } from "@/app/domain";
import type { TFunction } from "i18next";

export interface IControls {
  onPrev: () => void;
  onNext: () => void;
  theme: IAppTheme;
  translate: TFunction<"translation", undefined>;
}

export interface IIndicators {
  length: number;
  current: number;
  onChange: (idx: number) => void;
  theme: IAppTheme;
  translate: TFunction<"translation", undefined>;
}

export interface ICarouselItem {
  id: number;
  title: string;
  description: string;
  image: string;
  imageHeight?: string;
}

export interface ISlide {
  item: ICarouselItem;
  direction: number;
  theme: IAppTheme;
  translate: TFunction<"translation", undefined>;
}

export interface ICarousel {
  items: ICarouselItem[];
  height?: string;
  autoPlayInterval?: number;
  translate: TFunction<"translation", undefined>;
  theme: IAppTheme;
}
