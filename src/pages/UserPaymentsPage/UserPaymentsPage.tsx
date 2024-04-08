import { ReactElement } from 'react';
import styled from 'styled-components';
import { useSelectorTyped } from '../../hooks/store';
import PaymentCard from '../../components/PaymentCard/PaymentCard';
import dashboard from '../../images/other_images/Info.png'

const Img = styled.img`
  width: 100%;
  margin-top: 25px;
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  text-align: left;
`;

const PaymentsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

export default function UserPaymentsPage(): ReactElement {
  const paymentsList = useSelectorTyped(
    (store) => store.currentUserReducer.paymentHistory
  );

  return (
    <section>
      <Title>История платежей</Title>
      <Img src={dashboard} alt="" />
      <PaymentsList>
        {paymentsList.map((item, index) => (
          <li key={`payment-${index}`}>
            <PaymentCard card={item}/>
          </li>
        ))}
      </PaymentsList>
    </section>
  );
}
