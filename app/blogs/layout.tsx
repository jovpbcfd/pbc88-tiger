export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[#052e16] px-2 py-5 md:py-10">
      <div className="max-w-[900px] mx-auto">{children}</div>
    </div>
  );
}
