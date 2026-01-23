// app/layout.tsx
import "./globals.css";
import MaintenancePage from "@/components/MaintenancePage";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Toggle this via .env (e.g., MAINTENANCE_MODE=true)
  const isMaintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true";

  return (
    <html lang="en">
      <body className="antialiased">
        {isMaintenanceMode ? <MaintenancePage /> : children}
      </body>
    </html>
  );
}
