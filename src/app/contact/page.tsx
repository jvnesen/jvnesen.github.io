import HeaderNavigation from "@/components/sections/header-navigation";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderNavigation />
      <main className="ml-[240px] p-10">
        <h1 className="mb-6 text-xl font-normal lowercase text-foreground">contact // about</h1>
        <div className="max-w-xl text-sm leading-relaxed text-foreground">
          <p>Jonathan Liu is a student at UCSD in the ICAM program. His favorite font is Helvetica.</p>
          <p className="mt-4">jdliu31@gmail.com</p>
          <p className="mt-4">
            <a
              href="https://instagram.com/jona9x"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-foreground"
            >
              @jona9x
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}