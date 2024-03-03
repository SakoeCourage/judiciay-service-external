import React from "react"
const Slot = ({ children }: { children: React.ReactNode }) => {
    return <div className="slot-wrapper">{children}</div>;
};
export default Slot