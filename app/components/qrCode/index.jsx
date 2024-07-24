"use client";
import { Scanner } from "@yudiel/react-qr-scanner";
import { useState } from "react";
export function SomeComponent() {
  const [read, setRead] = useState(null);
  const [scan, setScan] = useState(false);

  return (
    <>
      <div
        className="font-bold text-red-600 cursor-pointer"
        onClick={() => setScan(true)}
      >
        Click to Scan Qr Code
      </div>
      {scan && (
        <div className="w-[80%] h-full md:w-80">
          <Scanner
            onScan={(result) => {
              setRead(result);
              setScan(false);
            }}
          />
        </div>
      )}
      {read && (
        <div>
          Result :<a href={read?.[0]?.rawValue ?? "#"}>{read?.[0]?.rawValue}</a>
        </div>
      )}
    </>
  );
}

export default SomeComponent;
