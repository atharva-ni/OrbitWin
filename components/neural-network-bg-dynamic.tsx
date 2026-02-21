"use client";

import dynamic from "next/dynamic";

export const NeuralNetworkBgDynamic = dynamic(
    () => import("./neural-network-bg").then((mod) => mod.NeuralNetworkBg),
    { ssr: false }
);
