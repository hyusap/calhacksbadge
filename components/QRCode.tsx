// "use client";

// import React, { useEffect, useRef } from "react";
// import QrCodeWithLogo from "qrcode-with-logos";

// interface QRCodeComponentProps {
//   url: string;
//   logo: string;
// }

// export default function QRCodeComponent({ url, logo }: QRCodeComponentProps) {
//   const imageRef = useRef<HTMLImageElement>(null);

//   useEffect(() => {
//     if (imageRef.current) {
//       new QrCodeWithLogo({
//         content: "https://github.com/zxpsuper",
//         width: 380,
//         logo: {
//           src: "https://avatars1.githubusercontent.com/u/28730619?s=460&v=4",
//         },
//       });
//       // qrcode.downloadImage("qrcode.png");
//       console.log("QR code generated");
//     }
//   }, [url, logo]);

//   return (
//     <div>
//       {/* eslint-disable-next-line @next/next/no-img-element */}
//       <img id="image" ref={imageRef} className="h-64 w-64" />
//     </div>
//   );
// }
