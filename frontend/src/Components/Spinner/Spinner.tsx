import ClipLoader from 'react-spinners/ClipLoader';
import "./Spinner.css";

interface Props {
    isLoading?: boolean;
}

const Spinner = ({isLoading = true}: Props) => {
  return (
    <>
    <div id="loading-spinner">
        <ClipLoader 
        color='#36d7b7'
        loading={isLoading}
        size={35}
        aria-label = "Loading Spinner"
        data-testid="loader"
        />
    </div>
    </>
  )
}

export default Spinner