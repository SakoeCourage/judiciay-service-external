"use client"
import type { Metadata } from "next";
import Nprogressprovider from "@app/providers/Nprogressprovider";
import Toastserviceprovider from "@app/providers/Toastserviceprovider";
import Pagepreloader from "@app/providers/Pagepreloader";
import 'simplebar-react/dist/simplebar.min.css';
import "./globals.css";
import { cn } from "./lib/utils";
import { Dailogueserviceprovider } from "@app/providers/Dailogueserviceprovider";
import Nextsessionprovider from "@app/providers/Nextsessionprovider";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn("h-screen overflow-y-scroll")}
      >
        <Nextsessionprovider>
          <Pagepreloader>
            <Nprogressprovider>
              <Toastserviceprovider>
                <Dailogueserviceprovider>
                  {children}
                </Dailogueserviceprovider>
              </Toastserviceprovider>
            </Nprogressprovider>
          </Pagepreloader>
        </Nextsessionprovider>
      </body>
    </html>
  );
}
