const customerNames = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Emma",
  "Sophia",
  "Olivia",
  "Noah",
  "Liam",
  "Ava",
];

const countries = [
  "India",
  "USA",
  "Germany",
  "UK",
  "Canada",
  "France",
  "Australia",
  "Japan",
];

const tiers = ["Free", "Pro", "Enterprise"];
const statuses = ["Pending", "Completed", "Cancelled"];

export function generateOrders(count = 5000) {
  return Array.from({ length: count }, (_, i) => {
    const orderValue = Math.floor(Math.random() * 9000) + 1000;
    const discountPercent = Math.floor(Math.random() * 30);

    return {
      id: `ORD-${i + 1}`,
      customerName:
        customerNames[Math.floor(Math.random() * customerNames.length)],
      customerTier: tiers[Math.floor(Math.random() * tiers.length)],
      country: countries[Math.floor(Math.random() * countries.length)],
      orderValue,
      itemsCount: Math.floor(Math.random() * 10) + 1,
      discountPercent,
      status: statuses[Math.floor(Math.random() * statuses.length)],
      createdAt: Date.now() - Math.floor(Math.random() * 10000000000),
    };
  });
}
