"use client";

import { useState } from "react";
import { Check, Copy, CreditCard } from "lucide-react";
import { weddingData } from "@/lib/wedding-data";

export default function WeddingGift() {
  const [copied, setCopied] = useState("");

  const copyAccount = async (
    number: string,
    bank: string
  ) => {
    await navigator.clipboard.writeText(number);

    setCopied(bank);

    setTimeout(() => {
      setCopied("");
    }, 2000);
  };

  return (
    <section className="luxury-section marble-bg">
      <div className="section-inner max-w-3xl">
        <div className="text-center">
          <p className="font-display text-xs tracking-[0.3em] text-dustyDark">
            WEDDING GIFT
          </p>

          <h2 className="script-title mt-3 text-6xl">
            A Gift of Love
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-dustyDark">
            Doa restu Anda merupakan hadiah terindah bagi kami.
            Namun apabila ingin memberikan tanda kasih,
            dapat melalui rekening berikut.
          </p>
        </div>

        <div className="mt-10 space-y-5">
          {weddingData.bankAccounts.map((account) => (
            <div
              key={account.bank}
              className="glass-card p-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 items-center">
                  <img
                    src={account.logo}
                    alt={account.bank}
                    className="max-h-10 max-w-28 object-contain"
                  />
                </div>

                <CreditCard
                  size={24}
                  className="text-gold"
                />
              </div>

              <div className="mt-7">
                <p className="text-xs tracking-widest text-dustyDark">
                  NOMOR REKENING
                </p>

                <p className="mt-2 font-display text-2xl tracking-wider">
                  {account.number}
                </p>

                <p className="mt-2 text-sm text-dustyDark">
                  a.n. {account.owner}
                </p>
              </div>

              <button
                onClick={() =>
                  copyAccount(
                    account.number,
                    account.bank
                  )
                }
                className="outline-button mt-6 w-full"
              >
                {copied === account.bank ? (
                  <>
                    <Check size={17} />
                    Berhasil Disalin
                  </>
                ) : (
                  <>
                    <Copy size={17} />
                    Copy Nomor Rekening
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
