const object= {
    foo: {
        a: true,
        b: 1
    },
    bar: {
        c: false,
        d: "2"
    }
}

const getTransformedDeepValue= 
    <
        Object,
        KeyForFirstLevel extends keyof Object,
        KeyForSecondLevel extends keyof Object[KeyForFirstLevel]

    >(object: Object, keyForFirstLevel: KeyForFirstLevel, keyForSecondLevel: KeyForSecondLevel)
        : Object[KeyForFirstLevel][KeyForSecondLevel] => {

        let deepValue= object[keyForFirstLevel][keyForSecondLevel]

        //TODO: perform transformation

        return deepValue
    }

const result= getTransformedDeepValue(object, "foo", "a")