# Advanced Typescript

Learning advanced advanced typescript concepts ! Here are the resources I have used :

+ The Advanced Typescript playlist by Matt Pocock - https://www.youtube.com/playlist?list=PLIvujZeVDLMx040-j1W4WFs1BxuTGdI_b

## Where should we use generics ?

**Video guide** - https://youtu.be/lMfGp29Ht8c

> When you don't have a complete idea about the type that you will be dealing with, you should use generics.

Consider, you have 2 interfaces, **Animal** and **Human**. You want to create a function **`getDisplayName`** that returns `{ animalName: name of the animal }` if the subject is **Animal** and `{ humanName: first and last names concatenated }` if the subject is **Human**. You can use generics in this scenario like this -

```ts
interface Animal {
    name: string
}

interface Human {
    firstName: string
    lastName: string
}

function getDisplayName<T extends Animal | Human>(subject: T)
    : T extends Animal ? { animalName: string }: { humanName: string }
{
    if("name" in subject)
        return { animalName: subject.name } as any

    else return { humanName: subject.firstName + subject.lastName } as any
}

const animal: Animal= {
    name: "test animal"
}

const displayName= getDisplayName(animal)
```
