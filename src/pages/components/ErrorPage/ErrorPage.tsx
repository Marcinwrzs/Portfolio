import {Motion} from 'pages/Motion';
import { ErrorPageWrapper } from './ErrorPage.styled' 

const ErrorPage: React.FC = () => {
  return (
    <Motion>
      <ErrorPageWrapper>
        <h2>404 Error</h2>
        <h2>This page does not exist.</h2>
      </ErrorPageWrapper>
    </Motion>
  );
}

export default ErrorPage;  