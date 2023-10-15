import * as Unicons from "@iconscout/react-unicons";

export default function NV() {
  return (
    <main className="bg-black text-white flex flex-col lg:flex-row w-full items-center justify-center text-base lg:text-lg gap-0 lg:gap-8 px-8 py-8 lg:px-16 lg:py-6">
      <input
        className="transition-all bg-zinc-900 hover:bg-zinc-800 focus:bg-zinc-800 focus:outline-none text-white p-4 lg:px-4 lg:py-2 w-full lg:w-64 lg:hover:w-96 lg:focus:w-96 rounded-2xl"
        type="text"
        placeholder="Search anything .."
      />
      <div className="flex flex-col lg:flex-row w-full lg:w-auto gap-8 mt-8 lg:mt-0 items-start lg:items-center justify-end">
        <Section
          name={"Profile"}
          unicons={<Unicons.UilUserCircle size="20" />}
        />
        <Section
          name={"Frontend Projects"}
          unicons={<Unicons.UilArrow size="20" />}
        />
        <Section
          name={"UI/UX Design"}
          unicons={<Unicons.UilPalette size="20" />}
        />
        <Section
          name={"Collaborate"}
          unicons={<Unicons.UilUsersAlt size="20" />}
        />
        <Section name={"Contact"} unicons={<Unicons.UilAt size="20" />} />
      </div>
    </main>
  );
}

function Section({ name, unicons }) {
  return (
    <a
      href="/"
      className="transition-all text-white hover:text-purple-400 flex flex-row gap-4 w-full lg:w-auto items-center justify-between"
    >
      <p className="flex lg:hidden text-base lg:text-lg leading-relaxed lg:leading-relaxed tracking-tight">
        {name}
      </p>
      {unicons}
    </a>
  );
}
