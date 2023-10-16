import * as Unicons from "@iconscout/react-unicons";

export default function NV() {
  return (
    <main className="bg-black text-white flex flex-col lg:flex-row w-full items-center justify-center gap-0 lg:gap-8 px-8 py-8 lg:px-16 lg:py-6">
      <input
        className="transition-all bg-zinc-900 hover:bg-zinc-800 focus:bg-zinc-800 focus:outline-none text-white p-4 lg:px-4 lg:py-2 text-sm lg:text-lg w-full lg:w-72 lg:hover:w-96 lg:focus:w-96 rounded-2xl"
        type="text"
        placeholder="Search bar isn&apos;t available .."
      />
      <div className="flex flex-col lg:flex-row w-full lg:w-auto gap-8 mt-8 lg:mt-0 items-start lg:items-center justify-end">
        <Section
          name={"Profile"}
          sunicons={
            <Unicons.UilUserCircle className="flex lg:hidden" size="20" />
          }
          lunicons={
            <Unicons.UilUserCircle className="hidden lg:flex" size="22" />
          }
        />
        <Section
          name={"Frontend Projects"}
          sunicons={<Unicons.UilArrow className="flex lg:hidden" size="20" />}
          lunicons={<Unicons.UilArrow className="hidden lg:flex" size="22" />}
        />
        <Section
          name={"UI/UX Design"}
          sunicons={<Unicons.UilPalette className="flex lg:hidden" size="20" />}
          lunicons={<Unicons.UilPalette className="hidden lg:flex" size="22" />}
        />
        <Section
          name={"Collaborate"}
          sunicons={<Unicons.UilUsersAlt className="flex lg:hidden" size="20" />}
          lunicons={<Unicons.UilUsersAlt className="hidden lg:flex" size="22" />}
        />
        <Section
          name={"Contact"}
          sunicons={<Unicons.UilAt className="flex lg:hidden" size="20" />}
          lunicons={<Unicons.UilAt className="hidden lg:flex" size="22" />}
        />
      </div>
    </main>
  );
}

function Section({ name, sunicons, lunicons }) {
  return (
    <a
      href="/"
      className="transition-all text-white hover:text-purple-400 flex flex-row gap-4 w-full lg:w-auto items-center justify-between"
    >
      <p className="flex lg:hidden text-sm lg:text-lg leading-relaxed lg:leading-relaxed tracking-tight">
        {name}
      </p>
      {sunicons}
      {lunicons}
    </a>
  );
}
