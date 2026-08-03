const customerNames = [
  "Aarav Sharma",
  "Ananya Gupta",
  "Rohit Verma",
  "Sneha Iyer",
  "Karan Mehta",
  "Pooja Singh",
  "Rahul Malhotra",
  "Neha Kapoor",
  "Vikram Joshi",
  "Priya Nair",
  "Amit Patel",
  "Riya Chopra",
  "Siddharth Bansal",
  "Kavya Rao",
  "Arjun Khanna",
  "Ishita Aggarwal",
  "Manish Tandon",
  "Simran Kaur",
  "Deepak Saxena",
  "Nidhi Mishra",
  "Akash Yadav",
  "Shubham Pandey",
  "Tanvi Deshpande",
  "Mohit Arora",
  "Aditi Kulkarni",
  "Harsh Vardhan",
  "Swati Goyal",
  "Nikhil Jain",
  "Meera Menon",
  "Rakesh Chauhan",
  "Ankit Srivastava",
  "Pallavi Bose",
  "Saurabh Dubey",
  "Divya Bhatt",
  "Varun Ahuja",
  "Shalini Goel",
  "Yash Mittal",
  "Preeti Sinha",
  "Aditya Shetty",
  "Komal Bhatia",
  "Abhishek Rana",
  "Sonal Arvind",
  "Pranav Kuldeep",
  "Juhi Malik",
  "Rohan Naik",
  "Sheetal Puri",
  "Udit Narayan",
  "Bhavya Shukla",
  "Kriti Arun",
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
  if (count <= 0) return [];
  return Array.from({ length: count }, (_, i) => {
    const orderValue = Math.floor(Math.random() * 900 + 100);
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
