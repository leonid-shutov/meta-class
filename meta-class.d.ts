import { ZodObject, ZodRawShape, infer as zinfer } from "zod";

export type TStrategyOutput<TMetaClass> = { metaClass: TMetaClass; metaData: { keys: string[] } };

export type TMetaClass = {
  fromKeys: <TMetaKeys>(
    keys: (keyof TMetaKeys)[]
  ) => TStrategyOutput<new <TDomainModel extends TMetaKeys>(argsObj: TDomainModel) => TDomainModel>;
  fromZodSchema: <TMetaSchema extends ZodRawShape>(
    schema: ZodObject<TMetaSchema>
  ) => TStrategyOutput<new <TDomainModel extends zinfer<typeof schema>>(argsObj: TDomainModel) => TDomainModel>;
};

export const MetaClass: TMetaClass;
