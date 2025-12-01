import { ContactHead } from "../Components/Contact/ContactHead"
import { ContactHome } from "../Components/Contact/ContactHome"

export const Contact = ()=>
{
    return(
        <div className="bg-black">
        <ContactHead/>
            <ContactHome/>
        </div>
    )
}