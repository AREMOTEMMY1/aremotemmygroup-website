let shipments = global.shipments || [];
global.shipments = shipments;

export default function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body || {};

    const shipment = {
      id: Date.now(),
      status: "PENDING",
      data,
      createdAt: new Date().toISOString(),
    };

    shipments.push(shipment);

    return res.status(200).json(shipment);
  }

  res.status(405).json({ error: "Method not allowed" });
}
