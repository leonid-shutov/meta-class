import { ZodObject, ZodRawShape, infer as zinfer } from "zod";

export type TStrategyOutput<TMetaClass> = { metaClass: TMetaClass; metaData: { keys: string[] } };

export type TMetaClass = {
  fromKeys: <IDefault = any, I extends IDefault = IDefault>(
    keys: (keyof I)[]
  ) => TStrategyOutput<new (argsObj: I) => I>;
  fromZodSchema: <T extends ZodRawShape>(
    schema: ZodObject<T>
  ) => TStrategyOutput<new (argsObj: zinfer<typeof schema>) => zinfer<typeof schema>>;
};

export const MetaClass: TMetaClass;
