"use client";

import { AgentPanel } from "@agilecrm/500ux-core";



const { NEXT_PUBLIC_AGENT_APP_ID, NEXT_PUBLIC_AGENT_JOURNEY_ID } = process.env

console.log(NEXT_PUBLIC_AGENT_APP_ID, NEXT_PUBLIC_AGENT_JOURNEY_ID)

export default function AgentWidget() {
  return (
    <AgentPanel
      title="Weather Agent"
      subtitle="Get the weather for your location"
      logo={
        <div className="w-9 h-9 rounded-[10px] bg-zinc-50 flex items-center justify-center font-bold text-sm text-zinc-950">
          500
        </div>
      }
      context={{
        appId: NEXT_PUBLIC_AGENT_APP_ID || "",
        journeyId: NEXT_PUBLIC_AGENT_JOURNEY_ID || "",
      }}
      placeholder="Ask the agent anything..."
      appLabel="Customer Portal"
    />
  );
}
