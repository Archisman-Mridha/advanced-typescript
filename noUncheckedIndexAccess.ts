const record: Record<string, string[ ]>= { }

/*
    In the tsconfig.json file, if we set:
        "noUncheckedIndexedAccess": true

    then only doing `record.field.push("test item")` will throw an error. The typescript compiler will infer that there is
    no existing field named `field` in the record. So thats'y we need to first, create that field in the record like this :
*/
if(!record.field)
    record.field= [ ]

record.field.push("test item")