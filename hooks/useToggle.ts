import { useState } from "react";

export default function useToggle() {
  const [toggle, handleToggle] = useState(false);
  return [toggle, () => handleToggle(!toggle)] as const;
}
