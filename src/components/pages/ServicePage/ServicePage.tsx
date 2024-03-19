import { ReactElement } from 'react';
import './ServicePage.scss'
import { useParams } from 'react-router-dom';

function ServicePage(): ReactElement {

  const {id} = useParams()

  return (
    <section>
      { id }
    </section>
  );
}

export default ServicePage;
