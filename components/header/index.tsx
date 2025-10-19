import { Logo } from "./Logo";
import { ModeToggle } from "./ModeToggle";
import { NavBar } from "./NavBar";

export const Header = () => {
  return (
    <header className="shadow-sm border-b">
      <section className="main-container py-4 flex items-center justify-between">
        <Logo />
        <NavBar />
        <ModeToggle />
      </section>
    </header>
  );
};
