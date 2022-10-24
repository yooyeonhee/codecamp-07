import styled from "@emotion/styled";

export default function GridTestPage() {
  const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <main>
        <Wrapper>
          <Container>
            <div>asdfaf</div>
          </Container>
        </Wrapper>
      </main>
    </>
  );
}
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0px 30px;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(auto-fill, 8px);
  gap: 8px;
  :nth-child(1) {
    grid-column: 1/3;
    grid-row: 1;
  }
`;
