import Hero from "@/app/shared/components/Hero";
import SettingsLayout from "../components/settings/SettingsLayout";
import SettingsTabs from "../components/settings/SettingsTabs";

const Profile = () => {
  return (
    <div>
      <Hero
        title="Student Dashboard"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Dashboard", href: "#" },
          { label: "Student Dashboard" },
        ]}
      />
      <SettingsLayout>
        <SettingsTabs />
      </SettingsLayout>
    </div>
  );
};

export default Profile;
