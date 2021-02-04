import { createContext, useState } from "react";

export const SidebarContext = createContext()

export const SidebarProvider = (props) => {

    const [openSidebar, setOpenSidebar] = useState(true);

    return(
        <SidebarContext.Provider value={{
            openSidebar,
            setOpenSidebar
        }}>
            { props.children }
        </SidebarContext.Provider>
    )

}