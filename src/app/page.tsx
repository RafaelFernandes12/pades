"use client";
import { useEffect, useState } from "react";
import {
  useInitPdfMutation,
  useSignPdfMutation,
} from "@/graphql/generated/graphql";
import { ApolloProvider } from "@apollo/client";
import { client } from "./layout";

type Cert = {
  certificateData?: string;
  certId?: string;
};

declare global {
  interface Window {
    BryExtension?: {
      listCertificates: () => Promise<Cert[]>;
      sign: (certId: string, data: string) => Promise<any>;
    };
  }
}

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [cert, setCert] = useState<Cert>({});
  const [initPdf] = useInitPdfMutation();
  const [signPdf] = useSignPdfMutation();

  useEffect(() => {
    if (typeof window !== "undefined" && window.BryExtension) {
      window.BryExtension.listCertificates().then((certs: Cert[]) => {
        setCert(certs[0]);
      });
    }
  }, []);

  async function handleSignPdf(json: any, certsInfo: any) {
    console.log("CERTSINFO", certsInfo);
    console.log("JSON", json);
    const cleanedCertsInfo = Array.isArray(certsInfo)
      ? certsInfo.map(({ __typename, ...rest }: any) => rest)
      : certsInfo;

    // Ensure assinaturas includes algoritmoHash
    const assinaturas = (json.assinaturas || []).map((assinatura: any) => ({
      ...assinatura,
      algoritmoHash: assinatura.algoritmoHash || "SHA256", // or set as needed
    }));

    if (!json || !certsInfo) return;
    try {
      const { data } = await signPdf({
        variables: {
          data: {
            formatoDadosEntrada: "Base64",
            nonce: json.nonce,
            certsInfo: cleanedCertsInfo,
            formatoDadosSaida: "Base64",
            assinaturas,
          },
        },
      });
      console.log("SignPdf result", data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  const handleInitPdf = async () => {
    setLoading(true);
    try {
      const { data } = await initPdf({
        variables: {
          data: {
            certificate: cert.certificateData!,
            musicIds: [5175],
          },
        },
      });
      if (data && cert) {
        const resSign = await window.BryExtension!.sign(
          cert.certId!,
          JSON.stringify(data.initPdf.data),
        );
        await handleSignPdf(resSign, data.initPdf.certsInfo);
      }
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
    </div>
  );
}
