import { Work_Sans, Inter, Raleway } from "next/font/google";

const workSans = Work_Sans({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })
const raleway = Raleway({subsets: ['cyrillic']})

export { workSans, inter, raleway}