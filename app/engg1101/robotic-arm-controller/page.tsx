"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SiteShell from "../../components/site-shell";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const servos = [
  {
    label: "Base",
    description: "Rotate the arm platform left and right.",
    min: 0,
    max: 180,
    defaultValue: 90,
  },
  {
    label: "Shoulder",
    description: "Lift and lower the main arm segment.",
    min: 0,
    max: 180,
    defaultValue: 90,
  },
  {
    label: "Elbow",
    description: "Control the mid-joint reach of the arm.",
    min: 0,
    max: 180,
    defaultValue: 90,
  },
  {
    label: "Wrist",
    description: "Fine-tune the wrist angle for end-effector alignment.",
    min: 0,
    max: 180,
    defaultValue: 90,
  },
  {
    label: "Gripper",
    description: "Open and close the gripping mechanism.",
    min: 0,
    max: 180,
    defaultValue: 45,
  },
];

export default function RoboticArmControllerPage() {
  const [servoPositions, setServoPositions] = useState(
    servos.map((servo) => servo.defaultValue),
  );
  const [bluetoothStatus, setBluetoothStatus] = useState("Bluetooth disconnected");

  async function handleConnectBluetooth() {
    if (typeof navigator === "undefined" || !("bluetooth" in navigator)) {
      setBluetoothStatus("Bluetooth is not supported in this browser.");
      return;
    }

    try {
      setBluetoothStatus("Searching for a Bluetooth device...");
      const device = await navigator.bluetooth.requestDevice({
        acceptAllDevices: true,
      });

      setBluetoothStatus(`Connected to ${device.name || "selected device"}`);
    } catch {
      setBluetoothStatus("Bluetooth connection was cancelled or failed.");
    }
  }

  function updateServoPosition(index: number, value: number) {
    setServoPositions((current) => current.map((position, currentIndex) => (currentIndex === index ? value : position)));
  }

  return (
    <SiteShell>
      <main className="mx-auto max-w-7xl px-6 pb-20 pt-10 sm:px-8">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="overflow-hidden rounded-[2.25rem] border border-slate-200/80 bg-white px-8 py-10 shadow-[0_24px_70px_-48px_rgba(15,23,42,0.2)] sm:px-10 sm:py-12"
        >
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-700/80">
              ENGG1101 Function Page
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Robotic Arm Controller
            </h1>
            <p className="max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
              This page is dedicated to the controller logic used inside the ENGG1101 course, with a focus on the path from input to motion.
            </p>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={fadeIn}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mt-10 overflow-hidden rounded-[2.25rem] border border-slate-200/80 bg-white p-6 shadow-[0_24px_70px_-48px_rgba(15,23,42,0.18)] sm:p-8 lg:p-10"
        >
          <div className="space-y-4 lg:pr-80">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-700/80">
                Servo Controls
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                Five STS3215 positions in a compact board.
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-2">
              {servos.map((servo, index) => (
                <div
                  key={servo.label}
                  className="rounded-[1.35rem] border border-slate-200 bg-slate-50 p-4 shadow-[0_14px_34px_-30px_rgba(15,23,42,0.16)]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold text-slate-950 sm:text-base">
                        {servo.label}
                      </h3>
                      <p className="mt-1 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
                        {servo.description}
                      </p>
                    </div>
                    <div className="shrink-0 rounded-full bg-white px-3 py-1 text-sm font-semibold text-slate-800 shadow-sm">
                      {servoPositions[index]}°
                    </div>
                  </div>

                  <input
                    type="range"
                    min={servo.min}
                    max={servo.max}
                    value={servoPositions[index]}
                    onChange={(event) => updateServoPosition(index, Number(event.target.value))}
                    className="mt-3 w-full accent-slate-950"
                  />

                  <div className="mt-2 flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500 sm:text-[11px]">
                    <span>{servo.min}°</span>
                    <span>{servo.max}°</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 lg:absolute lg:right-10 lg:top-10 lg:mt-0 lg:w-72">
            <div className="rounded-[1.6rem] border border-slate-200 bg-slate-950 p-5 text-slate-100 shadow-[0_18px_45px_-36px_rgba(15,23,42,0.3)]">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
                Bluetooth Tool
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Connect the arm before adjusting the sliders.
              </p>

              <button
                type="button"
                onClick={handleConnectBluetooth}
                className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                Connect Bluetooth
              </button>

              <div className="mt-4 rounded-[1.1rem] border border-white/10 bg-white/8 px-4 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Status
                </p>
                <p className="mt-1 text-sm font-medium text-white">
                  {bluetoothStatus}
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </SiteShell>
  );
}