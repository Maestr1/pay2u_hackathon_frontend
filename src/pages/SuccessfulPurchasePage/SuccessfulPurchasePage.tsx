import { ReactElement } from 'react';
import './SuccessfulPurchasePage.scss';
import succesfullPurchaseImg from '../../images/other_images/succefullPurchaseImg.png';
import styled from 'styled-components';
import { IService, ITariff } from '../../utils/interfaces/interfaces';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Section = styled.section`
padding-bottom: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100svh - 72px);
`;

const MainWrapper = styled.div`
  flex: 1 0 auto;
`;

const Image = styled.img`
  padding-top: 48px;
  width: 75%;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const SubTitle = styled.p`
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
`;

const Line = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const LineName = styled.span`
  display: block;
  color: var(--grey-1);
  line-height: 1.5;
`;

const LineInfo = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  color: var(--black);
`;

const LineStatus = styled.span<{ $succesfull: boolean }>`
  display: block;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  color: ${(props) => (props.$succesfull ? 'var(--green)' : 'var(--red)')};
`;

const ToolTip = styled.p`
  margin: 0;
  padding-top: 8px;
  text-align: left;
  font-size: 12px;
  color: var(--grey-1);
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  align-self: flex-end;
`;

const OnbordingLink = styled(Link)`
  display: block;
  margin-top: 20px;
  width: max-content;
  text-decoration: none;
  color: var(--navy-blue-2);
  &:active {
    color: var(--navy-blue-1);
  }
`;

interface ISuccessfulPurchasePageProps {
  service: IService;
  tariff: ITariff;
  payment: any;
}

function SuccessfulPurchasePage(
  props: ISuccessfulPurchasePageProps
): ReactElement {
  //TODO добавить сивол валюты
  //TODO исправить под бэк
  return (
    <Section>
      
      <MainWrapper>
        <Image src={succesfullPurchaseImg} alt="Успешная оплата" />
        <Title>Оплата прошла</Title>
        <SubTitle>Вы подписались на {props.service?.name || 'Яндекс'}</SubTitle>
        <Line>
          <LineName>Тариф</LineName>
          <LineInfo>{props.tariff?.name || 'Выгодный'}</LineInfo>
        </Line>
        <Line>
          <LineName>Списано</LineName>
          <LineInfo>{props.payment?.cost || '1998 ₽'}</LineInfo>
        </Line>
        <Line>
          <LineName>Автоплатеж</LineName>
          <LineStatus $succesfull={props.payment?.autopayment}>
            {props.payment?.autopayment ? 'Подключен' : 'Не подключен'}
          </LineStatus>
        </Line>
        {props.payment?.autopayment && (
          <Line>
            <LineName>Следующее списание</LineName>
            <LineInfo>{props.payment?.expiredDate || 'Выгодный'}</LineInfo>
          </Line>
        )}
        <ToolTip>Управлять подпиской можно через «Мои подписки»</ToolTip>{' '}
      </MainWrapper>
      <LinkWrapper>
        <Button component={Link} to={'/guide'} variant="contained">
          Подробнее
        </Button>
        <OnbordingLink to={'/'}>Перейти на главный экран</OnbordingLink>
      </LinkWrapper>
    </Section>
  );
}

export default SuccessfulPurchasePage;
