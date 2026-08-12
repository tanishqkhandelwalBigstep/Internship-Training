const orders = [
  { id: 1, customer: "Aarav", items: [{ name: "Keyboard", price: 1200, qty: 2 }, { name: "Mouse", price: 500, qty: 1 }], status: "delivered", discount: 100 },
  { id: 2, customer: "Diya", items: [{ name: "Monitor", price: 8000, qty: 1 }], status: "delivered" },
  { id: 3, customer: "Kabir", items: [{ name: "Cable", price: 200, qty: 3 }], status: "cancelled", discount: 50 },
  { id: 4, customer: "Aarav", items: [{ name: "Headphones", price: 2500, qty: 1 }], status: "delivered", coupon: { amount: 300 } },
  { id: 5, customer: "Meera", items: [{ name: "Webcam", price: 1500, qty: 2 }], status: "pending" },
];

const orderTotal = (order) => {
  const itemsTotal = order.items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discount = order.discount ?? order.coupon?.amount ?? 0;
  return itemsTotal - discount;
};

const format = (n) => "Rs " + n.toLocaleString("en-IN");

const delivered = orders.filter((order) => order.status === "delivered");

const report = delivered.map((order) => {
  const { id, customer } = order;
  return { id, customer, total: orderTotal(order) };
});

const totalRevenue = report.reduce((sum, order) => sum + order.total, 0);
const averageOrder = Math.round(totalRevenue / report.length);
const topOrder = [...report].sort((a, b) => b.total - a.total)[0];

console.log("Revenue Report");
console.log("Delivered orders:", delivered.length);
console.log("Total revenue:", format(totalRevenue));
console.log("Average order:", format(averageOrder));
console.log("Top order:", topOrder.customer, format(topOrder.total));
console.log("");

report.forEach(({ id, customer, total }) => {
  console.log(`#${id} ${customer} -> ${format(total)}`);
});


