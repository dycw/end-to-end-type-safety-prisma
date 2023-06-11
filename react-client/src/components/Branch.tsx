export default function Branch({ trunk }: { trunk: Boolean }) {
  return (
    <div
      className={`
            ${!trunk ? `border-l-4` : ""}
            ${trunk ? "w-24" : "w-16"}
            ${trunk ? "-translate-x-24" : "-translate-x-16"}
            absolute
            h-full
            -translate-y-10
            scale-y-110
            border-b-4
            border-blue-500 transition duration-300 ease-in-out group-hover:border-teal-400`}
    />
  );
}
