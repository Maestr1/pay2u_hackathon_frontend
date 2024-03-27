import styled from 'styled-components';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import SmallFullWidthCard from '../../components/SmallFullWidthCard/SmallFullWidthCard';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  align-self: flex-start;
  margin: 0;
  padding-block: 12px;
  text-align: left;
  font-weight: 600;
  line-height: 1.5;
`;
const CardList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 8px;
`;

const CardWrapper = styled.div`
  padding-block: 24px 40px;
  display: flex;
  gap: 15px;
  width: 100%;
`;
const PromoCard = styled.div`
  & img {
    border-radius: 12px;
    box-shadow: 0 4px 90px 0 rgba(95, 105, 131, 0.16),
      0 5px 4px 0 rgba(95, 105, 131, 0.08), 0 0 4px 0 rgba(95, 105, 131, 0.06);
    width: 100%;
  }
`;
const OnbordingLink = styled(Link)`
  display: block;
  margin-top: 20px;
  width: max-content;
  text-decoration: none;
  color: var(--primary-color-80);
  &:active {
    color: var(--primary-color-90);
  }
`;

export default function OnboardingPage() {
  return (
    <Section>
      <Title>Наш сервис умеет</Title>
      <CardList>
        <li>
          <SmallFullWidthCard
            card={{ title: 'Хранить подписки в одном месте', icon: '' }}
          />
        </li>
        <li>
          <SmallFullWidthCard
            card={{ title: 'Получать кэшбэк за каждую оплату', icon: '' }}
          />
        </li>
        <li>
          <SmallFullWidthCard
            card={{ title: 'Управлять подписками в одном экране', icon: '' }}
          />
        </li>
      </CardList>
      <CardWrapper>
        <PromoCard>
          <img src="./src/images/cards_images/ivi_promo.png" alt="" />
        </PromoCard>
        <PromoCard>
          <img src="./src/images/cards_images/yandex.plus_promo.png" alt="" />
        </PromoCard>
      </CardWrapper>
      <Button variant="contained">Подробнее</Button>
      <OnbordingLink to={'/'}>Перейти на главный экран</OnbordingLink>
    </Section>
  );
}
