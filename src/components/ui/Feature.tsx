import { Feature } from "@/types";
import React from "react";
import { Icons } from "../icons";

function Feature({ feature }: { feature: Feature }) {
  const Icon = Icons[feature.icon];

  return (
    <div className="w-full max-w-md p-0 lg:px-6">
      <div className="flex gap-6">
        <div className="w-auto">
          <Icon className="h-8 w-8 stroke-accent" />
        </div>
        <div className="w-full grow shrink basis-auto flex flex-col gap-y-1">
          <h6 className="text-base font-bold font-body uppercase">{feature.title}</h6>
          <p className="text-subtitle font-body font-normal">{feature.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Feature;
