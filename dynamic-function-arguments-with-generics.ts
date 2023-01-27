enum EventTypes {
    Signin, Signout
}

type Events=
    | {
        type: EventTypes.Signin,
        payload: {
            username: string
            password: string
        }
    }
    | { type: EventTypes.Signout }

function sendEvent<ProvidedEventType extends Events["type"]>(

    /*
        we take the event-type of the provided event object and match it with the object associated with that event type in
        the `Events` type.

        For example, the provided event object is :
            {
                type: EventTypes.Signin,
                payload: {
                    username: "archi",
                    password: "password"
                }
            }

        We will match the `type` field of this object and find out that in the `Events` enum it corresponds to:
            {
                type: EventTypes.Signin,
                payload: {
                    username: string,
                    password: string
                }
            }

        This will then be the type of argument accepted by the function for that provided events object.
        * In this way, we can dynamically decide the type of arguments this function will receive.
    */
    ...arguments: Extract<Events, { type: ProvidedEventType }> extends { payload: infer Payload }
        ? [type: ProvidedEventType, payload: Payload]
        : [type: ProvidedEventType]
)
{
    //TODO: implementation
}