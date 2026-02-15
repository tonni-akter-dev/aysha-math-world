"use client";

import { useState } from "react";
import ProfileTab from "./ProfileTab";
import Sidebar from "./Sidebar";
import DashboardTab from "./DashboardTab";
import EnrolledCourses from "./EnrolledCourses";

const SettingsTabs = () => {
    const [activeTab, setActiveTab] = useState("Dashboard");

    return (
        <div className="-mt-25 mb-40 relative z-50 flex gap-10">
            {/* LEFT SIDEBAR */}
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
            {/* RIGHT CONTENT */}
            <div className="flex-1 ">
                {activeTab === "Dashboard" && <DashboardTab />}
                {activeTab === "My Profile" && <ProfileTab />}
                {activeTab === "Enrolled Courses" && <EnrolledCourses />}
                {/* {activeTab === "Wishlist" && <EnrolledCourses />} */}
            </div>
        </div>
    );
};

export default SettingsTabs;
