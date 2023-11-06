import {
  CheckCircle2Icon,
  ChevronLeft,
  ChevronRight,
  Coins,
  Forward,
  Heart,
  LucideProps,
  Menu,
  MoveRight,
  Search,
  ShoppingBag,
  User2,
  X,
} from "lucide-react";

export const Icons = {
  bag: ShoppingBag,
  checkCircle: CheckCircle2Icon,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  close: X,
  coins: Coins,
  facebook: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      {...props}
    >
      <path
        d="M21 10.5C21 4.70101 16.299 0 10.5 0C4.70101 0 0 4.70101 0 10.5C0 15.7408 3.83968 20.0847 8.85938 20.8724V13.5352H6.19336V10.5H8.85938V8.18672C8.85938 5.55516 10.427 4.10156 12.8254 4.10156C13.9738 4.10156 15.1758 4.30664 15.1758 4.30664V6.89063H13.8518C12.5475 6.89063 12.1406 7.70007 12.1406 8.53125V10.5H15.0527L14.5872 13.5352H12.1406V20.8724C17.1603 20.0847 21 15.7408 21 10.5Z"
        // fill="#67788A"
      />
    </svg>
  ),
  forward: Forward,
  heart: Heart,
  instagram: ({ ...props }: LucideProps) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z" />
    </svg>
  ),
  menu: Menu,
  moveRight: MoveRight,
  person: User2,
  search: Search,
  tiktok: ({ ...props }: LucideProps) => (
    <svg
      width="21"
      height="24"
      viewBox="0 0 21 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M20.9992 9.84202C18.935 9.84696 16.9214 9.20321 15.2429 8.00171V16.3813C15.2424 17.9333 14.768 19.4482 13.8832 20.7233C12.9985 21.9984 11.7456 22.973 10.2919 23.5168C8.83834 24.0606 7.25336 24.1477 5.74893 23.7664C4.24451 23.3851 2.89235 22.5536 1.87326 21.383C0.854173 20.2125 0.216732 18.7587 0.0461706 17.2161C-0.12439 15.6735 0.180059 14.1156 0.91881 12.7507C1.65756 11.3858 2.7954 10.279 4.18018 9.57823C5.56497 8.87746 7.13069 8.61616 8.66798 8.82927V13.0439C7.96451 12.8227 7.20911 12.8293 6.50966 13.063C5.8102 13.2966 5.20246 13.7453 4.77322 14.345C4.34399 14.9446 4.1152 15.6646 4.11955 16.402C4.12389 17.1395 4.36114 17.8567 4.79741 18.4512C5.23368 19.0458 5.84666 19.4873 6.54882 19.7127C7.25098 19.9381 8.00641 19.9359 8.70722 19.7063C9.40804 19.4768 10.0184 19.0316 10.4511 18.4345C10.8839 17.8374 11.1169 17.1188 11.1169 16.3813V0H15.2429C15.2401 0.348435 15.2693 0.696395 15.3301 1.03948C15.4735 1.80537 15.7716 2.53396 16.2062 3.18068C16.6409 3.8274 17.2028 4.37867 17.8578 4.80075C18.7896 5.41688 19.8821 5.74528 20.9992 5.74505V9.84202Z" />
    </svg>
  ),
  twitter: ({ ...props }: LucideProps) => (
    <svg
      aria-label="twitter"
      fill="none"
      height="16"
      viewBox="0 0 18 15"
      {...props}
    >
      <path
        d="M18 1.684l-1.687 1.684v.28c0 .307-.05.602-.123.886-.04 2.316-.777 5.387-3.816 7.81C6.404 17.115 0 12.907 0 12.907c5.063 0 5.063-1.684 5.063-1.684-1.126 0-3.376-2.243-3.376-2.243.563.56 1.689 0 1.689 0C.56 7.295.56 5.61.56 5.61c.563.561 1.689 0 1.689 0C-.563 3.368 1.124.561 1.124.561 1.687 3.368 9 4.49 9 4.49l.093-.046A6.637 6.637 0 0 1 9 3.368C9 1.353 10.636 0 12.656 0c1.112 0 2.094.506 2.765 1.286l.329-.163L17.437 0l-1.122 2.245L18 1.684z"
        fillRule="nonzero"
      ></path>
    </svg>
  ),
  x: ({ ...props }: LucideProps) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <g>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
      </g>
    </svg>
  ),
};
