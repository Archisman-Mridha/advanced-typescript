import React from "react"

type StringWithSpecialValues<T extends string>= T | Omit<string, T>

/*
    if we write :
        type IconSize= "xs" | "sm" | string
    then the typescript autocomplete compiler, will merge all the 3 types into string since `"xm"` and `"sm"` are subtypes of
    string.
*/
type IconSize= StringWithSpecialValues<"xs" | "sm">

interface IconProps {
    size: IconSize
}

const Icon= (props: IconProps) => {
    return (
        <></>
    )
}

const App= ( ) => {
    return (
        <>
            <Icon size="sm" />
            <Icon size="5px" />
        </>
    )
}