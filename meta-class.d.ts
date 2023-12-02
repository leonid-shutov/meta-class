import { ZodObject, ZodRawShape, infer as zinfer } from "zod";

export type TStrategyOutput<TMetaClass> = {
  metaClass: TMetaClass;
  metaData: { keys: string[] };
};

export type TMetaClass = {
  fromKeys: <TMetaModel>(keys: (keyof TMetaModel)[]) => TStrategyOutput<new (argsObj: TMetaModel) => TMetaModel>;
  fromZodSchema: <TMetaSchema extends ZodRawShape>(
    schema: ZodObject<TMetaSchema>
  ) => TStrategyOutput<new (argsObj: zinfer<typeof schema>) => zinfer<typeof schema>>;
};

export const MetaClass: TMetaClass;
