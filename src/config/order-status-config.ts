import { OrderStatus } from "@/types";

type OrderStatusInfo = {
  label: string;
  value: OrderStatus;
  progressValue: number;
};

export const ORDER_STATUS: OrderStatusInfo[] = [
  { label: "Pedido confirmado", value: "placed", progressValue: 0 },
  {
    label: "Aguardando confirmação do estabelecimento",
    value: "paid",
    progressValue: 25,
  },
  { label: "Preparando o pedido", value: "inProgress", progressValue: 50 },
  { label: "Saiu para a entrega", value: "outForDelivery", progressValue: 75 },
  { label: "Pedido entregue", value: "delivered", progressValue: 100 },
];