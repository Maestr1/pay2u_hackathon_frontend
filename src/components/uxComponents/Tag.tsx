import styled from 'styled-components';

const StyledTag = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 4px 12px;
  border-radius: 30px;
  background: var(--navy-blue-2);
  color: var(--white);
`;

export default function Tag() {
  return <StyledTag>5%</StyledTag>;
}
