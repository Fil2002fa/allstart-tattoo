export default function Homepage() {
  const items = Array.from({ length: 30 }, (_, i) => {
    const fileName = `galleria (${i + 1}).jpg`;
    return {
      id: i + 1,
      src: `/Galleria/${encodeURIComponent(fileName)}`, // ✅ cartella + encoding
      alt: `Galleria ${i + 1}`,
    };
  });

  return (
    <main className="min-h-screen bg-black px-6 md:px-12 py-20">
      <header className="flex items-center h-[320px] md:h-[380px]">
        <h1 className="uppercase text-white tracking-tight text-[clamp(48px,8vw,120px)]">
          Galleria
        </h1>
      </header>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
        {items.map((img) => (
          <figure
            key={img.id}
            className="mb-6 break-inside-avoid overflow-hidden bg-white/5"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-auto block object-cover"
              loading="lazy"
            />
          </figure>
        ))}
      </div>
    </main>
  );
}