import Header from "../Header";
import Footer from "../Footer";

interface Props {
  children: React.ReactNode;
}

/* MAIN LAYOUT */
export default function Layout({ children }: Props) {
  return (
    <div className="flex h-screen flex-col scroll-smooth crollbar-hide w-full justify-between bg-slate-400">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
