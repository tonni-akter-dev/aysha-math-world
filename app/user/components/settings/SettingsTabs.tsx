"use client";

import { useState } from "react";
import ProfileTab from "./ProfileTab";
import AccountTab from "./AccountTab";
import SecurityTab from "./SecurityTab";
import NotificationTab from "./NotificationTab";
import Sidebar from "./Sidebar";

const SettingsTabs = () => {
    const [activeTab, setActiveTab] = useState("Dashboard");

    return (
        <div className="-mt-25 mb-40 relative z-50 flex gap-10">
            {/* LEFT SIDEBAR */}
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
            {/* RIGHT CONTENT */}
            <div className="flex-1 bg-white shadow-2xl border rounded-2xl  p-8">
                {activeTab === "Dashboard" && <ProfileTab />}
                {activeTab === "Account" && <AccountTab />}
                {activeTab === "Security" && <SecurityTab />}
                {activeTab === "Notifications" && <NotificationTab />}
            </div>
        </div>
    );
};

export default SettingsTabs;
