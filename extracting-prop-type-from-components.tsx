import React from "react"

const TestComponent= (props: { isHidden: boolean }) => {
    return (
        <></>
    )
}

type ExtractPropsType<Component>=
    Component extends React.FunctionComponent<infer PropsType> ? PropsType : never

const componentProps: ExtractPropsType<typeof TestComponent>= {
    isHidden: false
}