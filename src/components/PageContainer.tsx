interface PageContainerProps {
  children: React.ReactNode;
}

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <div className="page-container">
      {children}
      <footer className="text-xs mt-20 font-extralight">
        © 2024 Made in 🇹🇭 by JSD8 & NAKKK 🌏
      </footer>
    </div>
  );
}
