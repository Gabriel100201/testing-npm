import { tw } from "twind";

export const Button = ({ className }) => {
  const defaultStyles = `bg-purple-300 rounded-lg px-3 active:bg-purple-400 py-1 active:outline-none w-32 h-14`;
  const buttonStyles = className
    ? `${className} ${defaultStyles}`
    : defaultStyles;

  return (
    <button className={tw(buttonStyles)}>
      <span className={tw`font-semibold`}>Click</span>
    </button>
  );
};

/* import { tw } from "twind";

export const Button = ({ className }) => {

  return (
    <button className="bg-purple-300 rounded-lg px-3 active:bg-purple-400 py-1 active:outline-none w-32 h-14">
      <span className="font-semibold">Click</span>
    </button>
  );
};
 */
