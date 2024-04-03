import "../styles/main.scss";
import { inter, roboto } from "./(back-office)/utils/Fonts";

export const metadata = {
  title: `${process.env.APP_NAME}`,
  description: `${process.env.APP_DESCRIPTION}`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto}`}>{children}</body>
    </html>
  );
}
