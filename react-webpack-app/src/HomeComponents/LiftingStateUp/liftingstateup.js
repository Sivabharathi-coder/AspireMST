import React, { useState } from "react";

function ChildA({ value, onChange }) {
  return (
    <div>
      <h3>Child A</h3>
      <input value={value} onChange={e => onChange(e.target.value)} />
      <p>A says: {value}</p>
    </div>
  );
}

function ChildB({ value, onChange }) {
  return (
    <div>
      <h3>Child B</h3>
      <input value={value} onChange={e => onChange(e.target.value)} />
      <p>B says: {value}</p>
    </div>
  );
}


function LiftingState() {
  const [text, setText] = useState("");

  return (
    <div>
      <h2>With Lifting State Up</h2>
      <ChildA value={text} onChange={setText} />
      <ChildB value={text} onChange={setText} />
    </div>
  );
}

export default LiftingState;
