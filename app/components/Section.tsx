export default function Section({children}: {children: React.ReactNode}) {
  return (
    <section className="flex justify-around items-center w-full h-176">
        {children}
    </section>
  );
}
