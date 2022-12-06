import TableFour from "./TableFour";
import TableOne from "./TableOne";
import TableThree from "./TableThree";
import TableTwo from "./TableTwo";

const Table = () => {
  return (
    <section className="container w-full mx-auto">
      <TableOne />
      <TableTwo />
      <TableThree />
      <TableFour />
    </section>
  );
};

export default Table;
