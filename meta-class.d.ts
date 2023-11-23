import { ZodObject, ZodRawShape, infer as zinfer } from "zod";

export const MetaClass: {
  from: {
    keys: <IDefault = never, I extends IDefault = IDefault>(
      keys: (keyof I)[]
    ) => new (argsObj: I) => I;
    zodSchema: <T extends ZodRawShape>(
      schema: ZodObject<T>
    ) => new (argsObj: zinfer<typeof schema>) => zinfer<typeof schema>;
  };
};
