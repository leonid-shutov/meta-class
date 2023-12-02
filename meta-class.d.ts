import { ZodObject, ZodRawShape, infer as zinfer } from "zod";

export type TStrategyOutput<TMetaClass> = {
  metaClass: TMetaClass;
  metaData: { keys: string[] };
};

export type TMetaClass = {
  fromKeys: <TMetaModel>(
    keys: (keyof TMetaModel)[]
  ) => TStrategyOutput<
    new <TDomainModel extends TMetaModel>(argsObj: TDomainModel) => TDomainModel
  >;
  fromZodSchema: <TMetaSchema extends ZodRawShape>(
    schema: ZodObject<TMetaSchema>
  ) => TStrategyOutput<
    new <TDomainModel extends zinfer<typeof schema>>(
      argsObj: TDomainModel
    ) => TDomainModel
  >;
};

export const MetaClass: TMetaClass;
