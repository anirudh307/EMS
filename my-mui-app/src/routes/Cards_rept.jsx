import Cards from "../componants/Cards.jsx"

const Cards_rept = () => {
  const cardsData = [
    { icon: "⚙", title: "Employee Administration", description: "Manage employee activities efficiently. Manage employee activities efficiently.Employees can work in various fields and industries, from healthcare and education to technology, retail, and manufacturing. The roles and responsibilities of an employee can vary significantly depending on the nature of the business and the employee's position. " },
    { icon: "💰", title: "Salary Administration", description: "Handle payroll and salary distribution. Manage employee activities efficiently.Employees can work in various fields and industries, from healthcare and education to technology, retail, and manufacturing. The roles and responsibilities of an employee can vary significantly depending on the nature of the business and the employee's position." },
    { icon: "📅", title: "Leave Administration", description: "Manage employee leaves and absences. Manage employee activities efficiently. Employees can work in various fields and industries, from healthcare and education to technology, retail, and manufacturing. The roles and responsibilities of an employee can vary significantly depending on the nature of the business and the employee's position." },
    { icon: "🏠", title: "Login Administration", description: "Secure access to the system. Manage employee activities efficiently.Employees can work in various fields and industries, from healthcare and education to technology, retail, and manufacturing. The roles and responsibilities of an employee can vary significantly depending on the nature of the business and the employee's position." },
  ];

  return (
    <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
      {cardsData.map((card, index) => (
        <Cards key={index} icon={card.icon} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

export default Cards_rept;