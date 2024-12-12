"use client";
import React, { useState } from "react";
import CryptoJS from "crypto-js";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { motion } from "framer-motion";

function Rec() {
  const [MSID, setMSID] = useState("");
  const [publicKey, setPublicKey] = useState("");
  const [decryptedMessage, setdecryptedMessage] = useState("");
  const [error, setError] = useState("");

  const handledecrypt = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (MSID && publicKey) {
      try {

        const decrypted = CryptoJS.AES.decrypt(MSID, publicKey).toString(CryptoJS.enc.Utf8);;
        setdecryptedMessage(decrypted);
        setError(""); 
      } catch (err) {
        setError("Encryption failed. Please try again.");
      }
    } else {
      setError("Both message and public key are required.");
    }
  };

  return (
    <div className="h-[28rem] flex flex-col justify-center items-center px-4">
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Enter Your MSID Here
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Enter the MSID and Public Key to Decrypt
        </p>
        <form onSubmit={handledecrypt} className="pt-5">
          <div className="flex flex-col space-y-4">
            <Input
              type="text"
              placeholder="MSID"
              value={MSID}
              onChange={(e) => setMSID(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Public Key"
              value={publicKey}
              onChange={(e) => setPublicKey(e.target.value)}
            />
            <Button type="submit">Decrypt</Button>
          </div>
        </form>

        {error && (
          <motion.div
            className="mt-6 p-4 bg-red-100 border border-red-300 rounded-lg shadow dark:bg-red-800 dark:border-red-700"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h3 className="text-lg font-bold text-red-800 dark:text-white">Error</h3>
            <p className="text-sm text-red-700 dark:text-red-400">{error}</p>
          </motion.div>
        )}

        {decryptedMessage && (
          <motion.div
            className="mt-6 p-4 bg-green-100 border border-green-300 rounded-lg shadow dark:bg-green-800 dark:border-green-700"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h3 className="text-lg font-bold text-green-800 dark:text-white">
              The decrypted Message:
            </h3>
            <p className="text-sm text-green-700 dark:text-green-400 break-words ">
              {decryptedMessage}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Rec;
