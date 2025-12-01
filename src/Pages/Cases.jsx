import { CasesHead } from "../Components/Cases/CasesHead"
import { CasesHome } from "../Components/Cases/CasesHome"

export const Cases = ()=>{
    return(
        <div className="bg-black">
            <CasesHead/>
            <CasesHome/>
        </div>
    )
}