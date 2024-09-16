"use client";

import { Table } from "antd";
import ClientLayout from "./components/ClientLayout";
import { useEffect, useState } from "react";

export default function Home() {
  const [recursos, setRecursos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRecursos() {
      try {
        const response = await fetch("/api/bordillo/getBordillos");
        const data = await response.json();
        console.log(data);
        setRecursos(data);
      } catch (error) {
        console.log("Error obteniendo los recursos:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchRecursos();
  }, []);

  const columns = [
    {
      title: "Código Bordillo",
      dataIndex: "codigo",
      key: "codigo",
    },
    {
      title: "Longitud Bordillo",
      dataIndex: "longitud",
      key: "longitud",
    },
    {
      title: "Código Calzada",
      dataIndex: ["calzada", "codigo"],
      key: "calzadaCodigo",
    },
    {
      title: "Longitud Calzada",
      dataIndex: ["calzada", "longitud"],
      key: "calzadaLongitud",
    },
    {
      title: "Número Segmento",
      dataIndex: ["calzada", "segmento", "numero"],
      key: "segmentoNumero",
    },
    {
      title: "Longitud Segmento",
      dataIndex: ["calzada", "segmento", "longitud"],
      key: "segmentoLongitud",
    },
    {
      title: "Nomenclatura Segmento",
      dataIndex: ["calzada", "segmento", "nomenclatura"],
      key: "segmentoNomenclatura",
    },
  ];

  return (
    <ClientLayout>
      <Table
        dataSource={recursos}
        columns={columns}
        rowKey="codigo"
        pagination={{ pageSize: 10 }}
        bordered
        title={() =>
          "A continuación se muestra el segmento, junto a sus calzadas y bordillos asociados"
        }
      />
    </ClientLayout>
  );
}
