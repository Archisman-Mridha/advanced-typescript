type Letters= "a" | "b" | "c"

type CRemover<T>=
    //* this is called `distributivity` in typescript
    /*
        if T is a union, typescript will map through each of its fields.
        For each field it will apply this condition. When `"c"` is encountered, then typescript removes it from the enum
        because of the `never` type.
    */
    T extends "c" ? never: T

type LettersWithoutC= CRemover<Letters>