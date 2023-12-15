import { tw } from "twind";

export const Button = () => {
  return (
    <button
      className={tw`w-32 h-14 bg-purple-300 rounded-lg px-3 active:bg-purple-400 py-1 active:outline-none`}
    >
      <span className={tw`font-semibold`}>Click</span>
    </button>
  );
};
