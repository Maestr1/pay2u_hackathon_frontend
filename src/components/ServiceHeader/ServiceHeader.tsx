import { IService } from '../../utils/interfaces/interfaces';
import './ServiceHeader.scss';

interface IServiceHeaderProps {
  selectSubscription: IService;
}

function ServiceHeader(props: IServiceHeaderProps) {
  return (
    <div className="service-header">
      <img src={props.selectSubscription.icon_small} alt="" />
      <h2>{props.selectSubscription.name}</h2>
    </div>
  );
}

export default ServiceHeader;
