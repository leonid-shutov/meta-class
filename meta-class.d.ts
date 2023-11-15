declare const metaClass: {
  MetaClass: {
    fromKeys: <IDefault = never, I extends IDefault = IDefault>(keys: (keyof I)[]) => new (argsObj: I) => I;
  };
};

export = metaClass;
