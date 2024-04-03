import { Inter, Roboto } from "next/font/google";

const inter_init = Inter({ subsets: ["latin"] });
const roboto_init = Roboto({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"],
    // variable: "--font-roboto",
});

export const roboto = roboto_init.className
export const inter = inter_init.variable