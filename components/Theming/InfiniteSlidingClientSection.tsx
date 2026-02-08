"use client";

import dynamic from "next/dynamic";

const InfiniteSlide = dynamic(() => import("./InfiniteSlide"), {
    ssr: false,
    loading: () => (
        <div className="grid gap-1.5 lg:grid-cols-2">
            <div className="h-75 rounded-l-3xl border border-white/10 bg-white/5 animate-pulse" />
            <div className="h-75 rounded-r-3xl border border-white/10 bg-white/5 animate-pulse" />
        </div>
    ),
});

export default InfiniteSlide