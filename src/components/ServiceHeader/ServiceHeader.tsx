import { ISubscription } from '../../utils/interfaces/interfaces';
import './ServiceHeader.scss'

interface IServiceHeaderProps {
  selectSubscription: ISubscription
}

function ServiceHeader(props:IServiceHeaderProps) {
  return (
    <div className="service-header">
      <img src={props.selectSubscription.serviceIconSmall} alt="" />
      <h2>{props.selectSubscription.name}</h2>
    </div>
  );
}

export default ServiceHeader;
