import "./globals.css";

export const metadata = {
  title: "Gym Management",
  description: "Gym assignment project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
