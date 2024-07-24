import QrCodeScanner from "./components/qrCode";
import Location from "./components/getLocation";

export default function Home() {
  return (
    <div className=" container m-auto mt-[10px]">
      <div className="mx-2">
        <div className="font-bold text-center">Qr Code And Location Test</div>
        <QrCodeScanner />
        <Location />
      </div>
    </div>
  );
}
