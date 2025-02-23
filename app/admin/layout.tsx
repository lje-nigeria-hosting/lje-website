import AdminNav from "../components/AdminNav";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>
          <AdminNav />
          {children}
        </main>
      </body>
    </html>
  );
}
