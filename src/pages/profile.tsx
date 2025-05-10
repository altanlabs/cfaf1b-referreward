import { UserProfile } from "@altanlabs/auth";
import { AuthGuard } from "@/components/auth/AuthGuard";

export default function ProfilePage() {
  return (
    <AuthGuard>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black">Profile Settings</h1>
          <p className="text-black/60 mt-2">
            Manage your account settings and preferences
          </p>
        </div>
        <UserProfile
          appearance={{ 
            theme: "light",
            variables: {
              colorPrimary: "#000",
              colorBackground: "#fff",
              colorInputBackground: "#fff",
              colorText: "#000",
              colorTextSecondary: "rgba(0, 0, 0, 0.6)",
              colorBorder: "rgba(0, 0, 0, 0.1)",
              borderRadius: "0.5rem",
            }
          }}
          showCustomFields
          editableFields={["name", "surname", "email"]}
          hiddenFields={["password"]}
          fallback={<div>Please log in to view your profile</div>}
        />
      </div>
    </AuthGuard>
  );
}