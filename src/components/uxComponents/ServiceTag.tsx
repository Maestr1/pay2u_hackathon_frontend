import styled from 'styled-components';

const StyledTag = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 4px 12px;
  border-radius: 30px;
  background: var(--navy-blue-2);
  color: var(--white);
`;
export default function ServiceTag() {
  return <StyledTag>Кэшбек 5%</StyledTag>;
}
