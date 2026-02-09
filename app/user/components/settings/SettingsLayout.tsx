import Container from "@/app/shared/components/Container";
import React from "react";

const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Container>
            <div className="">
                {children}
            </div>
        </Container>
    );
};

export default SettingsLayout;
