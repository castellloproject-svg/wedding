"use client";

import { FormEvent, useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Send, Users } from "lucide-react";

interface Guestbook {
  id: number;
  name: string;
  guest_count: number;
  attendance: string;
  message: string;
  created_at: string;
}

export default function RSVPSection() {
  const [name, setName] = useState("");
  const [guestCount, setGuestCount] = useState("1");
  const [attendance, setAttendance] = useState("Hadir");
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState<Guestbook[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchMessages = async () => {
    const { data } = await supabase
      .from("guestbook")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

    if (data) {
      setMessages(data);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (!name.trim() || !message.trim()) {
      alert("Mohon isi nama dan ucapan.");
      return;
    }

    setLoading(true);

    const { error } = await supabase
      .from("guestbook")
      .insert({
        name: name.trim(),
        guest_count: Number(guestCount),
        attendance,
        message: message.trim(),
      });

    setLoading(false);

    if (error) {
      alert(
        "Ucapan belum berhasil dikirim. Pastikan konfigurasi Supabase sudah benar."
      );
      return;
    }

    setName("");
    setGuestCount("1");
    setAttendance("Hadir");
    setMessage("");

    await fetchMessages();
  };

  return (
    <section className="luxury-section bg-white">
      <div className="section-inner max-w-3xl">
        <div className="text-center">
          <p className="font-display text-xs tracking-[0.3em] text-dustyDark">
            RSVP & WISHES
          </p>

          <h2 className="script-title mt-3 text-6xl">
            Your Presence
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-dustyDark">
            Konfirmasikan kehadiran dan tinggalkan ucapan terbaik
            untuk kami.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="glass-card mt-10 space-y-5 p-6 md:p-8"
        >
          <div>
            <label className="mb-2 block text-sm font-medium">
              Nama
            </label>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Masukkan nama Anda"
              className="input-luxury"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Jumlah Tamu
            </label>

            <select
              value={guestCount}
              onChange={(e) => setGuestCount(e.target.value)}
              className="input-luxury"
            >
              <option value="1">1 Orang</option>
              <option value="2">2 Orang</option>
              <option value="3">3 Orang</option>
              <option value="4">4 Orang</option>
              <option value="5">5 Orang</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Konfirmasi Kehadiran
            </label>

            <select
              value={attendance}
              onChange={(e) => setAttendance(e.target.value)}
              className="input-luxury"
            >
              <option value="Hadir">Hadir</option>
              <option value="Tidak Hadir">
                Tidak Hadir
              </option>
              <option value="Masih Ragu">
                Masih Ragu
              </option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Ucapan & Doa
            </label>

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tuliskan ucapan dan doa..."
              rows={5}
              className="input-luxury resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="gold-button w-full disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Send size={17} />

            {loading
              ? "Mengirim..."
              : "Kirim Ucapan"}
          </button>
        </form>

        <div className="mt-14">
          <div className="mb-6 flex items-center justify-center gap-2">
            <Users size={18} className="text-gold" />

            <h3 className="font-display text-xl">
              Ucapan Terbaru
            </h3>
          </div>

          <div className="space-y-4">
            {messages.length === 0 ? (
              <div className="text-center text-sm text-dustyDark">
                Belum ada ucapan.
              </div>
            ) : (
              messages.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-gold/20 bg-cream/60 p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-display font-semibold">
                        {item.name}
                      </h4>

                      <p className="mt-1 text-xs text-gold">
                        {item.attendance} ·{" "}
                        {item.guest_count} Tamu
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-dustyDark">
                    {item.message}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
