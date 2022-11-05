import { Header, HeaderContainer } from './style';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const PageHeader = props => {
  const navigate = useNavigate();
  const historyback = () => {
    navigate(-1);
  };
  if (props.name)
    return (
      <HeaderContainer>
        <FontAwesomeIcon
          onClick={historyback}
          icon={faArrowLeft}
          size="2x"
          style={{ paddingBottom: '10px', borderBottom: '1px solid black' }}
        />
        <Header>{props.children}</Header>
      </HeaderContainer>
    );
  return <Header>{props.children}</Header>;
};

export default PageHeader;
