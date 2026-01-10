import React, { Suspense, useState } from "react";

// Lazy load the heavy component
const HeavyWidget = React.lazy(() => import("./HeavyWidget"));

export default function Dashboard() {
    const [showWidget, setShowWidget] = useState(false);

    return (
        <div>
            <h2>Dashboard</h2>
            <button onClick={() => setShowWidget(true)}>Load Widget</button>

            {/* Suspense shows fallback while loading */}
            {showWidget && (
                <Suspense fallback={<div>Loading Widget...</div>}>
                    <HeavyWidget />
                </Suspense>
            )}
        </div>
    );
}
