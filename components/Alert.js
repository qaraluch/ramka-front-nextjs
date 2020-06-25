import Container from "@material-ui/core/Container";

export default function Alert({ preview }) {
  return (
    <div className="">
      <Container>
        <div className="">{preview ? <>alert - preview</> : <>alert</>}</div>
      </Container>
    </div>
  );
}
