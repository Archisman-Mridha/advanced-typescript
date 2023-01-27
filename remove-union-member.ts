type Letters= "a" | "b" | "c"

type CRemover<T>= T extends "c" ? never: T

type LettersWithoutC= CRemover<Letters>