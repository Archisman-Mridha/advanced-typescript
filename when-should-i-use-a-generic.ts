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