import { Toaster } from "react-hot-toast";
import "../styles/main.scss";
import { inter, roboto } from "./(back-office)/utils/Fonts";
// import("@themesberg/flowbite");

export const metadata = {
  title: `${process.env.APP_NAME}`,
  description: `${process.env.APP_DESCRIPTION}`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto}`}>
        {children}
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}
