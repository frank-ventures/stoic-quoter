import Image from "next/image";
import Coin from "../../../public/coin.png";

export default function CoinLoader() {
  return (
    <>
      <Image
        src={Coin}
        alt="spinning coin image"
        height={200}
        width={200}
        className="spinning"
      />
    </>
  );
}
