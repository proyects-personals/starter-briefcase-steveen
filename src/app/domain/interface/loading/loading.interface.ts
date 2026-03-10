export interface LoadingOptionsInterface {
  logo?: string;
  color?: string;
  size?: number;
}

export interface LoadingInferface {
  show: (options?: LoadingOptionsInterface) => void;
  hide: () => void;
  logo?: string;
  color?: string;
  size?: number;
}
