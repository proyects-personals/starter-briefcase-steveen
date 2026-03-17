import type { IAppTheme } from "@/app/domain";

export interface IAnimatedBackground {
  width?: string | number;
  height?: string | number;
  opacity?: number;
  circleCount?: number;
  theme: IAppTheme;
}
