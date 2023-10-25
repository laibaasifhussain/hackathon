import * as React from "react";
import Switch from "@mui/material/Switch";

export default function IASwitch({ color }) {
  const [switched, setSwitched] = React.useState(false);
  function handleSwitch(e) {
    setSwitched((s) => !s);
    // console.log(e.target.checked);
  }
  return (
    <div>
      <Switch checked={switched} onChange={handleSwitch} color={color} />
    </div>
  );
}