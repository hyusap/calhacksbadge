import { users } from "@/lib/schema";
import db from "@/lib/db";
import { GetServerSideProps } from "next";
import { usePathname } from "next/navigation";
import { eq } from "drizzle-orm";
import type { SelectUser } from "@/lib/schema";
import QRCode from "react-qr-code";

export default async function UserBadgePage({
  params,
}: {
  params: { id: number };
}) {
  const selected_users = await db
    .select()
    .from(users)
    .where(eq(users.id, params.id));
  const user = selected_users[0];

  // const pathname = usePathname();

  // if (!pathname) {
  //   return <div>Loading...</div>;
  // }
  return (
    <div className="bg-accent flex flex-col justify-start items-start gap-2.5 w-full h-screen">
      <div className="self-stretch px-6 py-7 bg-black rounded-b-3xl flex flex-col justify-start items-start gap-2.5 h-[90%]">
        <div className="self-stretch text-white text-4xl font-extralight font-editorial">
          Hang on, the event is starting soon!{" "}
        </div>
        <div className="self-stretch py-5 flex flex-col justify-center items-center gap-2.5 flex-1">
          <div className="px-5 py-6 bg-white rounded-3xl flex flex-col justify-start items-start">
            <div className="self-stretch flex justify-between items-start">
              <div className="text-gray-600 text-base font-thin font-neue leading-normal">
                CalHacks 11.0
              </div>
              <div className="text-gray-600 text-base font-thin font-neue leading-normal">
                2024
              </div>
            </div>

            <QRCode
              value="http://localhost:3000/users/1/profile"
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            />
            <div className="w-0 h-4 bg-gray-300" />
            <div className="self-stretch h-24 flex flex-col justify-start items-start">
              <div className="text-black text-5xl font-bold font-neue">
                Ayush Paul
              </div>
              <div className="text-gray-600 text-base font-normal font-neue leading-normal">
                University of California, Berkeley
              </div>
              <div className="text-gray-600 text-base font-normal font-neue leading-normal">
                EECS ✦ Class of 2028
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
