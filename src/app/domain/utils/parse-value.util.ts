export interface IParseValueUtil {
  parse<T>(raw: string | null, fallback: T): T;
}

export class ParseValueUtil implements IParseValueUtil {
  /**
   * Type Guard para validar y retornar el tipo correcto sin 'as' ni 'any'
   */
  private isType<T>(value: unknown, target: T): value is T {
    return typeof value === typeof target;
  }

  parse<T>(raw: string | null, fallback: T): T {
    if (raw === null) {
      return fallback;
    }

    const type = typeof fallback;

    if (type === "string") {
      const val: unknown = raw;
      if (this.isType(val, fallback)) {
        return val;
      }
    }

    if (type === "number") {
      const num = Number(raw);
      const val: unknown = Number.isNaN(num) ? fallback : num;
      if (this.isType(val, fallback)) {
        return val;
      }
    }

    if (type === "boolean") {
      const boolValue: unknown =
        raw === "true" ? true : raw === "false" ? false : fallback;
      if (this.isType(boolValue, fallback)) {
        return boolValue;
      }
    }

    try {
      const parsed: unknown = JSON.parse(raw);
      if (parsed !== null && this.isType(parsed, fallback)) {
        return parsed;
      }
    } catch {
      return fallback;
    }

    return fallback;
  }
}
