import SinglePost from "./components/Post";

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center text-white">
        Hello and Welcome 👋 &nbsp;
        <span className="whitespace-nowrap">
          i&apos;m <span className="font-bold">Fabian</span>.
        </span>
      </p>
      <SinglePost/>
    </main>
  )
}