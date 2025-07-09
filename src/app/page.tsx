"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [cert, setCert] = useState({});

  useEffect(() => {
    if (typeof window !== "undefined" && window.BryExtension) {
      window.BryExtension.listCertificates().then((certs: any[]) => {
        setCert(certs[0]);
        console.log("BRYEXTENSION certificates", certs);
      });
    }
  }, []);

  async function handleSignPdf(json: any) {
    const digest =
      json.assinaturasInicializadas &&
      json.assinaturasInicializadas[0] &&
      json.assinaturasInicializadas[0].messageDigest;

    return await fetch("http://localhost:4090/brysign/sign-pdf", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        formatoDadosEntrada: "Base64",
        nonce: json.nonce,
        formatoDadosSaida: "Base64",
        assinaturas: [
          {
            algoritmoHash: "SHA256",
            nonce: json.assinaturas[0].nonce,
            hashes: json.assinaturas[0].hashes,
          },
        ],
      }),
    });
  }

  const handleInitPdf = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:4090/brysign/init-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          certificate: cert.certificateData,
        }),
      }).then(async (res) => {
        const json = await res.json();
        if (cert) {
          const res = await window.BryExtension.sign(
            cert.certId,
            JSON.stringify(json),
          );
          return res;
        }
      });
      await handleSignPdf(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleInitPdf} disabled={loading}>
        {loading ? "Loading..." : "Init PDF"}
      </button>
      <button
        onClick={handleSignPdf}
        disabled={loading}
        style={{ marginLeft: "8px" }}
      >
        {loading ? "Loading..." : "Sign PDF"}
      </button>
    </div>
  );
}
