import Container from "@material-ui/core/Container";
import TableDBRecords from "../components/TableDBRecords";

export default function AppContainer(props) {
  return (
    <Container maxWidth="lg">
      <TableDBRecords {...props} />
    </Container>
  );
}
