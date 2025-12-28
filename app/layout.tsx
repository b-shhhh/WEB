import './globals.css';

export const metadata = {
  title: 'UniGuide',
  description: 'Explore universities and plan your future',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-blue-50">
        {children}
      </body>
    </html>
  );
}
