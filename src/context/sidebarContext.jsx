import { createContext, useReducer } from "react";
import { sidebarReducer, initialState } from "../reducer/sidebarReducer";
import PropTypes from 'prop-types';

export const SidebarContext = createContext({});

export const SidebarProvider = ({ children }) => {
    const [state, dispatch] = useReducer(sidebarReducer, initialState);
    
    const toggleSidebar = () => {
        dispatch({ type: "TOGGLE_SIDEBAR" });
    };
    
    return (
        <SidebarContext.Provider value={{
            ...state,
            toggleSidebar
        }}>
            {children}
        </SidebarContext.Provider>
    );
};

SidebarProvider.propTypes = {
    children: PropTypes.node
};