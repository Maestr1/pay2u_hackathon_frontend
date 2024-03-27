import styled from 'styled-components';

interface ISmallFullWidthCardProps {
  card: {
    title: string;
    icon: string;
  },
  description?: string;
}


const Card = styled.div`
font-size: 14px;
font-weight: 600;
line-height: 1.43;
box-sizing: border-box;
padding: 12px 16px;
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
border-radius: 12px;
box-shadow: 0 4px 15px 0 rgba(95, 105, 131, 0.12),
  0 5px 4px 0 rgba(95, 105, 131, 0.05), 0 0 4px 0 rgba(95, 105, 131, 0.07);
color: var(--black-80);
& h3 {
  margin: 0;
}
& p {
  margin: 0;
}
`;

const TitleWrapper = styled.div`
display: flex;
align-items: center;
gap: 10px;`
export default function SmallFullWidthCard(props: ISmallFullWidthCardProps) {

  return (
    <Card className="card-list__link link">
      <TitleWrapper className="card-list__title">
        <img src={props.card.icon} alt="" />
        <h3>{props.card.title}</h3>
      </TitleWrapper>
      <p>{props.description}</p>
    </Card>
  );
}
