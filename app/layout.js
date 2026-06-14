import { Cairo } from "next/font/google";
import "./globals.css";


const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '700'], // Specify the weights you need
  // variable: '--font-cairo',       // Define a CSS variable for Tailwind
});

export const metadata = {
  title: "ALOLA ",
  description: "مصممة جرافيك متخصصة في تصميم الهوية البصرية وتصميمات السوشال ميديا، أساعد الشركات ورواد الأعمال على بناء حضور بصري احترافي يعكس هويتهم ويُميزهم عن المنافسين",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={cairo.variable}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
