import AgentWidget from "@/app/components/AgentWidget";

export default function Home() {
  return (
    <div className="flex h-screen bg-zinc-950 text-zinc-50 font-sans overflow-hidden relative">
      <div className="relative z-1 flex w-full h-full">
        <AgentWidget />
      </div>
    </div>
  );
}
